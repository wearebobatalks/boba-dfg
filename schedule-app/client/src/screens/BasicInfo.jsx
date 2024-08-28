import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
const BasicInfo = ({ data, setData }) => {
  return (
    <div className="space-y-6" >
      {/* Photo Section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Profile Photo (optional)
        </label>
        <input
          onChange={(e) => setData({ ...data, username: e.target.value })}
          value={data.username}
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
      </div>
      {/* Mentor Q&A Section */}
      <div className="mt-1 relative">
      <label className="poppins-medium">
          Mentor Q&A
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
      </div>
    </div>
  );
};

export default BasicInfo;