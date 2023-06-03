import styled from "styled-components";

export const DropDown = styled.div`
  position: relative;
`;
export const DropBtn = styled.button`
  cursor: pointer;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 14px 28px;

  font-family: var(--base-font);
  font-weight: 600;
  font-size: 30px;

  background-color: var(-follow-bg-btn);
  color: var(--btn-text-color);

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  transition: all 0.4s;
  :hover {
    opacity: 0.8;
  }
`;
export const DropList = styled.ul`
  position: absolute;
  left: 0;
  top: 100%;
  min-width: 150px;
  background-color: #f0f0f0;
  padding: 10px;
  margin-top: 5px;

  font-family: var(--base-font);
  font-weight: 600;
  font-size: 30px;

  background-color: var(-follow-bg-btn);
  color: var(--btn-text-color);

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  transform: translate(-110%, -45%);

  z-index: 1;
`;
export const DropItem = styled.div`
  padding: 5px;
  cursor: pointer;

  :hover {
    background-color: #ddd;
  }
`;
