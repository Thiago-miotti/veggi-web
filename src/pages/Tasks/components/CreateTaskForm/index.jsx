import React from 'react'
import './style.css';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const CreateTaskForm = (props) => {
    const [alignment, setAlignment] = React.useState('left');
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <div className="createtaskform-container">
            <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
            >
                <ToggleButton value="left" aria-label="left aligned" >
                    Not started
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                    In progress

                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned">
                    Done
                </ToggleButton>
            </ToggleButtonGroup>

            <TextField id="outlined-basic" label="Description" variant="outlined" />

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">User</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    {/* TODO --> Add the users */}
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

        </div>
    )

}

export default CreateTaskForm;