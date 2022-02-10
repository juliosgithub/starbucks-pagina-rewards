import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

// import IconButton from "@mui/material/IconButton";
// import InputAdornment from "@mui/material/InputAdornment";
// import Box from "@mui/material/Box";

import "./styles.scss";

const Newsletter = ({ siteTitle }) => {
  const [emailIsEmpty, setEmailIsEmpty] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState("");

  const handleChange = (event) => {
    setEmailIsEmpty(false);
    setSubscribeEmail(event.target.value);
  };

  const checkIfEmailIsEmpty = () => {
    if (subscribeEmail === "") {
      setEmailIsEmpty(true);
    }
  };

  return (
    <section className="newsletter section">
      <div className="container">
        <div className="newsletter_content">
          <h2 className="newsletter__title">Star Codes</h2>
          <p className="newsletter__description">
            Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll add Stars to your account.
          </p>
          <form action="" className="newsletter__subscribe">
            <FormControl style={{ width: "100%" }}>
              <TextField
                error={emailIsEmpty}
                onChange={handleChange}
                onBlur={checkIfEmailIsEmpty}
                className="t90"
                label="Enter your email"
                aria-describedby="outlined-email-helper-text"
                defaultValue=""
              />

              <FormHelperText id="outlined-email-helper-text">
                {emailIsEmpty ? "Error" : "Digite seu email"}
              </FormHelperText>

              {/* <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment> */}

              <input type="submit" className=" btn newsletter__submit" value="Submit" />
            </FormControl>

            {/* <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                // onClick={handleClickShowPassword}
                // onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment> */}
          </form>
          {/* .
          .
          
          
          
          /.
          
          .
          .
          .
           */}
          <p className="newsletter__description">
            Have a receipt but don't have a code? <br />
            Go to{" "}
            <a href="#" className="link_green">
              starbucks-stars.com<i className="bx bx-link-external"></i>
            </a>
            opens in new window to upload your receipt and collect your Stars.
          </p>{" "}
          <h2>Questions?</h2>
          <p className="newsletter__description">
            We want to help in any way we can. You can ask your barista anytime or we’ve answered the most commonly
            asked questions{" "}
            <a href="#" className="link_green">
              right over here
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
