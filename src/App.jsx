import "./App.css";
import FormImg from "./assets/login-image.png";
import styled from "styled-components";

function App() {
  // form styled
  const StyledForm = styled.form`
    padding: 20px;
  `;

  // h2 style
  const StyleHeadingTitle = styled.h2`
    font-size: 48px;
    text-align: center;
    font-weight: 700;
  `;

  // form label
  const StyledLabel = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  `;

  // form Input
  const StyledInput = styled.input`
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 8px;
  `;

  return (
    <div className="md:flex items-center gap-12">
      {/* image */}
      <div>
        <img src={FormImg} alt="" />
      </div>
      {/* form fields */}
      <div>
        <StyledForm>
          <StyleHeadingTitle>Login</StyleHeadingTitle>
          <StyledLabel>Login ID</StyledLabel>
          <StyledInput type="text" placeholder="Enter Login ID"></StyledInput>
          <StyledLabel>Password</StyledLabel>
          <StyledInput
            type="password"
            placeholder="Enter Password"
          ></StyledInput>
        </StyledForm>
      </div>
    </div>
  );
}

export default App;
