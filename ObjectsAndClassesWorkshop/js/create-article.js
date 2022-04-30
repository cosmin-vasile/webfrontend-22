function CreateArticle(LoadPromiseHtml) {
  this.loadPromiseHtml = LoadPromiseHtml;
}

CreateArticle.prototype = {
  load() {
    this.loadPromiseHtml.load('./create-article.html').then(function(response) {
      console.log(response);
    });
  },
  render() {

  }
};

export default CreateArticle;
