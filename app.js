
  const searchBox = document.querySelector('#search_box');

const searchBtn = document.querySelector('#search_btn');
searchBtn.addEventListener('click', function () {
  
  fetch(`https://api.lyrics.ovh/suggest/${searchBox.value}`)
    .then(res => res.json())
    .then(data => getInfo(data.data))
  
  function getInfo(data) {
   let dataInfo =  data.map(title => title.title);
    console.log(dataInfo)
  }
        

  

  
})

 
// function getResult(artist, title) {
//   fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
//     .then(response => response.json())
//     .then(data => console.log(data));
// }