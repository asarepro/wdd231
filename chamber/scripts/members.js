// // ===========================
// // MEMBER SPOTLIGHTS
// // ===========================

// async function getMembers() {
//     try {
//         const response = await fetch('data/members.json');

//         if (!response.ok) {
//             throw new Error(await response.text());
//         }

//         const data = await response.json();

//         displaySpotlights(data);

//     } catch (error) {
//         console.error(error);
//     }
// }

// function displaySpotlights(members) {

//     const spotlightContainer =
//         document.querySelector(".members");

//     spotlightContainer.innerHTML = "";

//     const qualifiedMembers = members.filter(member =>
//         member.membership_level === "Gold" ||
//         member.membership_level === "Silver"
//     );

//     const shuffled =
//         qualifiedMembers.sort(() => Math.random() - 0.5);

//     const selected =
//         shuffled.slice(0, 3);

//     selected.forEach(member => {

//         const card = document.createElement("section");

//         card.classList.add("spotlight-card");

//         card.innerHTML = `
//       <img
//         src="${member.image_file}"
//         alt="${member.company_name} logo"
//         loading="lazy"
//       >

//       <h3>${member.company_name}</h3>

//       <p><strong>Phone:</strong> ${member.company_phone}</p>

//       <p><strong>Address:</strong> ${member.company_address}</p>

//       <p>
//         <a href="${member.company_website}" target="_blank">
//           Website
//         </a>
//       </p>

//       <p>
//         <strong>Membership:</strong>
//         ${member.membership_level}
//       </p>
//     `;

//         spotlightContainer.appendChild(card);
//     });
// }

// getMembers();