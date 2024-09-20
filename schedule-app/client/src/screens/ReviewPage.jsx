const ReviewPage = ({ data, setData }) => {
  return (
    <div className="space-y-6" >
      <h2 className="poppins-semibold" style={{marginTop:"none", marginBottom:"none"}} >
        BASIC INFORMATION
      </h2>
      {/* Photo Section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Profile Photo 
        </label>
        <img src={data.profilePhoto} alt="profile" style={{width:'60%', height:'60%'}}/>
      </div>
      {/* Name Section */}
      <div className="mt-1" style={{ marginBottom: "10px"}}>
        <label style={{ marginRight: "145px"}}>
          First Name
        </label><br/>
        <label className="poppins-light">
          {data.firstName}
        </label><br/>
        <label >
          Last Name
        </label><br/>
        <label className="poppins-light">
          {data.lastName}
        </label><br/>
      </div>
      {/* Description Section */}
      <div className="mt-1">
        <label>
          Bio
        </label><br/>
        <label className="poppins-light">
          {data.bio}
        </label><br/>
      </div>
      {/* LinkedIn URL Section */}
      <div className="mt-1">
        <label>
          LinkedIn URL
        </label><br/>
        
      </div>
      {/* Education Section */}
      <div className="mt-1">
        <label>
          Education
        </label><br/>
          {data.education.map((entry, index) => (
              <p key={index}>
                  <p><strong>School:</strong> {entry.school}</p>
                  <p><strong>Degree:</strong> {entry.degree}</p>
                  <p><strong>Field:</strong> {entry.field}</p>
              </p>
          ))}
      </div>
      <h2 className="poppins-semibold" style={{marginTop:"none", marginBottom:"none"}} >
        PROFESSIONAL DETAILS
      </h2>


      <h2 className="poppins-semibold" style={{marginTop:"none", marginBottom:"none"}} >
        SESSION SETUP
      </h2>
    </div>
  );
};

export default ReviewPage;