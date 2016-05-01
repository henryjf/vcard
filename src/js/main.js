
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

    var html = cardTemplate(name, login, email);
    $('.container').append(html);
  });


  function cardTemplate(name, login, email){
    return `
      <ul>
        <li>Name: ${name}</li>
        <li>Github URL ${login}</li>
        <li>Email: ${email}</li>
        <li>Company: n/a</li>
        <li>Website: n/a</li>
      </ul>
    `
};
