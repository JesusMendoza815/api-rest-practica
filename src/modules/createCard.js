export const createCard = (imgUrl, name, gender, birth, phone, btnTxt, id, userType, btnFunc, renderFunc = null, section = '') => {
  let div = document.createElement('div');
  let img = document.createElement('img');
  let divCardBody = document.createElement('div');
  let h5 = document.createElement('h5');
  let pGender = document.createElement('p');
  let pBirth = document.createElement('p');
  let pPhone = document.createElement('p');
  let button = document.createElement('button');

  div.classList.add(userType, 'text-white','card', 'm-1', 'col-3', 'p-1');
  img.classList.add('card-img-top');
  divCardBody.classList.add('card-body');
  h5.classList.add('card-title', 'text-primary', 'fs-6');
  pGender.classList.add('card-text');
  pBirth.classList.add('card-text');
  pPhone.classList.add('card-text');

  //BTN CONDICIONALES
  if (userType === 'user') {
    div.classList.add('bg-black');
    button.classList.add('btn','btn-dark');
    button.addEventListener('click', async () => {
      await btnFunc({imgUrl, name, gender, birth, phone})
      document.querySelectorAll('.friend').forEach(element => element.remove());
      renderFunc(section)});
  } else {
    div.classList.add('bg-dark');
    button.classList.add('btn','btn-outline-warning');
    button.addEventListener('click', (e) => {
      btnFunc(id);
      e.currentTarget.parentNode.remove()});
  }
  //BTN CONDICIONALES/

  div.setAttribute('id', id);
  img.setAttribute('src', imgUrl);
  h5.textContent = name;
  pGender.textContent = gender;
  pBirth.textContent = moment(birth).format('DD/MM/YYYY');
  pPhone.textContent = phone;
  button.textContent = btnTxt;

  divCardBody.append(h5, pGender, pBirth, pPhone);
  div.append(img , divCardBody, button);
  return div;
}