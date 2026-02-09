// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

//import dependency modules
import React from "react";
import ReactDOM from "react-dom/client";

//In order to use React in order to create something on screen, we will use the .render() method from the ReactDOM library. 

//This method takes two arguments, the first is what we want to render and the second is where we want to render it. The first argument can be a single element or a group of elements wrapped in a parent element. The second argument is usually a DOM element with an id of "root" that is created in the index.html file.

//ReactDOM.render(what to show, where to show it, callback function (optional) to tell us when the render is complete)

ReactDOM.render(
    <h1>Hello World!</h1>,
    document.getElementById("root")
);

