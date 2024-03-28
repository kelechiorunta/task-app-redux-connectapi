import React from 'react'
import { Box, Text, Heading, Button, Input } from '@chakra-ui/react'
import { increment, decrement } from '../Objects/ActionObjs'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header'
import AppAddToList from './AppAddToList'
import { useState } from 'react'
import AppCompletedList from './AppCompletedList'
import { connect } from 'react-redux'

function AppLayout({currentStateLength}) {
    const updated_value = useSelector((state)=>state.value)
    const dispatch = useDispatch()
    const [displayedVal, setDisplayedVal] = useState(updated_value)

  return (

    <Box p={4} width={{base:"96%", sm:'96%', md:'94%', lg:'90%'}} m='auto' shadow='md'>
        <Header/>
        <AppCompletedList />
        <Heading p={4} w={{base: '96%', sm:'96%', md:'94%', lg:'90%'}} m='auto' textAlign={'center'}>{`${currentStateLength} Tasks left`}</Heading>
        <Input type='text' p={4} value={updated_value} onChange={(e)=> setDisplayedVal(e.target.value)}/>
        <Button colorScheme='blue' onClick={()=>dispatch(increment())}>Add Value</Button>
        <Button colorScheme='blue' onClick={()=>dispatch(decrement())}>Decrease Value</Button>

        <AppAddToList />
    </Box>
  )
}

const mapStateToProps = (state) =>{
      const { tasks } = state
      return { currentStateLength: tasks.length && tasks? tasks.length : 0 }
}

export default connect(mapStateToProps)(AppLayout)