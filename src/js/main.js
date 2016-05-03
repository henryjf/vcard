
import $ from 'jquery';

//accesses github token for more refreshes
// import token from './gihub-token';


// $.ajaxSetup({
//   headers: {
//     Authorization: "token " + token
//   }
// });

//this is a variable that contains a string which accesses the github api
var url = 'https://api.github.com/users/henryjf';

//using ajax to access info to be displayed on only a section of the web page
  $.getJSON(url).then (function (res) {
//the following variables locate each object in the gh-api needed for the project
    var name = res.name;
    var login = res.login;
    var email = res.email;
    var avatar = res.avatar_url;

//naming functions to pass info back to the page
    var html = cardTemplate(name, login, email);
    var pic = photoTemplate(avatar);
//using append to add info to the sidebar section of the page
    $('.sidebar').append(html);
    $('.sidebar').append(pic);

//using functions to pass parameters into our template literals where they access the specific info for our page
  function cardTemplate(name, login, email){
    return `

        <li>Name:  </li> ${name}<br>
        <li>Github URL  </li> <a href="#">${login}</a> <br>
        <li>Email: </li>  ${email}<br>
        <li>Company: </li> n/a <br>
        <li>Website:</li>  n/a
    `
};

function photoTemplate(photo) {
  return `
  <img src="${avatar}">
  `
};
});
