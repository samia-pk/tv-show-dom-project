
let allEpisodes;
function setup() {
  let allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
  allEpisodes.forEach(function(show){
    let divEl = document.createElement("div")
    let h5El = document.createElement("h5");
    let imgEl = document.createElement("img");
    let pEl = document.createElement("p");
    h5El.innerHTML = `${show.name} - S${String(show.season).padStart(2, "0") } E${String(show.number).padStart(2, "0")}`;
    imgEl.src = `${show.image.medium}`;
    pEl.innerHTML = `${show.summary}`;

    
    // adding classes to all elements
    divEl.classList = "summaryContainer"
    document.getElementById("root").appendChild(divEl);
    divEl.appendChild(h5El);
    divEl.appendChild(imgEl);
    divEl.appendChild(pEl);
  });
  let myMatchedList = document.getElementById("matchedList");
  let inputEl = document.getElementById("input");
  inputEl.addEventListener("input", function(){
    allEpisodes.map(function(episodes){
      if(episodes.name.includes(inputEl.value) === true){
      myMatchedList.appendChild(myList);
     myMatchedList.remove();
}
  })
  })
}
function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}
window.onload = setup;
