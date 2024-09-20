import React from 'react'
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from "react";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const ProfessionalDetails = ({data, setData}) => {
  const [industry, setIndustry] = React.useState('');

  const handleChange = (event) => {
    setIndustry(event.target.value);
    setData(data => ({
      ...data,
      industry: industry
    }));
  };
  const [openFAQ, setOpenFAQ] = useState(false);
  const handleOpenFAQ = () => setOpenFAQ(true);
  const handleCloseFAQ = () => setOpenFAQ(false);

  const [jobtitle, setJobTitle] = useState('');
  const [startmonth, setStartMonth] = useState('');
  const [startyear, setStartYear] = useState('');
  const [endmonth, setEndMonth] = useState('');
  const [endyear, setEndYear] = useState('');
  const [companyname, setCompanyName] = useState('');
  const handleWorkExp = () => {
    const newWorkExp = {
      jobtitle,
      startmonth,
      startyear,
      endmonth,
      endyear,
      companyname
    };
    setData(data => ({
        ...data,
        workExp: [...data.workExp, newWorkExp] // Add new entry to the existing work exp array
    }));

    // Clear input fields
    setJobTitle('');
    setStartMonth('');
    setStartYear('');
    setEndMonth('');
    setEndYear('');
    setCompanyName('');
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
          onChange={(e) => setData({ ...data, jobTitle: e.target.value })}
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
          onChange={(e) => setData({ ...data, company: e.target.value })}
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
      {/* Start Date */}
      <div className="mt-1">
        <label className="required">
          Start Date
        </label><br/>
        <TextField
          required
          onChange={(e) => setData({ ...data, startDateMonth: e.target.value })}
          id="outlined-required"
          placeholder="Month"
          fullWidth
          InputProps={{
            style: {
              borderRadius: "20px",
            }
          }}
          style={{ marginBottom: "20px", width: "200px", marginRight: "20px",}}
        />
        <TextField
          required
          onChange={(e) => setData({ ...data, startDateYear: e.target.value })}
          id="outlined-required"
          placeholder="Year"
          fullWidth
          InputProps={{
            style: {
              borderRadius: "20px",
            }
          }}
          style={{ marginBottom: "20px", width: "200px"}}
        />
      </div>
      {/* End Date */}
      <div className="mt-1">
        <label className="required">
          End Date
        </label><br/>
        <TextField
          required
          onChange={(e) => setData({ ...data, endDateMonth: e.target.value })}
          id="outlined-required"
          placeholder="Month"
          fullWidth
          InputProps={{
            style: {
              borderRadius: "20px",
            }
          }}
          style={{ marginBottom: "20px", width: "200px", marginRight: "20px",}}
        />
        <TextField
          required
          onChange={(e) => setData({ ...data, endDateYear: e.target.value })}
          id="outlined-required"
          placeholder="Year"
          fullWidth
          InputProps={{
            style: {
              borderRadius: "20px",
            }
          }}
          style={{ marginBottom: "20px", width: "200px"}}
        />
      </div>
      {/* Years Experience */}
      <div className="mt-1">
        <label className="required">
          Years of experience?
        </label><br/>
        <TextField
          required
          onChange={(e) => setData({ ...data, yearsExperience: e.target.value })}
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
          Past Experience
        </label>
        <label className="poppins-light">
           (optional) 
        </label> <br/>
        <label className="poppins-extralight">
          Share your work experience
        </label> 
        <Button onClick={handleOpenFAQ}>+ Add Experience</Button>
        <Modal
          open={openFAQ}
          onClose={handleCloseFAQ}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add Experience
            </Typography>
            <div className="mt-1">
              <label className="required">
                Job Title
              </label><br/>
              <TextField
                id="outlined-required"
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="Enter your job title"
                fullWidth
                InputProps={{
                  style: {
                    borderRadius: "20px",
                  }
                }}
                style={{ marginBottom: "10px"}}
              />
            </div>
            <div className="mt-1">
              <label className="required">
                Start Date
              </label><br/>
              <TextField
                required
                onChange={(e) => setStartMonth(e.target.value)}
                id="outlined-required"
                placeholder="Month"
                fullWidth
                InputProps={{
                  style: {
                    borderRadius: "20px",
                  }
                }}
                style={{ marginBottom: "20px", width: "200px", marginRight: "20px",}}
              />
              <TextField
                required
                onChange={(e) => setStartYear(e.target.value)}
                id="outlined-required"
                placeholder="Year"
                fullWidth
                InputProps={{
                  style: {
                    borderRadius: "20px",
                  }
                }}
                style={{ marginBottom: "20px", width: "200px"}}
              />
            </div>
            <div className="mt-1">
              <label className="required">
                End Date
              </label><br/>
              <TextField
                required
                onChange={(e) => setEndMonth(e.target.value)}
                id="outlined-required"
                placeholder="Month"
                fullWidth
                InputProps={{
                  style: {
                    borderRadius: "20px",
                  }
                }}
                style={{ marginBottom: "20px", width: "200px", marginRight: "20px",}}
              />
              <TextField
                required
                onChange={(e) => setEndYear(e.target.value)}
                id="outlined-required"
                placeholder="Year"
                fullWidth
                InputProps={{
                  style: {
                    borderRadius: "20px",
                  }
                }}
                style={{ marginBottom: "20px", width: "200px"}}
              />
            </div>
            <div className="mt-1">
              <label className="required">
                Company Name
              </label><br/>
              <TextField
                id="outlined-required"
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter your company name"
                fullWidth
                InputProps={{
                  style: {
                    borderRadius: "20px",
                  }
                }}
                style={{ marginBottom: "10px"}}
              />
            </div>
            <div className="mt-1">
              <button 
              onClick={handleWorkExp}
              className='chewy-regular'
              style={{ marginLeft:"200px",width:"200px", height:"40px", fontSize:"20px", backgroundColor: "white"}}>
                Save</button>
            </div>
          </Box>
        </Modal>
        {data.workExp.map((entry, index) => (
            <div>
              <p key={index}>
                  <p><strong>{entry.jobtitle} at {entry.companyname}</strong></p>
                  <p>{entry.startmonth} {entry.startyear} to {entry.endmonth} {entry.endyear}</p>
              </p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default ProfessionalDetails;