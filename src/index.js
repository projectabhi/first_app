import React from "react";
import ReactDOM from 'react-dom/client';

// function Greetings(){
//     return <h2>Greeting from the first step</h2>
// }

// function Greetings(){
//     return React.createElement('h2',{},'Greetings !!!')
// }

function Greetings(){
    return (
        <div>
           <Person />
           <Message />
        </div>
    );
}

function BookList(){
    return (
        <section>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
}

const Book = () =>{
    return (
    <article>
        <Image />
        <Title/>
        <Author />
    </article>
    );
}

const Image =() => <h2>image placeholdert</h2>;
const Title =()=> {
    return <h2>Book Title</h2>;
};
const Author =()=><h4>Author</h4>

const Person = () => <h2>John Doe</h2>;
const Message = ()=> {
    return <p>This is modified mesge</p>;
}

const root=ReactDOM.createRoot(document.getElementById('root'));

//root.render(<Greetings />)
root.render(<BookList />)