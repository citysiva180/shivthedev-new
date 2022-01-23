import React from 'react';
import { Container } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

function HomePage() {
  return <Container maxW='container.xl'>
     <Grid
  h='100vh'
//   templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>
  <GridItem colSpan={1} bg='blue.500' />
  <GridItem colSpan={3}  bg='blue.500' />
  <GridItem colSpan={1}  bg='blue.500' />
  {/* <GridItem colSpan={4} bg='tomato' /> */}
</Grid>
  </Container>;
}

export default HomePage;
