import LoadModule from "./load-module.js";

function PageLoader() {

}

PageLoader.prototype = {
  load(activePage) {
    console.log('activePage', activePage);
  }
};

export default PageLoader;
