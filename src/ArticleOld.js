import React from 'react'
import CommentList from './CommentList'

const ArticleOld = React.createClass({

    render() {
        const { article: { title, text, comments } } = this.props;
        const { isOpen, openArticle } = this.props;
        const body = isOpen ? <section>{ text } <CommentList comments = {comments} /></section> : null;

        return (
            <div>
                <h1 onClick = {openArticle}>{ title }</h1>
                {body}
            </div>
        )
    }
})

export default ArticleOld