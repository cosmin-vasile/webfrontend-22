// const x = 1;

// var root = 'https://jsonplaceholder.typicode.com';
// fetch(root + '/posts/1', {
//  method: 'GET'
// }).then(function(response) {
//   return response.json();
// }).then(function(jsonResp) {
//   console.log(jsonResp);
// });

//console.log(x);


// const fetch = function(url, params) {
//   const myRequstMethod = new Promise(function(resolved, reject) {
//     //statementul
//     if (cond) {
//       resolved(props);
//     } else {
//       rejected(props);
//     }
//   });

//   return myRequstMethod;
// };



// fetch(url, params).then(function(props) {
//   //functionalitate
// }).catch(function(prop) {
//   //prindem erorile
//   //
// });


// fetch(url, params).then(function(props) {
//   //functionalitate
// }).catch(function(prop) {
//   //prindem erorile
// });

// fetch(url, params).then(function(props) {
//   //functionalitate
// }).catch(function(prop) {
//   //prindem erorile
// });


function LoadArticles() {

}

LoadArticles.prototype = {
  loadPromise() {
    fetch('https://crudcrud.com/api/c66fbd0159064b0e8d7e19db0a7b39c5/articles').then(function(response) { console.log(response) }).catch(() => {});
  },
  async loadAsyncAwait() {
    var response;
    try {
      response = await fetch('https://crudcrud.com/api/c66fbd0159064b0e8d7e19db0a7b39c5/articles');
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
  async loadAsyncAwaitExample() {
    var response;
    try {
      response = await new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve('promise rezolvat');
        }, 10000);
      });
      console.log('response', response);
    } catch(error) {
      console.log(error);
    }
  }
};


const articles = new LoadArticles();
//articles.loadPromise();
//articles.loadAsyncAwait();
articles.loadAsyncAwaitExample();
