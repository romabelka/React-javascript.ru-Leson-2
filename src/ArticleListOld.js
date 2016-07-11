import React, { Component, PropTypes } from 'react';
import Article from './ArticleOld';
import theOnlyOpen from './mixins/theOnlyOpen'

const ArticleListOld = React.createClass({

    mixins: [theOnlyOpen],

    render(){
        const { articles } = this.props;

        const listItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                     isOpen={article.id == this.state.openArticleId}
                     openArticle={this.openArticle(article.id).bind(this)}/>
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
});

export default ArticleListOld;
