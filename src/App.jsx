import "./App.css";
import FormImg from "./assets/login-image.png";
import styled from "styled-components";
import { FaEyeSlash } from "react-icons/fa";

function App() {
  // form styled
  const StyledForm = styled.form`
    padding: 12px;
    @media (max-width: 769px) {
      padding: 2px;
    }
  `;

  // h2 style
  const StyleHeadingTitle = styled.h2`
    font-size: 48px;
    align-items: center;
    font-weight: 700;
  `;

  // span tag
  const StyleSpanText = styled.span`
    color: #f78719;
    font-size: 18px;
    @media (max-width: 769px) {
      font-size: 16px;
    }
  `;

  const StyleRegisterText = styled.span`
    color: #f78719;
    font-size: 18px;
    text-decoration: underline;
    font-weight: 700;
    cursor: pointer;
    @media (max-width: 769px) {
      font-size: 16px;
    }
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
    @media (max-width: 769px) {
      font-size: 16px;
    }
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

  /*
    all divs here.......
  */

  // button and register div
  const StyledBtnRegDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
  `;

  // remember and changed div
  const StyledRemChangedDiv = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  // password div
  const StyledPassDiv = styled.div`
    position: relative;
  `;
  // eye icon span
  const StyledEyeSpan = styled.span`
    position: absolute;
    top: 40px;
    right: 16px;
  `;

  // id div
  const StyledIdDiv = styled.div``;

  // heading title div
  const StyledHeadingTitleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
  `;

  // img div
  const StyledImgDiv = styled.div`
    padding: 32px;
    @media (min-width: 768px) {
      padding: 0px;
    }
  `;
  // img tag
  const StyledImgTag = styled.img`
    @media (min-width: 768px) {
      width: 300px;
    }
    @media (min-width: 968px) {
      width: 420px;
    }
  `;

  // form container div
  const StyledFormContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    padding: 16px;
    @media (min-width: 768px) {
      width: 50%;
      padding: 32px;
    }
  `;

  // main div
  const StyledMainDiv = styled.div`
    margin-top: 32px;
    margin-bottom: 32px;
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-top: 0px;
      margin-bottom: 0px;
    }
    @media (min-width: 1024px) {
      padding: 48px;
    }
  `;

  return (
    <StyledMainDiv>
      {/* image */}
      <StyledImgDiv>
        <StyledImgTag src={FormImg} alt="login img" />
      </StyledImgDiv>
      {/* form fields */}
      <StyledFormContainer>
        <StyledForm>
          <StyledHeadingTitleDiv>
            <StyleHeadingTitle>Login</StyleHeadingTitle>
          </StyledHeadingTitleDiv>

          {/* ID */}
          <StyledIdDiv>
            <StyledLabel>Login ID</StyledLabel>
            <StyledInput type="text" placeholder="Enter Login ID"></StyledInput>
          </StyledIdDiv>

          {/* password */}
          <StyledPassDiv>
            <StyledLabel>Password</StyledLabel>
            <StyledInput
              type="password"
              placeholder="Enter Password"
            ></StyledInput>
            {/* eye icon */}
            <StyledEyeSpan>
              <FaEyeSlash />
            </StyledEyeSpan>
          </StyledPassDiv>

          <StyledRemChangedDiv>
            <Label>
              <Input />
              <LabelText>Remember Me</LabelText>
            </Label>

            <StyleSpanText>Changed Password</StyleSpanText>
          </StyledRemChangedDiv>

          <Label>
            <Input />
            <LabelText>
              Agree to <StyleSpanText>Terms & Conditions</StyleSpanText>
            </LabelText>
          </Label>

          <StyledBtnRegDiv>
            <StyledButton>Login</StyledButton>
          </StyledBtnRegDiv>

          <StyledBtnRegDiv>
            <LabelText>
              Did&apos;t have an account?{" "}
              <StyleRegisterText>Register Here</StyleRegisterText>
            </LabelText>
          </StyledBtnRegDiv>
        </StyledForm>
      </StyledFormContainer>
    </StyledMainDiv>
  );
}

export default App;
