import React from 'react';
import { Grid, GridItem, Container, Center } from '@chakra-ui/react'
import { Heading, Flex, Box , Spacer, Button} from '@chakra-ui/react'
import Toggle from '../toggle';
function NavBar() {
  return <Container maxW='container.xl'>
      <Grid
//   h='70px'
  templateRows='repeat(1, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
// templateColumns='repeat(8, 1fr)' gap={6}
// rowSpan={2} colSpan={8} bg="lime"
>
<GridItem colSpan={1}   ><Center  p={5}><p>Logo</p></Center></GridItem>
<GridItem colSpan={3}  ><Center p={3}><Heading>ShivtheDev.tech</Heading></Center></GridItem>
<GridItem colSpan={1}   ><Center p={3}><Toggle/></Center></GridItem>


{/* <GridItem w='100%'  bg='blue.500' /> */}
</Grid>
<br></br>
{/* <Flex>
  <Box p='4'>
    <Heading size='md'>Chakra App</Heading>
  </Box>
  <Spacer />
  <Box>
    <Button colorScheme='teal' mr='4'>
      Sign Up
    </Button>
    <Button colorScheme='teal'>Log in</Button>
  </Box>
</Flex> */}
</Container>

}

export default NavBar;
