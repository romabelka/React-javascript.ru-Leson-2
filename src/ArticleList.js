import React, { Component }  from 'react'
import Article from './Article'
import theOnlyOpen from './decorators/theOnlyOpen.js'

function ArticleList(props){

    const { articles } = props;

    const listItems = articles.map((article) => <li key={article.id}>
        <Article article = {article}
            isOpen = {article.id == props.openId}
            openArticle = {props.openArticle(article.id)}
        />
    </li>);

    return (
        <div>
            <h1>Article list</h1>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default theOnlyOpen(ArticleList)