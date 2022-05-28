import PAGE_HASHES from './pages.js';

const HASH_MODULE_MAP = {
  [PAGE_HASHES.CREATE_ARTICLE]: {
    module: 'create-article/index.js',
    html: 'create-article/index.html',
  },
  [PAGE_HASHES.ARTICLE]: {
    module: 'articles/index.js',
    html: 'articles/index.html',
  },
};

export default HASH_MODULE_MAP;
