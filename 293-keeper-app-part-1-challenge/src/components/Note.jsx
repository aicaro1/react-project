import React from "react";

function Note() {
    const currentyear = new Date().getFullYear();
    return(
        <div class="note">
            <h1>Title</h1>
            <p>Content</p>
        </div>
    );

}

export default Note;