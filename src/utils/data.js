import { FaRegUser } from "react-icons/fa";
import {
  IoArchiveOutline,
  IoInformationCircleOutline,
  IoTrashOutline,
} from "react-icons/io5";
import { MdOutlineAutoFixHigh } from "react-icons/md";
import { RxCounterClockwiseClock } from "react-icons/rx";

export const sideBarItem = [
  {
    Icon: FaRegUser,
    name: "Contacts",
    pathname:"/"
  },
  {
    Icon: RxCounterClockwiseClock,
    name: "Frequent",
    pathname:"/frequent"
  },
  {
    Icon: IoArchiveOutline,
    name: "Other Contacts",
    DropdownIcon: IoInformationCircleOutline,
    pathname:""

  },
];

export const fixAndMergeSideBarItem = [
  {
    Icon: MdOutlineAutoFixHigh,
    name: "Merge & Fix",
    pathname:""

  },
  {
    Icon: IoTrashOutline,
    name: "Trash",
    pathname:""

  },
];
