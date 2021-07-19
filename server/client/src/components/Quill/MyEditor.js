import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import * as actions from "../../actions";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { EditorContainer, SaveBtn, NoteTitleStatic } from "./Editor.styles";
import axios from "axios";

const MyEditor = ({ selectedNote, setSelectedNote, match, fetchProjects }) => {
  const [updatedEditorText, setUpdatedEditorText] = useState("");

  useEffect(() => {
    fetchProjects();
    setUpdatedEditorText(selectedNote.content);
  }, [selectedNote._id, selectedNote.content, fetchProjects]);

  const modules = {
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

  const formats = [
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

  const handleSave = async () => {
    await axios.put(
      `/api/projects/${match.params.projectId}/notes/${match.params.noteId}`,
      {
        title: selectedNote.title,
        content: updatedEditorText,
      }
    );
    fetchProjects();
  };

  return (
    <EditorContainer>
      <NoteTitleStatic>{selectedNote.title || "Title"}</NoteTitleStatic>

      {
        //! setup conditional check to render empty editor
        selectedNote._id && (
          <ReactQuill
            defaultValue={selectedNote.content}
            value={updatedEditorText || ""}
            onChange={setUpdatedEditorText}
            modules={modules}
            formats={formats}
            y
            theme="snow"
          />
        )
      }

      <SaveBtn onClick={() => handleSave()}>SAVE</SaveBtn>
    </EditorContainer>
  );
};

const mapStateToProps = (state) => ({
  projects: state.projects.projects,
  selectedNote: state.projects.selectedNote,
});

export default withRouter(connect(mapStateToProps, actions)(MyEditor));
