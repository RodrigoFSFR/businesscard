import { useEffect, useRef, useState } from "react";
import { Transition } from "react-transition-group";
import logo from "./logo.svg";

const LogoAnimation = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    setIsImageVisible(true);
  }, []);

  const transitionStyles = {
    entering: {
      transform: "translate(-50%, -50%) scale(1)",
    },
    entered: {
      transform: "translate(-50%, -100%) scale(0.5)",
    },
    exiting: {
      transform: "translate(-50%, -100%) scale(0.5)",
    },
    exited: {
      transform: "translate(-50%, -100%) scale(0.5)",
    },
  };

  return (
    <Transition in={isImageVisible} timeout={1000}>
      {(state) => (
        <img
          ref={imageRef}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
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
