import React, { useEffect, useState } from "react";
import { Transition } from "react-transition-group";
import logo from "./logo.png";

const LogoAnimation = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsImageVisible(true);

    // checks if the user is on a mobile device
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();

    // window resize event listener
    window.addEventListener("resize", handleResize);

    // event listener clean-up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const transitionStyles = {
    entering: {
      transform: isMobile
        ? "translate(-50%, -50%) scale(0.9)"
        : "translate(-50%, -50%) scale(1.42)",
    },
    entered: {
      transform: isMobile
        ? "translate(-50%, -100%) scale(0.7)"
        : "translate(-50%, -100%) scale(0.7)",
    },
    exiting: {
      transform: isMobile
        ? "translate(-50%, -100%) scale(1)"
        : "translate(-50%, -100%) scale(0.5)",
    },
    exited: {
      transform: isMobile
        ? "translate(-50%, -100%) scale(1)"
        : "translate(-50%, -100%) scale(0.5)",
    },
  };

  return (
    <Transition in={isImageVisible} timeout={1000}>
      {(state) => (
        <img
          style={{
            filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.6))",
            zIndex: "2",
            position: "absolute",
            left: "50%",
            top: "40%",
            transition: "transform 1s",
            ...transitionStyles[state],
          }}
          src={logo}
          alt="animated"
        />
      )}
    </Transition>
  );
};

export default LogoAnimation;
