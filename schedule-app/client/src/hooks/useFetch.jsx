import { useState } from "react";
import { useNavigate } from 'react-router-dom'; 

// Pass URL
const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleGoogle = async (response) => {
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ credential: response.credential }),
    })
      .then((res) => {
        setLoading(false);

        return res.json();
      })
      .then((data) => {
        if(data?.message === "User found, rerouting to dashboard"){
          localStorage.setItem("user", JSON.stringify(data?.user));
          window.location.reload();
          navigate('/dashboard');
        }else if (data?.user) {
          localStorage.setItem("user", JSON.stringify(data?.user));
          window.location.reload();
        }else{
          throw new Error(data?.message || data);
        }
      })
      .catch((error) => {
        setError(error?.message);
      });
  };
  return { loading, error, handleGoogle };
};

export default useFetch;
