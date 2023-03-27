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
          navigate("/login");
        }, 3000);
      }
    }

    getData();
  }, []);
  return (
    <div>
      <p>Thank you for register, now you can log in:</p>
      <p>http://localhost:3000/login</p>
    </div>
  );
}

export default EmailConfirm;
