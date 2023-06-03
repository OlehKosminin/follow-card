import styled from "styled-components";
import img from "../../accest/questionImg@2.png";

export const Section = styled.section`
  min-height: 100vh;
  background-color: var(--accent-color);
`;

export const Container = styled.div`
  padding: 40px 7px;
`;

export const BackBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;

  font-family: var(--base-font);
  font-weight: 600;
  font-size: 30px;

  color: var(--btn-text-color);
  background-color: var(-follow-bg-btn);

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  transition: all 0.4s;
  :hover {
    opacity: 0.8;
  }
`;

export const Header = styled.header`
  padding: 20px 15px;
  border-bottom: 5px solid var(--border-color);

  display: flex;
  justify-content: space-around;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Item = styled.li`
  position: relative;

  margin: 0 24px 20px 24px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;
export const Image = styled.div`
  margin: 28px 36px;

  width: 308px;
  height: 168px;

  background-image: url(${img});
  background-size: contain;
  background-repeat: no-repeat;
`;
export const SvgWrapper = styled.div`
  position: absolute;
  left: 15;
  top: 15;
`;

export const Line = styled.div`
  width: 100%;
  height: 8px;

  background: var(--follow-bg-btn);

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;

  margin-bottom: 62px;
`;

export const InfoWrapper = styled.div`
  position: relative;
  text-align: center;
`;

export const AvatarWraper = styled.div`
  position: absolute;

  top: -103px;
  left: 50%;

  transform: translateX(-50%);

  width: fit-content;
  height: fit-content;
  border: 8px solid var(--follow-bg-btn);
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 62px;
  border-radius: 50%;
`;
export const TextName = styled.p`
  font-family: var(--base-font);
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: var(--follow-bg-btn);

  margin-bottom: 16px;
`;

export const TextFollowing = styled.p`
  font-family: var(--base-font);
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: var(--follow-bg-btn);

  margin-bottom: 26px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 14px 28px;
  margin: 0 auto 36px auto;

  font-family: var(--base-font);
  font-weight: 600;

  color: var(--btn-text-color);

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  transition: all 0.4s;
  :hover {
    opacity: 0.8;
  }
`;
