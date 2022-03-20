/* ================================================================= */
/*                              Read Data                            */
/* ================================================================= */
// Read Data Syntax
// fetch(url)
// .then(function(response){return response.json();})
// .then(function(data){document.write(data);})
// .catch(function(error){console.log(error);})


/*
// fetch / read Data
fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response){return response.json();})
.then(function(data){
  for(var x in data){
    document.write(`${data[x].name} - ${data[x].email}<br>`);
  }
})
.catch(function(error){console.log('Can not fetch data');});
*/

/* ================================================================= */
/*                              Write Data                           */
/* ================================================================= */

/*
// Insert / Update / Delete Syntax
fetch(file/url, {
  method: "POST", //For update data "PUT", for delete data "DELETE", to read "GET"
  body: data, //This is the data which I wanna save to server (Form Data/ JSON Data/ Text)
  header: {   // Determines which data types are passing through body
    'Content-Type' : 'application/json',
    //For form Data
    //'Content-Type' : 'application/x-www-form-urlencoded'
  },
})
.then(function(response){return response.json();})
.then(function(data){document.write(data);})
.catch(function(error){document.write(error)});
*/


// For Nomal Data Insert by object
// fetch("https://jsonplaceholder.typicode.com/posts",{
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'Hello',
//     body: 'Totalllll',
//     userId: 1,
//   }),
//   header: {
//     'Content-Type' : 'application/json',
//   }, 
// })
// .then(function(response){return response.json();})
// .then(function(data){console.log(data);});


// For Form Data
// fetch("https://jsonplaceholder.typicode.com/posts",{
//   method: 'POST',
//   body: new FormData(document.getElementById("myForm")),
//   header: {
//     'Content-Type' : 'application/x-www-form-urlencoded',
//   }, 
// })
// .then(function(response){return response.json();})
// .then(function(data){console.log(data);});