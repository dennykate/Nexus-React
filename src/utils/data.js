import { FaRegUser } from "react-icons/fa/index.js";
import {
  IoArchiveOutline,
  IoInformationCircleOutline,
  IoTrashOutline,
} from "react-icons/io5/index.js";
import {
  MdMailOutline,
  MdOutlineAutoFixHigh,
  MdOutlineFavoriteBorder,
  MdOutlineMessage,
} from "react-icons/md/index.js";
import { RxCounterClockwiseClock } from "react-icons/rx/index.js";
import {
  AiFillPrinter,
  AiOutlineUpload,
  AiOutlineVideoCamera,
} from "react-icons/ai/index.js";
import { IoMdCalendar } from "react-icons/io";

export const randomColors = [
  "bg-[#FF5733]",
  "bg-[#42E8FF]",
  "bg-[#B729D9]",
  "bg-[#17E84E]",
  "bg-[#FF3C4E]",
  "bg-[#6F42D9]",
  "bg-[#E8A642]",
  "bg-[#4EE8D9]",
  "bg-[#D93CFF]",
  "bg-[#FF8333]",
  "bg-[#42FFE8]",
  "bg-[#D9426F]",
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

export const detailIcons = [
  {
    Icon: MdMailOutline,
  },
  {
    Icon: IoMdCalendar,
  },
  {
    Icon: MdOutlineMessage,
  },
  {
    Icon: AiOutlineVideoCamera,
  },
];
