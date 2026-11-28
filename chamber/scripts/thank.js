let getuser_info = new URLSearchParams(window.location.search);

// let name = getuser_info.get('firstname');

let card = document.querySelector('.thanks-card');

let section = document.createElement('section');
let user_name = document.createElement('h1');
let para = document.createElement('p');
// let time = document.getElementById('timestamp').value = new Date().toISOString();

user_name.innerHTML = `welcome, ${getuser_info.get('firstname')}. 🫡`;
para.innerHTML = `First Name: ${getuser_info.get('firstname')} <br> Last Name: ${getuser_info.get('lastname')} <br> Eamil: ${getuser_info.get('useremail')}
 <br> Mobile Number: ${getuser_info.get('number')}  <br> Business Name: ${getuser_info.get('business-name')}`;


section.appendChild(user_name);
section.appendChild(para);
card.appendChild(section);

console.log(getuser_info.get('time'));



console.log(name)