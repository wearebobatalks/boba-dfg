import React from 'react'
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const ProfessionalDetails = ({data, setData}) => {
    const [industry, setIndustry] = React.useState('');

    const handleChange = (event) => {
        setIndustry(event.target.value);
        };
  return (
    <div className="space-y-6">
      {/* Job Title */}
      <div className="mt-1">
        <label className="required">
          Most recent job title
        </label><br/>
        <TextField
          required
          id="outlined-required"
          placeholder="Example: Senior UX Designer"
          fullWidth
          InputProps={{
            style: {
              borderRadius: "20px",
            }
          }}
          style={{ marginBottom: "20px"}}
        />
      </div>
      {/* Company */}
      <div className="mt-1">
        <label className="required">
          Most recent company
        </label><br/>
        <TextField
          required
          id="outlined-required"
          placeholder="Example: Google"
          fullWidth
          InputProps={{
            style: {
              borderRadius: "20px",
            }
          }}
          style={{ marginBottom: "20px"}}
        />
      </div>
      {/* Industry */}
      <div className="mt-1">
        <label className="required">
          In which industry do you work?
        </label><br/>
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={industry}
                onChange={handleChange}
                >
                <MenuItem value={1}>Healthcare</MenuItem>
                <MenuItem value={2}>Gaming</MenuItem>
                <MenuItem value={3}>Education</MenuItem>
                </Select>
            </FormControl>
        </Box>
      </div>
      {/* Years Experience */}
      <div className="mt-1">
        <label className="required">
          How many years of experience do you have in your field?
        </label><br/>
        <TextField
          required
          id="outlined-required"
          placeholder="Example: 5 years"
          fullWidth
          InputProps={{
            style: {
              borderRadius: "20px",
            }
          }}
          style={{ marginBottom: "20px"}}
        />
      </div>
      {/* Work Experience */}
      <div className="mt-1 relative">
        <label className="poppins-medium">
          Work Experience
        </label>
        <label className="poppins-light">
           (optional) 
        </label> <br/>
        <label className="poppins-extralight">
          Share your work experience
        </label> 
      </div>
    </div>
  )
}

export default ProfessionalDetails;