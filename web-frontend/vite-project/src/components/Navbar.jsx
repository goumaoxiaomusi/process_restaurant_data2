import { Box,Image,Flex, Spacer} from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import logo from "../assets/logo.svg"

const Logo = logo
function Navbar(){
    return(
        <Box w='100vw' h='8vh' bg='#FF8000'>
            <Flex alignItems='stretch' mx='2vw' my='1vh' gap='75vw'>
                <Image src={Logo} alt='logo' w='15vw' h='6vh' alignSelf='center'/>
                <SearchIcon alignSelf='center' color='white'/>
            </Flex>
        </Box>
    )
}
export default Navbar