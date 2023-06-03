import styled, { keyframes } from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  background-color: var(--accent-color);
  background-image: url("https://m.goit.global/ua/new/assets/images/header/bg_tablet.jpg");
  background-size: cover;
`;

export const Container = styled.div`
  padding: 20px 8px;
`;

export const Wrapper = styled.div`
  position: relative;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
  position: absolute;

  left: 50%;
  top: 10%;
  transform: translate(-50%, -50%);

  color: var(--btn-text-color);
  font-family: var(--base-font);
  font-weight: 500;
  font-size: 70px;
  text-align: center;

  padding: 15px 40px;
  background-color: hsla(0, 0%, 100%, 0.2);
  border-radius: 30px;
  height: 50px;
  line-height: 50px;
  margin-bottom: 36px;
  width: max-content;
`;

export const Button = styled.button`
  position: absolute;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 28px;

  font-family: var(--base-font);
  font-weight: 600;
  font-size: 80px;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  border-radius: 50%;
  border: none;

  width: 300px;
  height: 300px;

  color: var(--btn-text-color);
  background-color: var(-follow-bg-btn);

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  transition: all 0.4s;
  :hover {
    box-shadow: inset 0 0 0 4px #8106a9, inset 0 0 0 8px #68237f,
      inset 0 0 0 12px #b964d4, inset 0 0 0 20px #54026e;
    background: #4e026e;
    color: #fff;
  }
`;
