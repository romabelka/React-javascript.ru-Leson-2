export default {
    getInitialState(){
        return {
            openArticleId: null
        }
    },

    openArticle: function (id) {
        return function () {
            this.setState({
                openArticleId: id
            })
        }
    }
}