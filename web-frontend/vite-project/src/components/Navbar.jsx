import { Box,Image,Flex,IconButton} from "@chakra-ui/react"
import { SearchIcon} from '@chakra-ui/icons'
import logo from "../assets/logo.svg"
import { useNavigate } from "react-router-dom";

const Logo = logo
function Navbar(){
    const navigate = useNavigate();
    function handleOnClick(){
        navigate("/");
    }

    return(
        <Box w='100vw' h='8vh' bg='#FF8000'>
            <Flex alignItems='stretch' mx='2vw' my='1vh' gap='75vw'>
                <Image src={Logo} alt='logo' w='15vw' h='6vh' alignSelf='center'/>
                <IconButton 
                aria-label='Search Postcode' 
                icon={<SearchIcon />}  
                alignSelf="center" 
                bg='#FF8000' 
                color='white'
                onClick={handleOnClick}
                />
            </Flex>
        </Box>
    )
}
export default Navbar