const rootApiURL = "http://5dd7af92505c590014d3b4ac.mockapi.io/";

const petsPath = "pets";

export const getPets = () => {
    return fetch(rootApiURL + petsPath)
        .then((resp) => resp.json())
};
