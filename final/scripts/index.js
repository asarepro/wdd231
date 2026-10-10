let menu_icon = document.querySelector('.menu-icon');
let menu_list = document.querySelector('.menu-list');
let currentyear = document.querySelector('#currentyear').innerHTML = `&copy; Jeffrey Langford Appiah Asare 🫡 Ghana`;
document.querySelector('#lastModified').innerHTML = document.lastModified;

menu_icon.addEventListener('click',
    () => {
        menu_icon.classList.toggle('menu-close');
        menu_list.classList.toggle('menu-list-close')
    }
)

// FETCH JSON
async function cloths() {
    try {

        let get_data = await fetch('cloths/cloths_data.json');

        if (get_data.ok) {
            // let get_data = await fetch('cloths/cloths_data.json');
            let get_cloths = await get_data.json();
            // console.log(get_cloths.fashion_clothes);
            display_cloths(get_cloths.fashion_clothes)
        }
        else {
            throw Error(await get_data.text);
        }
    }

    catch (error) {
        console.log(error);
    }
    
}

cloths();

function display_cloths(fashion) {
    let card_container = document.querySelector('.fashion_card');
    fashion.forEach(x => {
        let card = document.createElement('section');
        let heading = document.createElement('h1');
        let brand = document.createElement('h3');
        let description = document.createElement('p');
        let image = document.createElement('img');
        
        heading.innerHTML = x.name;
        brand.innerHTML = x.brand;
        description.innerHTML = `
        Price: ${x.currency}: ${x.price} <br>
        Date in: ${x.date_in} <br>
        Durability: ${x.durability} <br>
        Description: ${x.description}
        `

        image.setAttribute('src', x.image);
        image.setAttribute('alt', x.name);
        image.setAttribute('loading', "lazy");

        card.appendChild(heading);
        card.appendChild(brand);
        card.appendChild(image);
        card.appendChild(description);
        card_container.appendChild(card);
        

        console.log(x);
    })
}



import user_info from "./thanks.mjs";

// function user_info() {
//     let userUrl = window.location.search;
//     console.log(userUrl);
//     let get_user_info = new URLSearchParams(userUrl);
//     console.log(get_user_info.get('country'));

//     let thanks_card = document.querySelector('.thanks');
//     thanks_card.innerHTML = get_user_info.get('first')

// }

user_info();