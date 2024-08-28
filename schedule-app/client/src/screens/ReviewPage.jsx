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
        
      </div>
      {/* Name Section */}
      <div className="mt-1" style={{ marginBottom: "10px"}}>
        <label style={{ marginRight: "145px"}}>
          First Name
        </label>
        <label >
          Last Name
        </label>
      </div>
      {/* Description Section */}
      <div className="mt-1">
        <label>
          Bio
        </label> <br/>
        
      </div>
      {/* LinkedIn URL Section */}
      <div className="mt-1">
        <label>
          LinkedIn URL
        </label><br/>
        
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