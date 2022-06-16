import { useState, useEffect } from "react";
//API
import API from '../API';

const initialState = {
    page:0,
    results:[],
    total_pages:0,
    total_results: 0

}


export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error , setError] = useState(false);
    const [isLoadingMore, setLoadingMore] = useState(false);

    const fetchMovies = async(page, searchTerm = "") => {
        try{
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);
            

            setState(prev=>({
                ...movies,
                result: 
                page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
                 
            }));

        }catch(error){
            setError(true);
        }
            setLoading(false);

    };
    //initial  and search render
    useEffect(() => {
        setState(initialState);
        // useState = (initialState);
        fetchMovies(1, searchTerm);
    }, [searchTerm]);


    return {state, loading, error, searchTerm, setSearchTerm, isLoadingMore, setLoadingMore};
}