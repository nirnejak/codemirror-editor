import React from "react";

import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark, oneDarkHighlightStyle, oneDarkTheme } from "@codemirror/theme-one-dark";

const App = () => {
  React.useEffect(() => {
    let editor = new EditorView({
      state: EditorState.create({
        extensions: [basicSetup, javascript(), oneDark, oneDarkHighlightStyle, oneDarkTheme],
      }),
      parent: document.body,
      element: document.getElementById("code-editor"),
      theme: oneDark,
    });
    
  }, []);

  return (
    <div className="App">
      <div id="code-editor"></div>
    </div>
  );
};

export default App;
