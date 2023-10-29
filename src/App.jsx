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
    lign-items: center;
    font-weight: 700;
  `;

  // span tag
  const StyleSpanText = styled.span`
    color: #f78719;
    font-size: 18px;
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

  //
  const Input = styled.input.attrs({ type: "checkbox" })``;

  const Label = styled.label`
    align-items: center;
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
  `;
  const LabelText = styled.span`
    font-size: 18px;
  `;

  // login button
  const StyledButton = styled.button`
    width: 70%;
    background-color: #1575a7;
    padding: 8px 0 8px 0;
    font-size: 18px;
    color: white;
    font-weight: 500;
    border-radius: 8px;
  `;

  return (
    <div className="md:flex items-center gap-4 p-4 md:p-12">
      {/* image */}
      <div className="md:w-1/2">
        <img src={FormImg} alt="" className="md:w-[420px]" />
      </div>
      {/* form fields */}
      <div className="md:w-1/2 mx-auto w-full p-8">
        <StyledForm>
          <StyleHeadingTitle>Login</StyleHeadingTitle>

          {/* ID */}
          <div>
            <StyledLabel>Login ID</StyledLabel>
            <StyledInput type="text" placeholder="Enter Login ID"></StyledInput>
          </div>

          {/* password */}
          <div>
            <StyledLabel>Password</StyledLabel>
            <StyledInput
              type="password"
              placeholder="Enter Password"
            ></StyledInput>
          </div>

          <div className="flex justify-between">
            <Label>
              <Input />
              <LabelText>Remember Me</LabelText>
            </Label>

            <StyleSpanText>Changed Password</StyleSpanText>
          </div>

          <Label>
            <Input />
            <LabelText>
              Agree to <StyleSpanText>Terms & Conditions</StyleSpanText>
            </LabelText>
          </Label>

          <div className="flex items-center justify-center mt-4">
            <StyledButton>Login</StyledButton>
          </div>
        </StyledForm>
      </div>
    </div>
  );
}

export default App;
