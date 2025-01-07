import { Fragment, useEffect, useState } from "react";
import { Transition } from "react-transition-group";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import BusinessIcon from "@mui/icons-material/Business";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FadeIn.css";
import fileSaver from "file-saver";
import vcard from "./vcard_SipSync.vcf";

const FadeIn = () => {
  const [isVisible, setIsVisible] = useState(false);

  /* field CONTENT followed by field NAME
  the field constants are what gets copied
  whilst the fieldName constants are what
  gets displayed on the notifications */
  const field1 = "SipSync";
  const field1Name = "Company Name";

  const field2 = "+44 777777777";
  const field2Name = "Phone Number";

  const field3 = "general@sipsync.com";
  const field3Name = "E-mail Address";

  const field4 = [
    "Frenchay Campus,",
    <br key="1" />,
    "Coldharbour Lane,",
    <br key="2" />,
    "Bristol, BS16QY,",
    <br key="3" />,
    "United Kingdom",
  ];

  // field4Text is separate from field 4 so the <br/>'s do not get copied as [object, Object]
  const field4Text =
    "Frenchay Campus, Coldharbour Lane, Bristol, BS16QY, United Kingdom";
  const field4Name = "Street Address";

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

  const saveVcard = () => {
    fileSaver.saveAs(vcard, "vcard_SipSync.vcf");
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
            <BusinessCenterIcon />
            {field1}{" "}
            <ContentCopyIcon
              className="copy"
              onClick={() => copyToClipboard(field1, field1Name)}
            />
            <br />
            <LocalPhoneIcon />
            {field2}{" "}
            <ContentCopyIcon
              className="copy"
              onClick={() => copyToClipboard(field2, field2Name)}
            />
            <br />
            <EmailIcon />
            {field3}{" "}
            <ContentCopyIcon
              className="copy"
              onClick={() => copyToClipboard(field3, field3Name)}
            />
            <br />
            <BusinessIcon />
            {field4}{" "}
            <ContentCopyIcon
              className="copy"
              onClick={() => copyToClipboard(field4Text, field4Name)}
            />
          </p>

          <Fragment>
            <button onClick={saveVcard}>
              Add to Contacts <ContactPageIcon className="icon-b" />
            </button>
            <a href="./#" target="_blank" rel="noopener noreferrer">
              <button>
                Visit Website <OpenInNewIcon className="icon-b" />
              </button>
            </a>
          </Fragment>
        </div>
      )}
    </Transition>
  );
};

export default FadeIn;
