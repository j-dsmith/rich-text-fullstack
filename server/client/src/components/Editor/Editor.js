import React, { useEffect, useRef, useState } from "react";
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";
import { toolbarItems } from "./ToolbarData";
import {
  EditorWrapper,
  EditorContainer,
  ToolbarContainer,
  ToolbarItem,
} from "./Editor.styles";
import "draft-js/dist/Draft.css";

const MyEditor = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const [toolBtnActive, setToolBtnActive] = useState(false);

  const domEditor = useRef();

  useEffect(() => {});

  const _onStyleClick = (e, style) => {
    e.preventDefault();
    setToolBtnActive(!toolBtnActive);
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const isActive = (style) => {
    const currentStyle = editorState.getCurrentInlineStyle();
    return currentStyle.has(style);
  };

  const renderToolbarItems = () => {
    return toolbarItems.map((item, idx) => {
      return (
        <ToolbarItem
          key={`${item.label}-${idx}`}
          onMouseDown={(e) => _onStyleClick(e, item.style)}
          isActive={isActive(item.style)}
        >
          {item.icon || item.label}
        </ToolbarItem>
      );
    });
  };
  const contentState = editorState.getCurrentContent();
  console.log(convertToRaw(contentState));
  return (
    <EditorWrapper>
      <ToolbarContainer>{renderToolbarItems()}</ToolbarContainer>
      <EditorContainer>
        <Editor
          customStyleMap={styleMap}
          editorState={editorState}
          onChange={setEditorState}
          ref={domEditor}
        />
      </EditorContainer>
    </EditorWrapper>
  );
};

const styleMap = {
  H1: {
    display: "block",
    fontSize: "2em",
    margin: "0.67em 0",
    fontWeight: "bold",
  },
  JUSTIFY_RIGHT: {
    display: "flex",
    justifyContent: "flex-end",
  },
};

export default MyEditor;
