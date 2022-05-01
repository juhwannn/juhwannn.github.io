import React from "react";


const Project =
({
    visible,
    setVisible
}) => {

    return (
        <div style={{display: visible ? "block" : "none"}}>
            Project.js
        </div>
    );
};

export default Project;