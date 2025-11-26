import { Feature } from "@/types/feature";
import { Wallet } from "lucide-react";


const featuresData: Feature[] = [
  {
    id: 1,
    title: "Cash Points",
    icon: (
      <svg width="48" height="48" viewBox="0 0 40 40" className="fill-current">
        <path opacity="0.5" d="M5 5H35V35H5V5Z" />
        <path d="M20 10C15.58 10 12 13.58 12 18C12 22.42 15.58 26 20 26C24.42 26 28 22.42 28 18C28 13.58 24.42 10 20 10ZM20 14C22.21 14 24 15.79 24 18C24 20.21 22.21 22 20 22C17.79 22 16 20.21 16 18C16 15.79 17.79 14 20 14Z"/>
      </svg>
    ),
    paragraph: "",
  },
  {
    id: 2,
    title: "Spin & Win",
    icon: (
      <svg width="48" height="48" viewBox="0 0 40 40" className="fill-current">
        <path opacity="0.5" d="M20 0C8.97 0 0 8.97 0 20C0 31.03 8.97 40 20 40C31.03 40 40 31.03 40 20C40 8.97 31.03 0 20 0Z" />
        <path d="M20 6L23 15L33 17L25 23L27 33L20 27L13 33L15 23L7 17L17 15L20 6Z" />
      </svg>
    ),
    paragraph: "",
  },
  {
    id: 3,
    title: "Rewards",
    icon: (
      <svg width="48" height="48" viewBox="0 0 40 40" className="fill-current">
        <path opacity="0.5" d="M20 2L25 14L38 15L28 23L31 36L20 29L9 36L12 23L2 15L15 14L20 2Z" />
      </svg>
    ),
    paragraph: "",
  },
  {
    id: 4,
    title: "Scratch Cards",
    icon: (
      <svg width="48" height="48" viewBox="0 0 40 40" className="fill-current">
        <path opacity="0.5" d="M5 5H35V35H5V5Z" />
        <path d="M10 15H30V18H10V15ZM10 22H25V25H10V22Z" />
      </svg>
    ),
    paragraph: "",
  },
  {
    id: 5,
    title: "Gift Cards",
   icon: (
      <svg width="48" height="48" viewBox="0 0 40 40" className="fill-current">
        <path opacity="0.5" d="M5 15H35V35H5V15Z" />
        <path d="M20 5C17 5 15 7 15 9C15 11 17 13 20 13C23 13 25 11 25 9C25 7 23 5 20 5ZM10 15C10 12 13 10 16 10H24C27 10 30 12 30 15H10ZM18 15V35H22V15H18Z" />
      </svg>
    ),
    paragraph: "",
  },
];

export default featuresData;
