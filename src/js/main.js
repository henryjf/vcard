import $ from 'jquery';

import token from './gihub-token';

$.ajaxSetup({
  headers: {
    Authorization: "token " + token
  }
});

var url = 'https://api.github.com/users/henryjf';

$.getJSON(url, function (res) {
  console.log(res);
});

// var card = function(info){
//   return `
//   <header>
//     Jefferson Freeman Henry
//   </header>
//
//   <div class="sidebar">
//     <h3>The Basics</h3>
//     <ul>
//       <li>Name</li>
//       <li>Github URL</li>
//       <li>Email:</li>
//       <li>Company:</li>
//       <li>Website:</li>
//     </ul>
//   </div>`
// };
// console.log(card);
