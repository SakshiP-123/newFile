function hello1(){
    fetch('http://localhost:3000/product', {
  method: 'POST',
  body: JSON.stringify({
    title: 'mumbai',
    body: 'maharashtra',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}