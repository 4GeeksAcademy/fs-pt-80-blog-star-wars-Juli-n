const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            url: 'https://www.swapi.tech/api',
            people: [],
            vehicles: [],
            planets: [],
            favorites: JSON.parse(localStorage.getItem('favorites')) || [] // Cargar desde localStorage
        },
        actions: {
            loadInitialData: async () => {
                try {
                    const peopleResp = await fetch(getStore().url + '/people');
                    const peopleData = await peopleResp.json();
                
                    const vehiclesResp = await fetch(getStore().url + '/vehicles');
                    const vehiclesData = await vehiclesResp.json();
                    
                    const planetsResp = await fetch(getStore().url + '/planets');
                    const planetsData = await planetsResp.json();

                    setStore({
                        people: peopleData.results,
                        vehicles: vehiclesData.results,
                        planets: planetsData.results
                    });
                } catch (error) {
                    console.error('Error loading initial data:', error);
                }
            },

            toggleFavorite: (item) => {
                const store = getStore();
                const exists = store.favorites.some(fav => fav.uid === item.uid && fav.type === item.type);
                
                let newFavorites;
                if (exists) {
                    newFavorites = store.favorites.filter(fav => !(fav.uid === item.uid && fav.type === item.type));
                } else {
                    newFavorites = [...store.favorites, item];
                }
                
                localStorage.setItem('favorites', JSON.stringify(newFavorites)); // Persistir en localStorage
                setStore({ favorites: newFavorites });
            },

            loadDetails: async (type, uid) => {
                try {
                    const resp = await fetch(`${getStore().url}/${type}/${uid}`);
                    const data = await resp.json();
                    return data.result;
                } catch (error) {
                    console.error('Error loading details:', error);
                    return null;
                }
            }
        }
    };
};

export default getState;