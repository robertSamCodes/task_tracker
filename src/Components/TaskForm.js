import { Button, Checkbox, FormControl, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { addTaskAction } from '../Actions/addTaskAction'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const TaskForm = () => {
   
    const isClosed = useSelector(state => state.isClosed)
    
    const [todos, setTodos] = useState("")
   
    const handleChange = e => setTodos(e.target.value)

    const dispatch = useDispatch()

    const handleDispatch = () => {
        dispatch(addTaskAction(todos))
        setTodos("")
    }
    return (
        isClosed ? <FormControl className="text_field_container">
            <TextField autoFocus={true} autoComplete="true" autoCapitalize="true"
                spellCheck="true" autoCorrect="true" size="small" label="Add task"
                placeholder="Eg. Check mail" className="text_field" margin="normal"
                value = {todos} onChange = {handleChange}
            />
            {/* Add day and time */}
            <TextField autoComplete="true" required
                autoCorrect="true" size="small" type="datetime-local"
             className="text_field" margin="normal" helperText="Add date and time"
              
            />

            <Box className="reminder" mb={2}>
                <Typography >Set Reminder</Typography>
                <Checkbox />
            </Box>

            <Button onClick = {() => handleDispatch()} disabled={todos.length ? false : true}
                style={{ width: "90%" }} color="primary" variant="contained">
                {todos.length ? "Save Task" : "Type to add tasks"}
            </Button>

        </FormControl> :
            <Box margin={4}>
                 <Typography variant="h6" fontWeight="regular" color="#333333">
                {/* <hr /> */}
                Form Closed. Tap button to add tasks.
            </Typography>
           </Box>
    )
}

export default TaskForm

