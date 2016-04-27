// accesses jquery
import $ from 'jquery';

//accesses github token for more refreshes
import token from './gihub-token';


$.ajaxSetup({
  headers: {
    Authorization: "token " + token
  }
});

//this is a variable that contains a string which accesses the github api
var url = 'https://api.github.com/users/henryjf';

//var named card  the info function
var card = function(info){
  return `


    <ul>
      <li>Name:${info.name}</li>
      <li>Github URL${info.url}</li>
      <li>Email:${info.email}</li>
      <li>Company: n/a</li>
      <li>Website: n/a</li>
    </ul>
  `
  // console.log(info.Name);
};

//
$.getJSON(url, function (res) {
  


  console.log(res);

    var html = card(info);
    $('.container').append(html);
  });



// import $ from 'jquery';
//
// import token from './gihub-token';
//
// $.ajaxSetup({
//   headers: {
//     Authorization: "token " + token
//   }
// });
//
// var url = 'https://api.github.com/users/henryjf';
//
// var dataReq = $.getJSON(url);
//
// var card = function(info){
//   return `
//
//     <ul>
//       <li>Name:${info.name}</li>
//       <li>Github URL${info.url}</li>
//       <li>Email:${info.email}</li>
//       <li>Company:n/a</li>
//       <li>Website: n/a</li>
//     </ul>
//   `
//   // console.log(info.Name);
// };
//
// dataReq.then(function (response) {
//   response.forEach(function(text){
//     var html = card(text);
//     $('.container').append(html);
//   })
//   console.log(response);
// });
//
