import { ListItem, UnorderedList, Button } from '@chakra-ui/react'
import React from 'react'
import { connect } from 'react-redux'
import { addbytask } from '../Objects/ActionObjs'

function AppCompletedList({completedlist, alllist, addbytask}) {
  return (
    <div>
        <h1>Completed List</h1>
        <UnorderedList bg={'InfoBackground'} w={{base:'94%', sm:'96%', md:'94%', lg:'92%'}} m='auto'>
            {(completedlist.length) && completedlist.map(i=>{
                return <ListItem shadow={'md'} bg={'blue.300'} color={'black'} border={'1px solid'} 
                                 p={'2'} m='auto' listStyleType={'upper-alpha'} textTransform='uppercase'
                                 textAlign={'left'} key={i.id} display={'flex'} justifyContent={'space-between'}
                                 alignItems={'center'}>
                            {i.content}
                            <Button onClick={()=>{addbytask(i); console.log(alllist)}}>Repeat Task</Button>
                        </ListItem>})}
        </UnorderedList>
    </div>
  )
}

const mapStateToProps = (state) =>{
    
    return { completedlist: state.selectedtask , alllist: state.tasks }
}

export default connect(mapStateToProps, { addbytask })(AppCompletedList)