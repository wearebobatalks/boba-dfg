import React, { useState } from 'react'
import { TextField } from '@mui/material'
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const SessionSetup = ({data, setData}) => {
    const [duration, setDuration] = React.useState('');
    const [notice, setNotice] = React.useState('');
    const [sundayAvail, setSundayAvail] = React.useState(false);
    const [numberOfFields, setNumberOfFields] = React.useState(0);
    const handleSundayAvail = (event) => {
      setSundayAvail(event.target.checked);
    };
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const handleSaveAvail = () => {
    const newTimeSlotEntry = {
        startTime,
        endTime,
    };
    setData(data => ({
        ...data,
        sundayAvail: [...data.sundayAvail, newTimeSlotEntry] // Add new entry to the existing education array
    }));

    // Clear input fields
    setStartTime('');
    setEndTime('');
  };
  const generateInputField = () => {
    return (
      <div>
          <TextField
            required
            id="outlined-required"
            placeholder="9:00 AM"
            InputProps={{
                style: {
                borderRadius: "10px",
                height: "50px",
                }
            }}
            style={{ width:"100px"}}
        /> 
        <TextField
            required
            id="outlined-required"
            placeholder="5:00 PM"
            InputProps={{
                style: {
                borderRadius: "10px",
                height: "50px",
                }
            }}
            style={{ marginBottom: "20px", width:"100px", marginLeft: "10px"}}
        /></div>
    );
  }
  const handleAdd = () => {
    setNumberOfFields(numberOfFields + 1);
  }
  const generateFields = () => {
    let listOfFields = [];
    for (let i = 1; i <= numberOfFields; i++) {
      listOfFields.push(generateInputField());
    }
    return listOfFields;
  }
    const handleDuration = (event) => {
      setDuration(event.target.value);
      setData(data => ({
        ...data,
        meetingDuration: duration
      }));
    };
    const handleNotice = (event) => {
      setNotice(event.target.value);
      setData(data => ({
        ...data,
        noticePeriod: notice
      }));
    };
    const items = [
        { name: 'Coffee Chat', value: 1 },
        { name: 'Long-term Mentorship', value: 2 },
        { name: 'Resume Review', value: 3 }
    ];

  return (
    <div className="space-y-6">
      {/* Set availability */}
      <div className="mt-1">
        <label className="required">
          Availability
        </label><br/>
        <div>
            <FormControlLabel control={<Switch defaultUnchecked color="brown" checked={sundayAvail}
            onChange={handleSundayAvail}/>} label="Sunday" style={{ width: "150px"}}/>
            {sundayAvail ? 
            <div>
              <TextField
                required
                id="outlined-required"
                placeholder="9:00 AM"
                InputProps={{
                    style: {
                    borderRadius: "10px",
                    height: "50px",
                    }
                }}
                style={{ width:"100px"}}
            /> 
            <TextField
                required
                id="outlined-required"
                placeholder="5:00 PM"
                InputProps={{
                    style: {
                    borderRadius: "10px",
                    height: "50px",
                    }
                }}
                style={{ marginBottom: "20px", width:"100px", marginLeft: "10px"}}
            /></div> : <p>Unavailable</p>}
            <div>
              {sundayAvail && generateFields()}
              {sundayAvail && (
                <Button variant="contained" color="primary" onClick={handleAdd}>
                  +
                </Button>
              )}
            </div>
            <FormControlLabel control={<Switch defaultChecked color="brown" />} label="Monday" style={{ width: "150px"}}/>
            <TextField
                required
                id="outlined-required"
                placeholder="9:00 AM"
                InputProps={{
                    style: {
                    borderRadius: "10px",
                    height: "50px",
                    }
                }}
                style={{ width:"100px"}}
            />
            <TextField
                required
                id="outlined-required"
                placeholder="5:00 PM"
                InputProps={{
                    style: {
                    borderRadius: "10px",
                    height: "50px",
                    }
                }}
                style={{ marginBottom: "20px", width:"100px", marginLeft: "10px"}}
            /><br/>
            <FormControlLabel control={<Switch defaultChecked color="brown" />} label="Tuesday" style={{ width: "150px"}}/>
            <TextField
                required
                id="outlined-required"
                placeholder="9:00 AM"
                InputProps={{
                    style: {
                    borderRadius: "10px",
                    height: "50px",
                    }
                }}
                style={{ width:"100px"}}
            />
            <TextField
                required
                id="outlined-required"
                placeholder="5:00 PM"
                InputProps={{
                    style: {
                    borderRadius: "10px",
                    height: "50px",
                    }
                }}
                style={{ marginBottom: "20px", width:"100px", marginLeft: "10px"}}
            /><br/>
            <FormControlLabel control={<Switch defaultChecked color="brown" />} label="Wednesday" style={{ width: "150px"}}/>
            <TextField
                required
                id="outlined-required"
                placeholder="9:00 AM"
                InputProps={{
                    style: {
                    borderRadius: "10px",
                    height: "50px",
                    }
                }}
                style={{ width:"100px"}}
            />
            <TextField
                required
                id="outlined-required"
                placeholder="5:00 PM"
                InputProps={{
                    style: {
                    borderRadius: "10px",
                    height: "50px",
                    }
                }}
                style={{ marginBottom: "20px", width:"100px", marginLeft: "10px"}}
            /><br/>
            <FormControlLabel control={<Switch defaultChecked color="brown" />} label="Thursday" style={{ width: "150px"}}/>
            <TextField
                required
                id="outlined-required"
                placeholder="9:00 AM"
                InputProps={{
                    style: {
                    borderRadius: "10px",
                    height: "50px",
                    }
                }}
                style={{ width:"100px"}}
            />
            <TextField
                required
                id="outlined-required"
                placeholder="5:00 PM"
                InputProps={{
                    style: {
                    borderRadius: "10px",
                    height: "50px",
                    }
                }}
                style={{ marginBottom: "20px", width:"100px", marginLeft: "10px"}}
            /><br/>
            <FormControlLabel control={<Switch defaultChecked color="brown" />} label="Friday" style={{ width: "150px"}}/>
            <TextField
                required
                id="outlined-required"
                placeholder="9:00 AM"
                InputProps={{
                    style: {
                    borderRadius: "10px",
                    height: "50px",
                    }
                }}
                style={{ width:"100px"}}
            />
            <TextField
                required
                id="outlined-required"
                placeholder="5:00 PM"
                InputProps={{
                    style: {
                    borderRadius: "10px",
                    height: "50px",
                    }
                }}
                style={{ marginBottom: "20px", width:"100px", marginLeft: "10px"}}
            /><br/>
            <FormControlLabel control={<Switch defaultChecked color="brown" />} label="Saturday"style={{ width: "150px"}} />
            <TextField
                required
                id="outlined-required"
                placeholder="9:00 AM"
                InputProps={{
                    style: {
                    borderRadius: "10px",
                    height: "50px",
                    }
                }}
                style={{ width:"100px" }}
            />
            <TextField
                required
                id="outlined-required"
                placeholder="5:00 PM"
                InputProps={{
                    style: {
                    borderRadius: "10px",
                    height: "50px",
                    }
                }}
                style={{ marginBottom: "20px", width:"100px", marginLeft: "10px"}}
            /><br/>
        </div>
        
      </div>
      {/* Meeting Platform */}
      <div className="mt-1">
        <label className="required">
          Meeting location (e.g. Zoom, Google Meet)
        </label><br/>
        <TextField
          required
          onChange={(e) => setData({ ...data, meetingLocation: e.target.value })}
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
          Preferred meeting duration?
        </label><br/>
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={duration}
                onChange={handleDuration}
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
          Minimum notice period
        </label><br/>
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={notice}
                onChange={handleNotice}
                >
                <MenuItem value={1}>24 hours</MenuItem>
                <MenuItem value={2}>48 hours</MenuItem>
                </Select>
            </FormControl>
        </Box>
      </div>
      {/* Mentoring Topics */}
      <div className="mt-1">
        <label className="required">
          Favorite topics
        </label><br/>
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                >
                <MenuItem value={1}>Resume Review</MenuItem>
                <MenuItem value={2}>Career Growth</MenuItem>
                </Select>
            </FormControl>
        </Box>
      </div>
      {/* DEI/Neurodiverse Notice */}
      <div className="mt-1">
        <label className="required">
            Would you like to be open to discussing DEI or Neurodiversity?
        </label><br/>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="DEI conversations" />
          <FormControlLabel control={<Checkbox />} label="Neurodiversity conversations" />
          <FormControlLabel control={<Checkbox />} label="None of the above" />
        </FormGroup>
      </div>
    </div>
    
  )
}

export default SessionSetup