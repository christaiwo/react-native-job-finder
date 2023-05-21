import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from '@env';

const rapidApiKey = '3d4f838e8amsh7220b90a65168d6p126d1bjsn2ab65d01d6aa';


const useFetch = (endpoint, query) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': rapidApiKey,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
    };

    const fetchData = async () => {
        setIsLoading(true);
    
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('There is an error');
            setIsLoading(false);
        } finally {
    
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () =>{
        setIsLoading(true);
        fetchData();
    }


    return {data, isLoading, error, refetch};
}


export default useFetch;



