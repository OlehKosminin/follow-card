import { useState } from "react";
import { DropDown, DropBtn, DropList, DropItem } from "./DropDown.styled";
import { items } from "./items";

const DropMenu = ({ setCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (value) => {
    setCategory(value);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const markup = items.map(({ value, text, id }) => (
    <DropItem
      key={id}
      onClick={() => {
        setIsOpen(false);
        handleClick(value);
      }}
    >
      {text}
    </DropItem>
  ));

  return (
    <DropDown>
      <DropBtn onClick={toggleOpen}>Category</DropBtn>
      {isOpen && (
        <DropList
        // style={{
        //   opacity: isOpen ? 1 : 0,
        //   transform: isOpen ? "translateY(0)" : "translateY(-100%)",
        //   transition: " transform 0.3s ease",
        // }}
        >
          {markup}
        </DropList>
      )}
    </DropDown>
  );
};

export default DropMenu;
