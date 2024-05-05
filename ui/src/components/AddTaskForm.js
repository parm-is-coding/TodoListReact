import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const AddTaskForm = () => {
  return (
    <div>
        <Typography align="center" variant="h2" paddingTop={2} paddingBotton={2}>My Task List</Typography>
        <TextField size="small" label="Task" variant="outlined" />
        <Button>
            <AddIcon></AddIcon>
        </Button>

    </div>
  )
}
