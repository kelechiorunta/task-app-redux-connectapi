import React from 'react'
import { connect } from 'react-redux'
import { removeitem } from '../Objects/ActionObjs'
import { Checkbox } from '@chakra-ui/react'

function AppCheckComplete({tasks, completedtask, taskId, removeitem}) {
  return (
    <Checkbox onChange={()=>{removeitem(taskId)}}>
        Completed
    </Checkbox>
    
  )
}

const mapStateToProps = (state) =>{    
    return { completedtask: state.selectedtask }
}

export default connect(null, { removeitem })(AppCheckComplete)