import { Button, ListItem, UnorderedList, Input, Checkbox, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addtolist } from '../Objects/ActionObjs'
import AppCheckComplete from './AppCheckComplete'
import { sortlist } from '../Selectors/SortList'

function AppAddToList({alltasks, selectedtask, addtolist}) {

    const [info, setInfo] = useState('')

    const handleAdd = () =>{
        info.length>0 && addtolist(info)
        setInfo("")
    }

    
  return (
    <div>
        <Input type='text' placeholder="Enter Task Here" onChange={(e) => setInfo(e.target.value)} value={info} />
        <Button onClick={handleAdd}>Add To List</Button>
        <UnorderedList>
            {alltasks.map(i=>{
                return (
                        <ListItem key={`key${i.id}`} textAlign={'left'}>
                            
                            <Flex h='30px'justifyContent={'space-between'} alignItems={'center'}>
                                <Text>{i.content}</Text>
                                <AppCheckComplete taskId={i.id}/>
                            </Flex>
                            
                        </ListItem> 
                        
                        )})}
        </UnorderedList>
        {/* {selectedtask.map(i=><h1>{`I have completed ${i.content} assignment`}</h1>)} */}
    </div>
  )
}
const mapStateToProps = (state) =>{
    const {tasks , selectedtask} = state
    const sortedlist = sortlist(state)//tasks.sort((a,b)=>a.id - b.id)//sortlist(tasks)
    return {alltasks: sortedlist}
}
export default connect(mapStateToProps, { addtolist })(AppAddToList)