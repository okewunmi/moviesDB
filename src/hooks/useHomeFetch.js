import { useState, useEffect, useRef } from "react";


export const useHomeFetch = () => {
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);
    const [error , setError] = useState(false);

    const fetchMovies = async(page, searchTerm = "") => {
        try{
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);
            

            setState(prev=>({
                ...movies,
                result: 
                page > 1 ? [...prev.result, ...movies.results] : [...movies.results]
                 
            }));

        }catch(error){
            setError(true);
        }
            setLoading(false);

    };
    //initial render
    useEffect(() => {
        fetchMovies(1);
    }, []);
}