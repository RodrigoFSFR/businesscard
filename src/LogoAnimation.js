import React, { useEffect, useState } from "react";
import { Transition } from "react-transition-group";
import logo from "./logo.svg";

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
      transform: "translate(-50%, -50%) scale(1.42)",
    },
    entered: {
      transform: isMobile
        ? "translate(-50%, -100%) scale(1)"
        : "translate(-50%, -100%) scale(0.5)",
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
            position: "absolute",
            left: "50%",
            top: isMobile ? "40%" : "50%",
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
