import React from "react";
import Style from "./MonEditeur.module.css";
import Editor from "draft-js-plugins-editor";
import createHighlightPlugin from "./plugins/highlightPlugin";

function MonEditeurReadOnly(props) {
  //const editor = EditorState.createEmpty();
  //NIE plugins
  const highlightPlugin = createHighlightPlugin();
  const plugins = [highlightPlugin];
  return (
    <div className={Style.ReadOnly}>
      <Editor
        editorState={props.editorState}
        readOnly={true}
        plugins={plugins}
        onChange={(e) => e}
      />
    </div>
  );
}

export default MonEditeurReadOnly;
