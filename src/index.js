import React from "react";
import ReactDOM from 'react-dom/client';

import './index.css'

const firstbook={
    author: "Abhijit Dey",
    title: "curious",
    img: './logo192.png'
 };

 const secondbook={
    author: "Trisha Dey",
    title: "housewife",
    img: 'https://images-na.ssl-images-amazon.com/images/I/913C+MR3S5L._AC_UL600_SR600,400_.jpg'
 };

// function Greetings(){
//     return <h2>Greeting from the first step</h2>
// }

// function Greetings(){
//     return React.createElement('h2',{},'Greetings !!!')
// }

function Greetings() {
    return (
        <div>
            <Person />
            <Message />
        </div>
    );
}

function BookList() {
    return (
        <section className="booklist">
            <Book job={firstbook.job} />
            <Book auhtor={firstbook.author} title={firstbook.title}/>
            <Book auhtor={secondbook.author} title={secondbook.title} />
            <Book />
        </section>
    );
}

const Book = (props) => {
    console.log(props);
    return (
        <article className='book'>
            <Image />
            <Title />
            <Author someFunc />
            <p>{props.job}</p>
            <p>{props.auhtor}</p>
            <p>{props.title}</p>
        </article>
    );
}

const Image = () => (<img 
    src='https://images-na.ssl-images-amazon.com/images/I/913C+MR3S5L._AC_UL600_SR600,400_.jpg' alt="The Woman in Novel"
     />
);
const Title = () => {
    return <h2>Book Title</h2>;
};
const Author = () => <h4 style={{color:'#617d98', fontSize:'0.75rem', marginTop: '0.5rem'}}>Author</h4>

const Person = () => <h2>John Doe</h2>;
const Message = () => {
    return <p>This is modified mesge</p>;
}
 const someFunc= (p1,p2)=>{
    console.log('calling simeFunc meeage p1-{}, p2-{}',p1,p2);
 };

 

const root = ReactDOM.createRoot(document.getElementById('root'));

//root.render(<Greetings />)
root.render(<BookList />)