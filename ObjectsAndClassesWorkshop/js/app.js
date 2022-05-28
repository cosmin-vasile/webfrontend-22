import Nav from './nav.js';
import PageLoader from './utils/page-loader.js';

//@todo refactor to import on demand

function App(PageLoader, PageNav) {
  this.pageLoader = PageLoader;
  this.pageNav = PageNav;
}

App.prototype = {
  init() {
    this.pageNav.attachListeners();
    this.pageLoader.load(this.pageNav.activePage);
    this.pageNav.onChange((hash) => {});
  },
};

const pageLoader = new PageLoader();
const pageNav = new Nav('.main-nav a');
const myApp = new App(pageLoader, pageNav);
myApp.init();


//@todo - data viitoare
// App
//  PageWrapper -> constrirea elementelor, va compone elementele din pagina (nav, footer, sideber)
//  FullPageWrapper -> (nav)
