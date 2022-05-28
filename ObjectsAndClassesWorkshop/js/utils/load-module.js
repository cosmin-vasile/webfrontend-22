import { LoadPromiseHtml } from '../utils/load-html.js';

function LoadModule() {
  this.loadHtml = new LoadPromiseHtml();
}

LoadModule.prototype = {
  load(moduleId) {
    let responseHtml;
    try {
      responseHtml = await this.loadHtml.load('js/modules/' + HASH_MODULE_MAP[moduleId].module);
    } catch(error) {
      console.log('Error loading html:', error);
    }

    if (responseHtml) {
      console.log(responseHtml);
    }
  }
};

export default LoadModule;
