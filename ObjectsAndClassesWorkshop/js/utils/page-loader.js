const PAGE_HASHES = {
  CREATE_ARTICLE: '#create-article',
  ARTICLE: '#articles',
};

const HASH_MODULE_MAP = {
  [PAGE_HASHES.CREATE_ARTICLE]: './create-article.js',
  [PAGE_HASHES.ARTICLE]: './articles.js',
  //...
};

function PageLoader() {

}

PageLoader.prototype = {
  load() {

  }
};

export default PageLoader;
