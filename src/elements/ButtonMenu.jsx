import React from "react";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

const ButtonMenu = forwardRef( 
  ({ id, d1, d2, d3,  active, clickItem, text }, ref) => {
    const WitchLink = ({children}) => <Link to="/"> {children} </Link> 
      const With = () => {
        return (
         <svg className="icon" viewBox="0 0 24 24">
          <path d={d1} />
          <path d={d2} />
          <path d={d3} />
        </svg>
        ) 
      }
    return (
      <button
        ref={ref}
        onClick={() => clickItem(id)}
        className={"menu__item " + active}
        style={{  display:'flex', flexDirection:'column'}}
        title={text}
      >
        <p style={{color:'#fff',  fontSize:'0.7rem'}}>{text}</p>

        {id>=4?<WitchLink> <With/> </WitchLink>:<With/> }    
       
      </button>
    );
  }
);

export default ButtonMenu;
