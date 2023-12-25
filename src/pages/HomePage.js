import React from 'react';
import Article from '../components/Article'
import '../styles/HomePage.css'

const article = [
    {
        id: 0,
        title: 'Ile waży dorosły słoń?',
        author: 'Mateusz Snela',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium accusamus vero deleniti cumque, amet possimus eius, rem non molestias quo enim quod necessitatibus cupiditate.'
    },
    {
        id: 1,
        title: 'Jak żyją ludzie w Krainie Gostyńskiej',
        author: 'Wojtek Błaszczyk',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium accusamus vero deleniti cumque, amet possimus eius, rem non molestias quo enim quod necessitatibus cupiditate.'
    },
    {
        id: 2,
        title: 'Motywacja i Dyscyplina',
        author: 'Dawid Kaźmierczak',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium accusamus vero deleniti cumque, amet possimus eius, rem non molestias quo enim quod necessitatibus cupiditate.'
    },
]

const HomePage = () => {

    const artList = article.map(article => (
        <Article
            key={article.id}
            title={article.title}
            text={article.text}
            author={article.author}
        />
    ))

    return ( 
        <div>{artList}</div>
    );
}
  
export default HomePage;