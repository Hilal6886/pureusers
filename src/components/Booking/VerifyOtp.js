import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";

const VerifyOtp = ({ verificationId }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const credential = signInWithPhoneNumber(
        auth,
        verificationId,
        otp
      );
      const user = credential.user;

      navigate("/ThankYou");
    } catch (error) {
      console.error("Error verifying OTP: ", error);
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleVerifyOtp}>
        <label>
          Enter OTP:
          <input type="text" value={otp} onChange={handleOtpChange} />
        </label>
        <button type="submit">Verify OTP</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default VerifyOtp;
