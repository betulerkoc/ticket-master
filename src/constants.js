// const rootApiURL = "http://5dd7af92505c590014d3b4ac.mockapi.io/";

// const petsPath = "pets";

// export const getPets = () => {
//     return fetch(rootApiURL + petsPath)
//         .then((resp) => resp.json())
// };

const rootApiURL = "http://app.ticketmaster.com/discovery/v1/events.json?&";
const apiKey = "apikey=6VZ4GKibC9XVGHFYqTMof7So3DS06y5Y";

export const getMovies = () => {
    return fetch(rootApiURL + apiKey)
    .then((resp) => resp.json())
}