
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

//var named card  the info function

  $.getJSON(url, function (res) {

    var name = res.name;
    // console.log(res.name);
    var login = res.login;
    // console.log(res.login);
    var email = res.email;
    // console.log(res.email);
    var avatar = res.avatar_url;
    // console.log(photo);

    var html = cardTemplate(name, login, email);
    var pic = photoTemplate(avatar);
    $('.container').append(html);
    $('.container').append(pic);


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
