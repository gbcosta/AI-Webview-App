import { CiImageOn } from "react-icons/ci";
import { IoChatbubbleOutline, IoCodeSlashSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { Tag } from "./tagType";

export const getIcon = (tag: Tag) => {
  switch (tag) {
    case "Dev & Code":
      return IoCodeSlashSharp;
    case "Productivity":
      return MdWork;
    case "Image & Video":
      return CiImageOn;
    default:
      return IoChatbubbleOutline;
  }
};
