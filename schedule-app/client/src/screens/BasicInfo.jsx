import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Autocomplete from '@mui/material/Autocomplete';
import top100Schools from '../schoolList';
import { useState } from "react";

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

const BasicInfo = ({ data, setData }) => {
  const [openEducation, setOpenEducation] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(false);
  const handleOpen = () => setOpenEducation(true);
  const handleClose = () => setOpenEducation(false);
  const handleOpenFAQ = () => setOpenFAQ(true);
  const handleCloseFAQ = () => setOpenFAQ(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setData(data => ({
        ...data,
        profilePhoto: url
      }));
    }
  };
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [field, setField] = useState('');
  const handleSaveEducation = () => {
    const newEducationEntry = {
        school,
        degree,
        field
    };
    setData(data => ({
        ...data,
        education: [...data.education, newEducationEntry] // Add new entry to the existing education array
    }));

    // Clear input fields
    setSchool('');
    setDegree('');
    setField('');
  };
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const handleSaveFAQ = () => {
    const newFAQEntry = {
        question,
        answer
    };
    setData(data => ({
        ...data,
        mentorFAQ: [...data.mentorFAQ, newFAQEntry] // Add new entry to the existing faq array
    }));

    // Clear input fields
    setQuestion('');
    setAnswer('');
  };
  return (
    <div className="space-y-6" >
      {/* Photo Section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Profile Photo (optional)
        </label>
        <input
          onChange={handleFileChange}
          type="file"
          id="photo"
          accept="image/*"
          style={{ display: 'none' }}
        />
        <label htmlFor="photo">
            <Button variant="contained" color="inherit" component="span"
            InputProps={{
                style: {
                  borderRadius: "20px",
                }
              }}
            style={{ marginLeft:"10px", marginBottom:"15px", color: "black", borderRadius: "10px"}}>
            Upload a photo
            </Button>
      </label>
      {data.profilePhoto ? <img src={data.profilePhoto} alt="profile" style={{width:'60%', height:'60%'}}/> : <br/>}
      </div>
      {/* Name Section */}
      <div className="mt-1" style={{ marginBottom: "10px"}}>
        <label className="required" style={{ marginRight: "145px"}}>
          First Name
        </label>
        <label className="required">
          Last Name
        </label>
      </div>
      <div>
      <TextField
          required
          onChange={(e) => setData({ ...data, firstName: e.target.value })}
          id="outlined-required"
          placeholder="Example: John"
          InputProps={{
            style: {
              borderRadius: "20px",
            }
          }}
            style={{ marginRight: "20px"}}/> 
        <TextField
          required
          onChange={(e) => setData({ ...data, lastName: e.target.value })}
          id="outlined-required"
          placeholder="Example: Doe"
          InputProps={{
            style: {
              borderRadius: "20px",
            }
          }}
          style={{ marginBottom: "10px"}}
        /> 
        
        </div>
      {/* Description Section */}
      <div className="mt-1">
        <label className="required">
          Briefly describe yourself
        </label> <br/>
        <TextField
          required
          onChange={(e) => setData({ ...data, bio: e.target.value })}
          id="outlined-multiline-static"
          label=""
          multiline
          rows={6}
          fullWidth
          placeholder="Example: 
          Hi! I'm John. With over 10 years of experience in software development, I specialize in backend development and cloud architecture. In my free time, I enjoy hiking and exploring tech trends."
          InputProps={{
            style: {
              borderRadius: "20px",
            }
          }}
            style={{ marginTop: "10px"}}
        />
      </div>
      {/* LinkedIn URL Section */}
      <div className="mt-1">
        <label className="required">
          LinkedIn URL
        </label><br/>
        <TextField
          required
          onChange={(e) => setData({ ...data, linkedinURL: e.target.value })}
          id="outlined-required"
          placeholder="Enter LinkedIn URL"
          fullWidth
          InputProps={{
            style: {
              borderRadius: "20px",
            }
          }}
          style={{ marginBottom: "10px"}}
        />
      </div>
      {/* Education Section */}
      <div className="mt-1 relative">
        <label className="poppins-medium">
          Education
        </label>
        <label className="poppins-light">
           (optional) 
        </label> <br/>
        <label className="poppins-extralight">
          Share your educational background
        </label> 
        <Button onClick={handleOpen}>+ Add Education</Button>
        <Modal
          open={openEducation}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add Education
            </Typography>
            <div className="mt-1">
              <label className="required">
                School / Institution Name
              </label><br/>
              <Autocomplete
                disablePortal
                onChange={(e) => setSchool(e.target.textContent)}
                options={top100Schools}
                placeholder="Select or type your school or institution"
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
            <div className="mt-1">
              <label>
                Degree
              </label><br/>
              <TextField
                id="outlined-required"
                onChange={(e) => setDegree(e.target.value)}
                placeholder="Enter your degree"
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
                Field of Study
              </label><br/>
              <TextField
                required
                onChange={(e) => setField(e.target.value)}
                id="outlined-required"
                placeholder="Enter your field of study"
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
              onClick={handleSaveEducation}
              className='chewy-regular'
              style={{ marginLeft:"200px",width:"200px", height:"40px", fontSize:"20px", backgroundColor: "white"}}>
                Save</button>
            </div>
          </Box>
        </Modal>
        {data.education.map((entry, index) => (
            <div>
              <h4>Education {index+1}</h4>
              <p key={index}>
                  <p><strong>School:</strong> {entry.school}</p>
                  <p><strong>Degree:</strong> {entry.degree}</p>
                  <p><strong>Field:</strong> {entry.field}</p>
              </p>
            </div>
          ))}
      </div>
      {/* Mentor Q&A Section */}
      <div className="mt-1 relative">
        <label className="poppins-medium">
          Mentor FAQ
        </label>
        <label className="poppins-light">
           (optional) 
        </label> <br/>
        <label className="poppins-extralight">
          Create your own information sheet to help
        </label> <br />
        <label className="poppins-extralight">
            mentees prepare for a productive session
        </label>
        <Button onClick={handleOpenFAQ}>+ Add FAQ</Button>
        <Modal
          open={openFAQ}
          onClose={handleCloseFAQ}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add Mentor Q&A
            </Typography>
            <div className="mt-1">
              <label className="required">
                Question
              </label><br/>
              <Autocomplete
                disablePortal
                onChange={(e) => setQuestion(e.target.textContent)}
                options={top100Schools}
                placeholder="Start typing or select your question, e.g., What is your mentoring style?"
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
            <div className="mt-1">
              <label className="required">
                Answer
              </label><br/>
              <TextField
                id="outlined-multiline-static"
                label=""
                multiline
                rows={6}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Provide a detailed answer here to help clarify your approach, expectations, or any relevant information for your mentees"
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
              onClick={handleSaveFAQ}
              className='chewy-regular'
              style={{ marginLeft:"200px",width:"200px", height:"40px", fontSize:"20px", backgroundColor: "white"}}>
                Save</button>
            </div>
          </Box>
        </Modal>
        {data.mentorFAQ.map((entry, index) => (
            <div>
              <p key={index}>
                  <p><strong>Question {index+1}</strong> {entry.question}</p>
                  <p><strong>Answer {index+1}</strong> {entry.answer}</p>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BasicInfo;