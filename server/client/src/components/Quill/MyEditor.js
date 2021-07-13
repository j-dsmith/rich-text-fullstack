import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import * as actions from "../../actions";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { EditorContainer, NoteTitle, NoteTitleStatic } from "./Editor.styles";

class MyEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", newNoteTitle: "", editTitleActive: false };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  componentDidMount() {
    //fetch individual note here
    this.setState({
      title: this.props.selectedNote.title,
    });
  }

  handleTextChange(value) {
    this.setState({ text: value });
    console.log(this.state.text);
  }

  handleTitleChange(value) {
    console.log(value);
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
        {/* Render either an input for title changes or the existing title based on active state of title edit */}
        {this.state.editTitleActive ? (
          <NoteTitle
            type="text"
            placeholder={this.props.selectedNote.title}
            value={this.state.newNoteTitle}
            onChange={(e) => this.handleTitleChange(e.target.value)}
            maxLength="50"
          />
        ) : (
          // ? If title edit is not act
          <NoteTitleStatic>
            {this.props.selectedNote.title || "Title"}
          </NoteTitleStatic>
        )}
        <ReactQuill
          value={this.state.text}
          onChange={this.handleTextChange}
          modules={this.modules}
          formats={this.formats}
          theme="snow"
        />
        <button
          onClick={() =>
            this.setState({ editTitleActive: !this.state.editTitleActive })
          }
        >
          toggle{" "}
        </button>
        <button>save</button>
      </EditorContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedNote: state.projects.selectedNote,
});

export default withRouter(connect(mapStateToProps, actions)(MyEditor));
