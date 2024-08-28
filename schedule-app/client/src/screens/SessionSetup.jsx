import React, { useState } from 'react'
import { TextField } from '@mui/material'
import Switch from '@mui/material/Switch'
import { SelectButton } from 'primereact/selectbutton';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';



const SessionSetup = ({data, setData}) => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
      };
    const [value, setValue] = useState(null);
    const items = [
        { name: 'Coffee Chat', value: 1 },
        { name: 'Long-term Mentorship', value: 2 },
        { name: 'Resume Review', value: 3 }
    ];
  return (
    <div className="space-y-6">
      {/* Mentoring Topics */}
      <div className="mt-1">
        <label className="required">
          What are your favorite topics for mentoring sessions? (Select all that apply)
        </label><br/>
        <div className="card flex justify-content-center">
            <SelectButton value={value} onChange={(e) => setValue(e.value)} optionLabel="name" options={items} multiple />
        </div>
      </div>
      {/* Set availability */}
      <div className="mt-1">
        <label className="required">
          What is your availability?
        </label><br/>
        <div>
            <FormControlLabel control={<Switch defaultChecked />} label="Monday" />
            <TextField
                required
                id="outlined-required"
                placeholder="9:00 AM"
                InputProps={{
                    style: {
                    borderRadius: "20px",
                    }
                }}
                style={{ marginBottom: "20px", width:"100px"}}
            />
            <TextField
                required
                id="outlined-required"
                placeholder="5:00 PM"
                InputProps={{
                    style: {
                    borderRadius: "20px",
                    }
                }}
                style={{ marginBottom: "20px", width:"100px"}}
            />
        </div>
        
      </div>
      {/* Meeting Platform */}
      <div className="mt-1">
        <label className="required">
          Where would you like to meet? (e.g. Zoom, Google Meet)
        </label><br/>
        <TextField
          required
          id="outlined-required"
          placeholder="https://on.zoom.us/"
          fullWidth
          InputProps={{
            style: {
              borderRadius: "20px",
            }
          }}
          style={{ marginBottom: "20px"}}
        />
      </div>
      {/* Meeting Duration */}
      <div className="mt-1">
        <label className="required">
          What is your preferred meeting duration?
        </label><br/>
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
                >
                <MenuItem value={1}>15 minutes</MenuItem>
                <MenuItem value={2}>30 minutes</MenuItem>
                <MenuItem value={3}>1 hour</MenuItem>
                </Select>
            </FormControl>
        </Box>
      </div>
      {/* Meeting Notice */}
      <div className="mt-1">
        <label className="required">
          What is the minimum notice you prefer before a meeting can be scheduled?
        </label><br/>
      </div>
      {/* DEI/Neurodiverse Notice */}
      <div className="mt-1">
        <label>
            Would you like to represent yourself as open to having conversations
        </label><br/>
        <label className="required">
            related to DEI+//NeuroDiversity?
        </label><br/>
        <label className="poppins-light">
            BobaTalks aims to create a safe space for students of all backgrounds. 
        </label><br/>
        <label className="poppins-light">
            By showing you are open to these conversations you are helping to
        </label><br/>
        <label className="poppins-light">
            create a safe space for those who face barriers in the workforce.
        </label><br/>

        <FormControl>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
            >
                <FormControlLabel value="DEI" control={<Radio />} label="I am open to DEI conversations." />
                <FormControlLabel value="Neurodiversity" control={<Radio />} label="I am open to Neurodiversity conversations." />
                <FormControlLabel value="None" control={<Radio />} label="I would like to opt out at this time." />
            </RadioGroup>
        </FormControl>
      </div>
    </div>
    
  )
}

export default SessionSetup