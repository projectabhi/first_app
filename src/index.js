import React from "react";
import ReactDOM from 'react-dom/client';

import './index.css'

const books = [
    {
        author: "Abhijit Dey",
        title: "curious",
        img: "./logo192.png",
        id: 1
    }, {
        author: "Trisha Dey",
        title: "housewife",
        img: 'https://images-na.ssl-images-amazon.com/images/I/913C+MR3S5L._AC_UL600_SR600,400_.jpg',
        id: 2

    }
];

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

// const names=['john','peter','susan'];
// const newNames = names.map((name )=> {
//     return <p>{name}</p>;
// })
// console.log(newNames);

// function BookList() {
//     return (
//         <section className="booklist">
//             <Book job={firstbook.job}>
//                 <p> Lorem impsum...</p>
//                 <button>Buy</button>
//             </Book>
//             <Book image={firstbook.img}
//                 title={firstbook.title}
//                 auhtor={firstbook.author}
//             >
//                 <p> Lorem dimpsum...</p>
//                 <button>Buy</button>
//             </Book>
//             <Book auhtor={secondbook.author} title={secondbook.title} image={secondbook.img} />
//         </section>
//     );
// }

const BookList = (props) => {
    return (
        <section className="booklist">
            {books.map((booksObj) => {
                //const { img, title, author } = booksObj;
                return <Book {...booksObj} key={booksObj.id} />
            })};
        </section>
    );
};

const Book = (props) => {
    const { img, title, author } = props;
    console.log(props);
    return (<article className='book'>
                <img src={img} alt={title} />
                <p>{author}</p>
            </article>);
};

const Image = () => (<img
    src='https://images-na.ssl-images-amazon.com/images/I/913C+MR3S5L._AC_UL600_SR600,400_.jpg' alt="The Woman in Novel"
/>
);
const Title = () => {
    return <h2>Book Title</h2>;
};
const Author = () => <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>Author</h4>

const Person = () => <h2>John Doe</h2>;
const Message = () => {
    return <p>This is modified mesge</p>;
}
const someFunc = (p1, p2) => {
    console.log('calling simeFunc meeage p1-{}, p2-{}', p1, p2);
};

const friends=['john','peter','susan'];
const newFriends=[...friends,'abhijit'];
console.log(friends);
console.log(newFriends);
const root = ReactDOM.createRoot(document.getElementById('root'));
//Copy not a reference{
const someobject ={
    name:'John',
    job: 'Developer'
};
const newObj ={
    ...someobject,location:'India'
};
console.log(someobject);
console.log(newObj);

//root.render(<Greetings />)
root.render(<BookList />)