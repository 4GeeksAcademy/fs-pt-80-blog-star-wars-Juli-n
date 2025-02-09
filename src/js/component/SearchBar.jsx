import React, { useState, useContext } from "react";
import { Form, InputGroup, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const searchAll = async (searchTerm) => {
        try {
            const responses = await Promise.all([
                fetch(`https://www.swapi.tech/api/people?name=${searchTerm}`),
                fetch(`https://www.swapi.tech/api/planets?name=${searchTerm}`),
                fetch(`https://www.swapi.tech/api/vehicles?name=${searchTerm}`)
            ]);
            
            const data = await Promise.all(responses.map(res => res.json()));
            
            const combinedResults = data.flatMap((result, index) => {
                const type = ['people', 'planets', 'vehicles'][index];
                return result.results.map(item => ({
                    ...item,
                    type: type
                }));
            });
            
            setResults(combinedResults);
        } catch (error) {
            console.error("Search error:", error);
        }
    };

    return (
        <div className="position-relative">
            <InputGroup>
                <Form.Control
                    type="text"
                    placeholder="Search characters, planets, vehicles..."
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        searchAll(e.target.value);
                    }}
                />
            </InputGroup>
            
            {results.length > 0 && (
                <Dropdown.Menu show className="w-100">
                    {results.map((item) => (
                        <Dropdown.Item
                            key={`${item.type}-${item.uid}`}
                            onClick={() => {
                                navigate(`/details/${item.type}/${item.uid}`);
                                setQuery("");
                                setResults([]);
                            }}
                        >
                            {item.name} ({item.type})
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            )}
        </div>
    );
};
export default SearchBar;