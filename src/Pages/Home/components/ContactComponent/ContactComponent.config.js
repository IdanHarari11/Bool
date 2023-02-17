import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

export const CONTACT_ABOVE_TEXT = "Contact Us";
export const CONTACT_TITLE = "Have any questions?";
export const CONTACT_BELOW_TEXT =
  "We are here to help and answer any question you might have. We look forward to hearing from you.";

export const CONTACT_INFO = [
  {
    _id: 1,
    icon: <HiOutlineLocationMarker className="w-8 h-8" />,
    title: "Location",
    text: "1234 Street Name, City Name, United States",
  },
  {
    _id: 2,
    icon: <HiOutlineMail className="w-8 h-8" />,
    title: "Email",
    text: "info@bool.com",
  },
  {
    _id: 3,
    icon: <HiOutlinePhone className="w-8 h-8" />,
    title: "Call",
    text: "+1 234 567 890",
  },
];

export const CONTACT_FORM = [
  {
    _id: 1,
    type: "text",
    name: "name",
    placeholder: "Your Name",
    required: true,
    input: "input",
  },
  {
    _id: 2,
    type: "email",
    name: "email",
    placeholder: "Your Email",
    required: true,
    input: "input",
  },
  {
    _id: 3,
    type: "text",
    name: "subject",
    placeholder: "Subject",
    required: true,
    input: "input",
  },
  {
    _id: 4,
    type: "textarea",
    name: "message",
    placeholder: "Your Message",
    required: true,
    input: "textarea",
    rows: 4,
  },
];

export const CONTACT_BUTTON = {
  text: "Send Message",
  type: "submit",
};
