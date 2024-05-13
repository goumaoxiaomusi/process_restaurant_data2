import { Flex, Image,Box, FormControl,Input,Button} from "@chakra-ui/react";
import logo from "../assets/logo.svg"
import { useState} from "react";
import useFetch from "../hooks/useFetch";
import { Navigate } from "react-router-dom";



function SearchPage(){
    const[postcode, setPostcode] = useState('');
    const[url, setUrl] = useState('');
    const{data, isPending,error} = useFetch(url);

    function handleOnChange(event){
        const enterValue = (event.target.value);
        setPostcode(enterValue.toUpperCase());
        console.log(postcode)
    }

    function handleOnClick(){
        setUrl(`https://api.postcodes.io/postcodes/${postcode}/validate`)
    }

    if (data && data.result) {
        console.log()
        return <Navigate to={`/restaurant/${postcode}`}/>;
    }


    return(
        <Box bg='#FF8000' w='100vw' h='100vh'>
            <Flex flexDirection='column' paddingTop='20vh'>
                <Image src={logo} alt='logo' w='40vw' h='20vh' alignSelf='center' />
                <FormControl paddingLeft='32.5vw'>
                    <Flex>
                    <Input
                     w='30vw' 
                     h='8vh'
                     type='text' 
                     bg='white' 
                     placeholder="Enter a UK Postcode"
                     marginTop='3vh' 
                     onChange={handleOnChange}
                     />
                    <Button colorScheme='orange' w='6vw' h='8vh' marginTop='3vh' onClick={handleOnClick} >Search</Button>
                    </Flex>
                </FormControl>
            </Flex> 
        </Box>
 
    )
}


export default SearchPage;