import { useEffect, useState } from "react";
import { Transition } from "react-transition-group";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FadeIn.css";

const FadeIn = () => {
  const [isVisible, setIsVisible] = useState(false);

  /* field CONTENT followed by field NAME
  the field constants are what gets copied
  whilst the fieldName constants are what
  gets displayed on the notifications */
  const field1 = "Company Name";
  const field1Name = "Company Name";

  const field2 = "E-mail Address";
  const field2Name = "E-mail Address";

  const field3 = "Street Address";
  const field3Name = "Street Address";

  const field4 = "Phone Number";
  const field4Name = "Phone Number";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1, transitionDuration: "1.5s" },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.info(`Copied to clipboard: ${fieldName}`);
      })
      .catch((error) => {
        toast.error(`Error copying to clipboard: ${error.message}`);
      });
  };

  return (
    <Transition
      in={isVisible}
      timeout={1600}
      unmountOnExit={true}
      appear={true}
    >
      {(state) => (
        <div
          style={{
            ...transitionStyles[state],
          }}
          className="container"
        >
          <p className="text">
            {field1}{" "}
            <ContentCopyIcon
              className="copy"
              onClick={() => copyToClipboard(field1, field1Name)}
            />
            <br />
            {field2}{" "}
            <ContentCopyIcon
              className="copy"
              onClick={() => copyToClipboard(field2, field2Name)}
            />
            <br />
            {field3}{" "}
            <ContentCopyIcon
              className="copy"
              onClick={() => copyToClipboard(field3, field3Name)}
            />
            <br />
            {field4}{" "}
            <ContentCopyIcon
              className="copy"
              onClick={() => copyToClipboard(field4, field4Name)}
            />
          </p>

          <a href="./#" target="_blank" rel="noopener noreferrer">
            <button className="visit-button">
              Visit Website <OpenInNewIcon className="redirect" />
            </button>
          </a>
        </div>
      )}
    </Transition>
  );
};

export default FadeIn;
