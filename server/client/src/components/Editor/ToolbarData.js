import * as BsIcons from "react-icons/bs";
import * as CgIcons from "react-icons/cg";

export const toolbarItems = [
  {
    label: "bold",
    style: "BOLD",
    icon: <BsIcons.BsTypeBold className="toolbar-icon" />,
  },
  {
    label: "italic",
    style: "ITALIC",
    icon: <BsIcons.BsTypeItalic className="toolbar-icon" />,
  },
  {
    label: "underline",
    style: "UNDERLINE",
    icon: <BsIcons.BsTypeUnderline className="toolbar-icon" />,
  },
  {
    label: "strikethrough",
    style: "STRIKETHROUGH",
    icon: <BsIcons.BsTypeStrikethrough className="toolbar-icon" />,
  },
  {
    label: "code",
    style: "CODE",
    icon: <BsIcons.BsCode className="toolbar-icon" />,
  },
  {
    label: "heading",
    style: "H1",
    icon: <CgIcons.CgFormatHeading className="toolbar-icon" />,
  },
  {
    label: "indent",
    style: "JUSTIFY_RIGHT",
    icon: <BsIcons.BsTextIndentLeft className="toolbar-icon" />,
  },
  {
    label: "dedent",
    style: "DEDENT",
    icon: <BsIcons.BsTextIndentRight className="toolbar-icon" />,
  },
];
