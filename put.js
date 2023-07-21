function hello(){
    fetch('http://localhost:3000/product/2', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'Sakshi',
    body: 'Patil',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}