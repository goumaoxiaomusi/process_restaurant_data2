import { Card,Stack,Box,Text,Flex,Badge} from "@chakra-ui/react"

function ResCard(restaurant){

    return(
    <Card w='15vw' h='35vh'>
        <Stack mx='1vw' gap={2}>
            <Box w='14vw' h='10vh'>
                <Text 
                marginTop='2vh'
                fontSize="2.6vh"
                fontWeight='bold'
                >{restaurant.restaurant.name}
                </Text>
            </Box>
            <Box w='14vw' h='5vh'>
                <Text
                fontSize="2vh"
                fontWeight='normal'
                >
                📍
                {restaurant.restaurant.address.firstLine}
                ,
                {restaurant.restaurant.address.city}
                </Text>
            </Box>
            <Box w='13.5vw' h='10vh'>
                <Flex flexWrap='wrap' gap={1}>
                {restaurant.restaurant.cuisines.map((cuisine,index)=>(
                    <Badge 
                    variant='subtle'
                    fontSize='1.8vh'
                    fontWeight='normal'
                    textTransform='lowercase' 
                    colorScheme='cyan'
                    color='blue.500'
                    key={index}>{cuisine.name}
                    </Badge>
                ))}
                </Flex>
            </Box>
            <Box alignSelf='right' w='15vw' h='3vh'>
                <Text fontWeight='normal' fontSize='3vh'>
                ⭐
                {restaurant.restaurant.rating.starRating}
                </Text>
            </Box>
           
            
            
            
            
        </Stack>
  </Card>
    )
}

export default ResCard;