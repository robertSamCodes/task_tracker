import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { isClosedAction } from '../Actions/addTaskAction'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const TaskHeader = () => {

    const dispatch = useDispatch()
    const isClosed = useSelector(state => state.isClosed)
    console.log(isClosed)
    return (
        <Box className="task_header" margin={2}>
            <Typography variant="h5" color="#1976d2" fontWeight="bold">
                Task Tracker
            </Typography>
            <Button variant="contained"
                onClick={
                   () => dispatch(isClosedAction(!isClosed))
               }
           
                color="primary" size="small">
                {!isClosed ? "Open" : "Close"}
            </Button>
        </Box>
    )
}

export default TaskHeader
