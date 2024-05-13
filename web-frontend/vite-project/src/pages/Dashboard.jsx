import Navbar from "../components/Navbar";
import { Flex, Box,Select, Spacer } from "@chakra-ui/react";
import ResCard from "../components/ResCard";
import useFetch from "../hooks/useFetch";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

function Dashboard() {
    const{postcode} = useParams()
    console.log("Dashboard postcode"+postcode)
    const {data: restaurants, isPending, error} = useFetch(`http://localhost:8080/restaurant/${postcode}`)
    const [cities, setCities] = useState([]);
    const [selected,setSelected] = useState('');
    const [result, setResult] = useState([]);

    useEffect(()=>{
        if (selected) {
            const filteredRestaurants = restaurants.filter(restaurant => restaurant.address.city === selected);
            setResult(filteredRestaurants);
        } else {
            // If no city is selected, show all restaurants
            setResult(restaurants);
        }
    }, [restaurants, selected])
    

    function handleOnclick() {
        const newCities = restaurants.map((restaurant) => restaurant.address.city);
        const uniqueCitiesSet = new Set(newCities);
        console.log(uniqueCitiesSet);
        const uniqueCitiesArray = [...uniqueCitiesSet];
        setCities((prevCities) => [...prevCities, ...uniqueCitiesArray]);
    }

    const handleOnChange = (event) =>{
        setSelected(event.target.value);
        
    }


    return (
        <Flex flexDirection='column'>
            <Navbar />
            <Flex flexDirection='row' gap={2} marginEnd='3vw'>
            <Spacer/>
            <Select 
            alignSelf='end' 
            w='20vw' 
            h='6vh' 
            my='2vh' 
            placeholder='Select City' 
            fontSize='2.5vh' 
            color='gray' 
            onClick={handleOnclick} 
            value={selected} 
            onChange={handleOnChange}>
                {cities.map((city, index) => (
                    <option key={index} value={city} fontSize='2vh'>{city}</option>
                ))}
            </Select>
            </Flex>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <Flex flexWrap='wrap' gap={2} mx='2.5vw'marginTop='3vh'>
                {result && result.map((restaurant, index) => (
                    <ResCard key={index} restaurant={restaurant} />
                ))}
            </Flex>
            <Box></Box>
        </Flex>
    );
}

export default Dashboard;

