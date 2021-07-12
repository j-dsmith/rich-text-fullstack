import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { EditorContainer, NoteTitle } from "./Editor.styles";

class MyEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", noteTitle: "" };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleTextChange(value) {
    this.setState({ text: value });
    console.log(this.state.text);
  }

  handleTitleChange(value) {
    this.setState({ noteTitle: value });
  }

  modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "indent",
    "align",
    "link",
    "image",
  ];

  render() {
    return (
      <EditorContainer>
        <NoteTitle
          type="text"
          placeholder="Title"
          value={this.state.noteTitle}
          onChange={(e) => this.handleTitleChange(e.target.value)}
          maxLength="50"
        />
        <ReactQuill
          value={this.state.text}
          onChange={this.handleTextChange}
          modules={this.modules}
          formats={this.formats}
          theme="snow"
        />
      </EditorContainer>
    );
  }
}

export default MyEditor;
