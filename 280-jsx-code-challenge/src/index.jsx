//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import { createRoot } from 'react-dom/client'

const name = "Anne";
const luckyNumber = 7;

createRoot(document.getElementById("root")).render(
    <div>
        <h1>Hello {name}!</h1>
        <p>Your lucky number is {luckyNumber}.</p>
    </div>,
    document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
