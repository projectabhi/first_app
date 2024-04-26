import React from "react";
import ReactDOM from 'react-dom/client';

// function Greetings(){
//     return <h2>Greeting from the first step</h2>
// }

function Greetings(){
    return React.createElement('h2',{},'Greetings !!!')
}

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greetings />)