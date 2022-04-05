import React, {useState} from "react";
import {useRouter} from "next/router";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';


export default function Home() {
    const router = useRouter();

    const modules = {
        toolbar: [
            //[{ 'font': [] }],
            [{'header': [1, 2, false]}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            [{'align': []}, {'color': []}, {'background': []}],          // dropdown with defaults from theme
            ['clean']
        ],
    };

    const formats = [
        //'font',
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
        'align', 'color', 'background',
    ];

    const [value, setValue] = useState('');


    return (
        <div>
            <ReactQuill
                style={{height: "600px"}}
                theme="snow"
                modules={modules}
                formats={formats}
                value={value || ''}
                onChange={(content, delta, source, editor) => setValue(editor.getHTML())}
            />
        </div>
    );
}
