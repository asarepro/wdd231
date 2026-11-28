export default function user_info() {
    let userUrl = window.location.search;
    console.log(userUrl);
    let get_user_info = new URLSearchParams(userUrl);
    console.log(get_user_info.get('country'));

    let thanks_card = document.querySelector('.thanks');
    let head = document.createElement('h1');
    let text = document.createElement('p');
    let date = document.lastModified;
    head.innerHTML = `Welcome, ${get_user_info.get('first')}.`;
    text.innerHTML = `
    First Name: ${get_user_info.get('first')} <br><br>
    Last Name: ${get_user_info.get('last')} <br><br>
    Country Name: ${get_user_info.get('country')} <br><br>
    Message: ${get_user_info.get('message')} <br><br>
    Date: ${date};
    
    `;
    thanks_card.appendChild(head);
    thanks_card.appendChild(text);

}
