import React, {useState, useEffect} from 'react';

// config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';

//COMPONENTS


//hooks
import { useHomeFetch } from '../hooks/useHomeFetch'; 

//images
import NoImage from '../images/no_image.jpg';
import Grid from './Grid';
import HeroImage from './HeroImage';
import Thumb from './Thumb';
const Home = () => {
    const {state, loading, error} = useHomeFetch();
    
    console.log(state);
    return (
    <>
    {state.results[1] ?
    
    <HeroImage
    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
    title={state.results[0].original_title}
    text={state.results[0].overview}
    />
    :null
    }
    <Grid header='Popular Movies' >
        {state.results.map(movies => (
            <Thumb movieId={movies.id} clickable={true} image={movies.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movies.poster_path}` : NoImage} />
            >

        
            </Thumb>

        ))};

    </Grid>
    

    </>
    );
};
export default Home;