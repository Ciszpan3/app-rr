import React from 'react';
const Article = (props) => {
    return ( 
        <article className='article'>
            <h2>{props.title}</h2>
            <span>{props.author}</span>
            <p>{props.text}</p>
        </article>
    );
}
 
export default Article;