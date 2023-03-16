const BASE_URL_USERS = 'https://randomuser.me/api/?results=50&inc=gender,name,nat,dob,picture,phone,id';
const Base_URL_FRIENDS = 'https://kodemia-24g-default-rtdb.firebaseio.com';

const getUsers = ( async() => {
  const response = await fetch(BASE_URL_USERS);
  const data = response.json();
  return data;
});

const addFriend = ( async(friendInfo) => {
  const response = await fetch(`${Base_URL_FRIENDS}/miprueba/amigos/.json`,
    {
      method: 'POST',
      body: JSON.stringify(friendInfo)
    }
  );
  const data = response.json();
  return data;
});

const getFriends = ( async() => {
  const response = await fetch(`${Base_URL_FRIENDS}/miprueba/.json`);
  const data = response.json();
  return data;
});

const deleteFriend = ( async(id) => {
  const response = await fetch(`${Base_URL_FRIENDS}/miprueba/amigos/${id}/.json`,
  {
    method: 'DELETE'
  });
  const data = await response.json();
  return data;
});
export { getUsers, addFriend, getFriends , deleteFriend }; 