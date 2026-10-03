let lati = 5.558802684553042;
let longi = -0.19992187940438413;
const url = ` https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&unit=imperial&appid=780ed413c249c0742b8fac51b2bb2c7e `;


async function displayAccraapi() {
    try {
        let get_response = await fetch(url);
        if (get_response.ok) {
            let get_data = await get_response.json();
            console.log(get_data);
            display(get_data);
        }

        else {
            throw Error(await get_response.text);
        }
    }

    catch (error) {
        console.log(error);
    }
}
displayAccraapi();

function display(accra_data) {
    let weather_card = document.querySelector('.weather-card');
    let heading = document.createElement('h3');
    let image = document.createElement('img');
    let para = document.createElement('p');
    
    image.setAttribute('src', `https://openweathermap.org/img/w/${accra_data.weather[0].icon}.png`);
    image.setAttribute('alt', accra_data.weather[0].description);
    heading.innerHTML = accra_data.name;
    para.innerHTML = `Temperature: ${accra_data.main.temp} <br> Description: ${accra_data.weather[0].description}`;

    weather_card.appendChild(heading);
    weather_card.appendChild(image);
    weather_card.appendChild(para);
}


// async function display_data() {
//     try {
//         let get_members = await fetch('data/members.json');
//         if (get_members.ok) {
//             let get_info = await get_members.json();
//             console.log(get_info.company);
//             display_members(get_info.company);
//         }

//         else {
//             throw Error(await get_members.text());
//         }
//     }

//     catch (error) {
//         console.log(error);
//     }
// }

// display_data();

// function display_members(members) {
//     let members_card = document.querySelector('.members');
//     members.forEach(x => {
        
//         let sect = document.createElement('section');
//         sect.innerHTML = ;
//         members_card.appendChild(sect);
//     }
//     )

// }
    

import { items } from "../data/interest-items.mjs";
let interest_places = items.item;

interst_items(interest_places);

function interst_items(place) {
    let interest_card = document.querySelector('.interest-card');
    place.forEach(x => {
        console.log(x);
        let head = document.createElement('h2');
        let paragraph = document.createElement('p');
        let address = document.createElement('address');
        let figure = document.createElement('figure');
        let img = document.createElement('img');
        let card_btn = document.createElement('button');


        head.innerHTML = x['item-name'];
        address.innerHTML = x['item-address'];
        paragraph.innerHTML =x['item-description'];
        img.setAttribute("src", x['item-image']);
        img.setAttribute("alt", x['item-name']);
        card_btn.innerHTML = 'Learn More';
        paragraph.appendChild(card_btn);
        
        figure.appendChild(head);
        figure.appendChild(img);
        figure.appendChild(address);
        figure.appendChild(paragraph);
        figure.appendChild(card_btn);
        interest_card.appendChild(figure);


    })
}




