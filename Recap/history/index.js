
const data = {

};
//window.history.pushState(data, 'my title', 'orice1.html');

window.addEventListener('popstate', () => {
  console.log('Route has changed!');
});
