import { ListItem, UnorderedList, Button } from '@chakra-ui/react'
import React from 'react'
import { connect } from 'react-redux'
// import { initiate, removeitem } from '../Objects/ActionObjs'

function AppCompletedList({completedlist}) {
  return (
    <div>
        <h1>Completed List</h1>
        <UnorderedList bg={'InfoBackground'} w={{base:'94%', sm:'96%', md:'94%', lg:'92%'}} m='auto'>
            {(completedlist.length) && completedlist.map(i=>{
                return <ListItem shadow={'md'} bg={'blue.300'} color={'black'} border={'1px solid'} 
                                 p={'2'} m='auto' listStyleType={'upper-alpha'} textTransform='uppercase'
                                 textAlign={'left'} key={i.id}>
                            {i.content}
                        </ListItem>})}
        </UnorderedList>
    </div>
  )
}

const mapStateToProps = (state) =>{
    
    return { completedlist: state.selectedtask }
}

export default connect(mapStateToProps)(AppCompletedList)