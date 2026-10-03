let dark_mode = document.querySelector('.moon-toggel');
let dark_mode_2 = document.querySelector('.moon-toggel-2');
let menu_btn = document.querySelector('.menu-icon');
let main_body = document.querySelector('.main-body');
let menu_list = document.querySelector('.menu-list');

dark_mode.addEventListener('click',
    () => {
        dark_mode.classList.toggle('sun-toggel');
        main_body.classList.toggle('mode');
        dark_mode.style.backgroundColor = 'white';
        document.querySelectorAll('a').forEach(a => a.style.color = 'brown');
        menu_btn.style.backgroundColor = 'white';
        menu_list.style.backgroundColor = 'white';
    }
),
    
dark_mode_2.addEventListener('click',
    () => {
        dark_mode_2.classList.toggle('sun-toggel-2');
        main_body.classList.toggle('mode');
        dark_mode_2.style.backgroundColor = 'white';
        document.querySelectorAll('a').forEach(a => a.style.color = 'black');
        menu_btn.style.backgroundColor = 'white';
        menu_list.style.backgroundColor = 'white';
        // document.querySelector('.site-head').style.color = 'black';

    }
)    


menu_btn.addEventListener('click',
    () => {
        menu_btn.classList.toggle('close-icon');
        menu_list.classList.toggle('open-menu');
        // document.querySelectorAll('a').forEach(a => a.style.color = 'black');
    }
)


// fetching
let card = document.querySelector('.card');

async function getdata() {
    let member_data = await fetch('data/members.json');
    let respond = await member_data.json();
    console.log(respond.company);
    display_data(respond.company);
    displayspotlight(respond.company);
}
getdata();

function display_data(members) {
    card.innerHTML = '';
    members.forEach(x => {
        let divide = document.createElement('div');
        divide.setAttribute('class', 'card-container');
        let section = document.createElement('section');
        let head = document.createElement('h2');
        let span = document.createElement('span');
        let para = document.createElement('p');
        let link = document.createElement('a');
        let img = document.createElement('img');

        head.innerHTML = x.company_name;
        span.innerHTML = x.company_address;

        para.innerHTML = `Company: ${x.industry} <br>Phone: ${x.company_phone} <br>Membership Level: ${x.membership_level}  <br> Founded: ${x.founded} <br>`;
        link.setAttribute('href', x.company_website);
        link.textContent = x.company_website;
        img.setAttribute('src', x.image_file);
        img.setAttribute('alt', 'company-image');

        section.appendChild(head);
        section.appendChild(span);
        section.appendChild(divide);
        divide.appendChild(img);
        divide.appendChild(para);
        para.append(link);
        card.appendChild(section);

        
    })

   
}
    


let copyright = document.querySelector('#currentyear');
copyright.innerHTML =
    `&copy; ${new Date().getFullYear()} | Jeffrey Langford Appiah Asare |Ghana`;


const date = document.querySelector('#lastModified').innerHTML = document.lastModified;



// thanks page================

const user_url = window.location.search;
console.log(user_url)
let user_info = new URLSearchParams(user_url);
const thanks_card = document.querySelector('.thanks-card');

thanks_card.innerHTML = `
    <h1>Welcome, Mr.${user_info.get("lastname")}. <br> Thank You</h1>
    <p>First Name: ${user_info.get('firstname')}      <br><br>   Last Name: ${user_info.get("lastname")}</p>
    <p>Email: ${user_info.get("useremail")} <br><br> Mobile Number: ${user_info.get('number')}</p>
    <p>Business Name: ${user_info.get('business-name')}   <br><br> Time:${document.lastModified}</p>

`;




// let timestamp = document.querySelector('#time').value = new Date().toLocaleString("en-US");

// console.log(timestamp);


import { items } from "../data/interest-items.mjs";
console.log(items);

console.log('jnbjsfkd');