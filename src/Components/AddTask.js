import { Button, Checkbox } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
import { clearAllAction } from '../Actions/addTaskAction'
import { useDispatch } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'

const AddTask = () => {
    
    const message = <p>Hey y'all. This task tracker app is basically a todo app with a little bit more finesse.
        It helps you keep track of your stuff.</p>
    
    const states = useSelector(state => state.todos)
    const clearAllTodos = useSelector(state => state.clearAllTodos)
    const dispatch = useDispatch()

    const notify = () => {
       toast( message ,
  {
      duration: 10000,
      style: {
          textTransform: 'Capitalize',
          fontWeight: 'normal'
      }
  }
);
    }
   
    return (
        // <h1>Testing</h1>
        <Box className="tasks" margin={2}>
            {states.map(initialTask => (
                <div className="task" key={Math.random() * 1_000_000}>
                    <p>{initialTask}</p>
                    {/* <small style={{ marginTop: -20 }}>{initialTask.initialDate}</small> */}
                   <div className="closeBtn">&times;</div>
                    <Checkbox />
                </div>
            ))}
            <Box mt={6} className='footer'>
                <Button color="primary" onClick={() => dispatch(clearAllAction(clearAllTodos))}>
                    Clear All
                </Button>  
                {/* <Routes> */}
                    {/* <Route path="/"> */}
                        {/* <AboutApp /> */}
                    {/* </Route> */}
                {/* </Routes> */}
                <Button color="primary" onClick={()=>notify()}>
                    <Toaster />
                    About App
                </Button>
             
            </Box>
        </Box>
    )
}

export default AddTask
