import React   from 'react'

export default (Component) => class DecoratedComponent extends React.Component {

    state = {
        openArticleId: null
    }

    openArticle = id => ev => {
        if (ev) ev.preventDefault()
        this.setState({
            openArticleId: id
        })
    }

    render(){
        return(
            <Component {...this.props}
                openId={this.state.openArticleId}
                openArticle={this.openArticle} />
        )
    }
}
