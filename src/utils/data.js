import { FaRegUser } from "react-icons/fa";
import {
  IoArchiveOutline,
  IoInformationCircleOutline,
  IoTrashOutline,
} from "react-icons/io5";
import { MdOutlineAutoFixHigh, MdOutlineFavoriteBorder } from "react-icons/md";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { AiFillPrinter, AiOutlineUpload } from "react-icons/ai";

export const randomColors = [
  "bg-[#FF5733]",
  "bg-[#42E8FF]",
  "bg-[#B729D9]",
  "bg-[#F5F17A]",
  "bg-[#17E84E]",
  "bg-[#FF3C4E]",
  "bg-[#6F42D9]",
  "bg-[#E8A642]",
  "bg-[#4EE8D9]",
  "bg-[#D93CFF]",
  "bg-[#FF8333]",
  "bg-[#42FFE8]",
  "bg-[#D9426F]",
  "bg-[#F1F57A]",
  "bg-[#6FE817]",
  "bg-[#334EFF]",
  "bg-[#FF336E]",
  "bg-[#426FD9]",
  "bg-[#A6E842]",
  "bg-[#4ED9E8]",
];

export const sideBarItem = [
  {
    Icon: FaRegUser,
    name: "Contacts",
    pathname: "/",
  },
  {
    Icon: RxCounterClockwiseClock,
    name: "Frequent",
    pathname: "/frequent",
  },
  {
    Icon: MdOutlineFavoriteBorder,
    name: "Favorite",
    pathname: "/favorite",
  },
  {
    Icon: IoArchiveOutline,
    name: "Other Contacts",
    DropdownIcon: IoInformationCircleOutline,
    pathname: "",
  },
];

export const fixAndMergeSideBarItem = [
  {
    Icon: MdOutlineAutoFixHigh,
    name: "Merge & Fix",
    pathname: "",
  },
  {
    Icon: IoTrashOutline,
    name: "Trash",
    pathname: "",
  },
];

export const tableRowDropdownData = [
  {
    name: "Printer",
    Icon: AiFillPrinter,
  },
  {
    name: "Export",
    Icon: AiOutlineUpload,
  },
  {
    name: "Hide from contacts",
    Icon: IoArchiveOutline,
  },
];
