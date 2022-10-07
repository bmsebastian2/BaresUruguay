import { useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";

const Xsign = styled.div`
  --interval: 1s;
  display: block;
  text-shadow: 0 0 10px var(--color1), 0 0 20px var(--color2),
    0 0 40px var(--color3), 0 0 80px var(--color4);
  will-change: filter, color;

  filter: saturate(60%);
  animation: flicker steps(100) var(--interval) 1s infinite;

  color: tomato;
  --color1: orangered;
  --color2: firebrick;
  --color3: maroon;
  --color4: darkred;

  @keyframes flicker {
    50% {
      color: white;
      filter: saturate(200%) hue-rotate(20deg);
    }
  }
`;
const H3 = styled.h3`
  font-family: Edu VIC WA NT Beginner, cursive;
  font-size: 4.6vmin;
  @media (max-width: 768px) {
    font-size: 5.5vmin;
  }
`;

const TextNeon = () => {
  const el = useRef();
  const randomIn = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  const mixupInterval = (el) => {
    const ms = randomIn(2000, 4000);
    el.current.style.setProperty("--interval", `${ms}ms`);
  };

  useEffect(() => {
    mixupInterval(el);
    el.current.addEventListener("webkitAnimationIteration", () => {
      mixupInterval(el);
    });
  });
  return (
    <Xsign ref={el}>
      <small>
        <H3>Bares de Montevideo.</H3>
      </small>
    </Xsign>
  );
};

export default TextNeon;
