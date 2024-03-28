import { ListItem, UnorderedList, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { connect } from 'react-redux'
import { addbytask, deletebytask } from '../Objects/ActionObjs'
import { bindActionCreators } from 'redux'

function AppCompletedList({completedlist, alllist, addbytask, deletebytask}) {
  return (
    <div>
        <Heading as={'h4'}>Completed List</Heading>
        <UnorderedList bg={'InfoBackground'} w={{base:'94%', sm:'96%', md:'94%', lg:'92%'}} m='auto'>
            {(completedlist.length) && completedlist.map((i, index)=>{
                return <ListItem shadow={'md'} bg={'blue.300'} color={'black'} border={'1px solid'} 
                            p={'2'} m='auto' listStyleType={'upper-alpha'} textTransform='capitalize'
                            textAlign={'left'} key={index} display={'flex'} justifyContent={'space-between'}
                            alignItems={'center'}>
                            {i.content}
                            <Flex gap={2}>
                                <Button onClick={()=>{addbytask(i); console.log(alllist)}}>Repeat Task</Button>
                                <Button onClick={()=>{deletebytask(i); console.log(alllist)}}>Delete Task</Button>
                            </Flex>
                        </ListItem>
                    })}
        </UnorderedList>
    </div>
  )
}

const mapStateToProps = (state) =>{
    return { completedlist: state.selectedtask , alllist: state.tasks }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({ addbytask, deletebytask }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AppCompletedList)