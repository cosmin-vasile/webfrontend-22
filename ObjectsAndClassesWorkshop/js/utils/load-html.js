function LoadPromiseHtml() {}

LoadPromiseHtml.prototype = {
  load(filename, dataParams = {}) {
    return fetch(filename, dataParams).then(function(response) {
      return response.text();
    });
  }
};

function LoadAsyncAwaitHtml() {}

LoadAsyncAwaitHtml.prototype = {
  load(filename, dataParams = {}) {

  }
};

export {
  LoadPromiseHtml,
  LoadAsyncAwaitHtml
};
