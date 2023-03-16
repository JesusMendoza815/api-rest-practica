import { getUsers, addFriend, getFriends, deleteFriend } from "./modules/requests.js";
import { createCard } from "./modules/createCard.js";
const sectionUsers = document.querySelector('#section-users');
const sectionFriends = document.querySelector('#section-friends');

const renderList = ( async(section) => {
  const users = await getUsers();
  for (const key in users.results) {
    let { picture, name, gender, dob, phone, id} = users.results[key];
    section.appendChild(createCard(picture.large, `${name.first} ${name.last}`, gender, dob.date, phone, 'Añadir amigo',id ,'user', addFriend, renderFriends, sectionFriends));
  }
});
renderList(sectionUsers);

const renderFriends = ( async(section) => {
  const users = await getFriends();
  for (const key in users.amigos) {
    let { imgUrl, name, gender, birth, phone} = users.amigos[key];
    section.appendChild(createCard(imgUrl, name, gender, birth, phone, 'Borrar amigo', key,'friend', deleteFriend));
  }
});
renderFriends(sectionFriends);