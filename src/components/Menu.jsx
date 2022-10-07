import "../style/menu.css";
import { listButton, InvertirButton, ResetButton } from "../function/listButtonMenu";
import ButtonMenu from "../elements/ButtonMenu";
import { useState, useRef,useEffect } from "react";


const Menu = () => {
  const menuBorder = useRef();
  const menu = useRef();
  const b1 = useRef();
  const b2 = useRef();
  const b3 = useRef();
  const b4 = useRef();
  const b5 = useRef();
  const arraRef = [b1, b2, b3, b4, b5];

  const reset = listButton;

  const [vButtonActive, setvButtonActive] = useState(reset);

  const clickItem = (id) => {
    let ver = (id!==4)?InvertirButton(id, vButtonActive):ResetButton(id, vButtonActive)
    setvButtonActive(ver);  
    offsetMenuBorder(arraRef[id].current);      
  };

  function offsetMenuBorder(element) {
    const offsetActiveItem = element.getBoundingClientRect();
    const left =
      Math.floor(
        offsetActiveItem.left -
          menu.current.offsetLeft -
          (menuBorder.current.offsetWidth - offsetActiveItem.width) / 2
      ) + "px";
    menuBorder.current.style.transform = `translate3d(${left}, 0 , 0)`;
  }
  useEffect(() => {   
    offsetMenuBorder(b1.current);
  }, []);

  return (
    <div className="containerMenu">
      
      <div className="menu" ref={menu}>
        {vButtonActive.map((e, item) => (
          <ButtonMenu
            key={item}
            id={item}
            d1={e.d1}
            d2={e.d2}
            d3={e.d3}
            // color={e.color}
            active={e.active}
            text={e.text}
            clickItem={clickItem}            
            ref={arraRef[item]}
          />
        ))}
        

        <div className="menu__border" ref={menuBorder} />
      </div>

      <div className="svg-container">
        <svg viewBox="0 0 202.9 45.5">
          <clipPath
            id="menu"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.0049285362247413 0.021978021978022)"
          >
            <path
              d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
        c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
        c9.2,3.6,17.6,4.2,23.3,4H6.7z"
            />
          </clipPath>
        </svg>
      </div>
      
    </div>
  );
};

export default Menu;
