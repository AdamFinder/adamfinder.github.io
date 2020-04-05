let myRequest = new Request("./guides.json")





const file = './guides.json';

fetch("myRequest")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (jsonObject) {
    const guides = jsonObject['guides'];
    console.table(jsonObject); // temporary checking for valid response and data parsing
    for (let i = 0; i < guides.length; i++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let div1 = document.createElement('div');
      let div2 = document.createElement('div');
      let image = document.createElement('img');

      h2.textContent = guides[i].name + ' ' + guides[i].lastname;
      div1.textContent = 'Years of Experience: ' + guides[i].years;
      div2.textContent = 'Email: ' + guides[i].email;
      image.setAttribute('src', guides[i].image);
      image.setAttribute('alt', guides[i].name + ' ' + guides[i].lastname + ' - ' + guides[i].order)

      card.appendChild(h2);
      card.appendChild(div1);
      card.appendChild(div2);
      card.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
    }
  });
