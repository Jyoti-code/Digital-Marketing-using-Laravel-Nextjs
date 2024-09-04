import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {ClassicEditor,HtmlEmbed} from "@ckeditor/ckeditor5-build-classic";

const DescriptionEditor = ({ value, onChange }) => {
    return (
        <div className="form-group">
            <label>Description</label>
            <CKEditor
                editor={ClassicEditor}
                data={value}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    onChange(data);
                }}
            />
        </div>
    );
};

export default DescriptionEditor;
