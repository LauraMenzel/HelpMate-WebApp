import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EmailConfirm() {
  const { token } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function getData() {
      const response = await axios.post("/users/emailconfirm", { token });
      if (response.data.success) {
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    }

    getData();
  }, []);
  return (
    <div>
      <p>thank you</p>
      <p>your email is getting verify</p>
      <span>your token is {token}</span>
    </div>
  );
}

export default EmailConfirm;
