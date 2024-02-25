import { useState } from "react";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { toast } from "react-hot-toast";
import axios from "../helper/axios";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setSignIn }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // forms inputs
  const [signinForm, setSigninForm] = useState({
    email: "",
    password: "",
  });
  const handleInputs = (params) => (e) => {
    setSigninForm((prevState) => ({ ...prevState, [params]: e.target.value }));
  };
  //handle singin
  const handleSignin = async () => {
    try {
      toast.loading("Loggin In");
      const resp = await axios.post("/login", signinForm);
      if (resp.data.success) {
        console.log(resp);
        toast.dismiss();
        navigate("/italia");
        toast.success("Login successful");
        localStorage.setItem("usertoken", resp.data.data.token);
        localStorage.setItem("username", resp.data.data.firstname);
      } else {
        toast.dismiss();
        toast.error(
          (t) => (
            <span>
              {resp.data.message}
              <button
                className="font-serif text-blue-700 cursor-pointer underline underline-offset-2 px-2"
                onClick={() => {
                  setSignIn((prev) => !prev);
                  toast.dismiss(t.id);
                }}
              >
                Create New Account
              </button>
            </span>
          ),
          {
            style: {
              border: "1px solid red",
              padding: "1rem",
              color: "red",
            },
          }
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="space-y-5">
        <TextField
          size="small"
          id="email"
          label="Email address*"
          sx={{ width: { xs: "100%" } }}
          spellCheck="false"
          name="firstname"
          value={signinForm.email}
          onChange={handleInputs("email")}
        />
        <FormControl size="small" sx={{ width: { xs: "100%" } }}>
          <InputLabel htmlFor="password" sx={{ backgroundColor: "white" }}>
            Password*
          </InputLabel>
          <OutlinedInput
            id="password"
            spellCheck="false"
            type={showPassword ? "text" : "password"}
            name="password"
            value={signinForm.password}
            onChange={handleInputs("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </div>
      <div className="mx-auto w-1/2">
        <Button
          sx={{ width: "100%" }}
          variant="contained"
          size="medium"
          onClick={handleSignin}
        >
          Sign in
        </Button>
      </div>
      <p className="font-sans text-sm">
        Don't have an account?{" "}
        <span
          onClick={() => setSignIn((prev) => !prev)}
          className="font-serif text-blue-700 cursor-pointer underline underline-offset-2"
        >
          Sign up here
        </span>
      </p>
    </>
  );
};

export default SignIn;
