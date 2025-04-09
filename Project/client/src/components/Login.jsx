import cookie from 'js-cookie';
import { useRef, useState } from "react";
import RECAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom'; // useNavigate hook for redirection
import "./Login.css";

export default function Login() {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate(); // Hook for programmatic navigation
    const useRecaptchaRef = useRef(null);

    function handleInputChange(identifier, value) {
        if (identifier === "email") {
            setEnteredEmail(value);
        } else {
            setEnteredPassword(value);
        }
    }

    const handleLogin = async () => {

        const captchaValue = useRecaptchaRef.current.getValue();

        if (captchaValue) {
            setSubmitted(true);

            const formBody = JSON.stringify({
                Email: enteredEmail,
                Password: enteredPassword
            })

            const response = await fetch(import.meta.env.VITE_API_KEY + 'user/login', {
                method: 'POST',
                credentials: 'include',
                body: formBody,
                headers: {
                    "content-type": "application/json"
                }
            })

            if (response.ok) {
                const result = await response.json();
                console.log(result);
                cookie.set('isLoggedIn', true);
                navigate('/dashboard');
            }

            // if(enteredEmail!="")      
            // alert('Email:' +enteredEmail);
        }
        else {
            alert('Please pass the recaptcha');
        }
    };

    const emailNotValid = submitted && !enteredEmail.includes("@");
    const passwordNotValid = submitted && enteredPassword.trim().length < 8;

    return (
        <div id="login">
            <div className="controls">
                <p>
                    <label>Email</label>
                    <input
                        type="email"
                        className={emailNotValid ? "invalid" : undefined}
                        onChange={(event) => handleInputChange("email", event.target.value)}
                    />
                </p>
                <p>
                    <label>Password</label>
                    <input
                        type="password"
                        className={passwordNotValid ? "invalid" : undefined}
                        onChange={(event) =>
                            handleInputChange("password", event.target.value)
                        }
                    />
                </p>

            </div>

            <div className="controls">
                <RECAPTCHA sitekey={import.meta.env.VITE_SITE_KEY} ref={useRecaptchaRef}></RECAPTCHA>
            </div>

            <div className="actions">
                <button type="button" className="button">
                    Create a new account
                </button>
                <button className="button" onClick={handleLogin}>
                    Sign In
                </button>
            </div>
        </div>
    );
}
