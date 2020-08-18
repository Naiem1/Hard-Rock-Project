
const searchBox = document.querySelector('#search_box');
const searchBtn = document.querySelector('#search_btn');



searchBtn.addEventListener('click', function () {
  // ===API FETCH FOR LYRICS INFO===
  fetch(`https://api.lyrics.ovh/suggest/${searchBox.value}`)
    .then(res => res.json())
    .then(data => {

      let parentElement = document.querySelector('.search-result');
      parentElement.innerHTML = ''

      for (let i = 0; i < 10; i++) {
        lyricsInfo = data.data[i];

        let lyricsTitle = lyricsInfo.title;
        let albumTitle  = lyricsInfo.album.title;
        let artistName = lyricsInfo.artist.name;

        
        // ===DISPLAY DYNAMIC LYRIC INFORMATION ===
        parentElement.innerHTML += `<div class="single-result row align-items-center my-3 p-3 ">
        <div class=" col-8 col-md-9">
            <h3 class="lyrics-name text-uppercase">${lyricsTitle}</h3>
            <p class=" lead"><span class="font ">Album by :</span> <span class="album_name font-italic">${albumTitle}</span></p>
            <p class="lead artist"> <span class="font">Artist Name :</span> <span class="artist_name font-italic">${artistName}</span> </p>
        </div>
        <div class=" col-4 col-md-3 text-md-right text-center">
            <button class="btn btn-success get_lyrics" onclick="getLyrics('${lyricsTitle}','${artistName}'); hide()">Get Lyrics</button>
        </div>
    </div>`     
        
   
        
      }
      
    })
  
    const ShowArea = document.querySelector('.search-result');
  ShowArea.style.display = 'block';
  
  const btn = document.querySelector('.single-lyrics').style.display = 'none'
})

// hide result area
function hide() {
  const hideArea = document.querySelector('.search-result');
  hideArea.style.display = 'none'
   
}




// === LYRICS GENERATOR FUNCTION===
function getLyrics(title, artist) {
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res => res.json())
      .then(data => {

        const songLyrics = data.lyrics;
        if (songLyrics !== undefined) {
          let singleLyrics = document.querySelector('.single-lyrics')
          singleLyrics.innerHTML = '';
          singleLyrics.innerHTML += `<h2 class="text-success mb-4 font-weight-bold">${title} - ${artist}</h2>
        <pre class="lyrics text-light"> ${songLyrics}</pre>`
          
          document.querySelector('.single-lyrics').style.display = 'block'
          
        } else {
          alert('No Lyrics Available')
        }
        
      });
  
      
}

// =============The End=================