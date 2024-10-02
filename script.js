// API KEY: live_839uM2WXRvyVV6Y6rUnMA2PHE48jNpQflWtuJM74TCGNHwp8ARWxcfZglJq88LmV

function changeData(data){   
    fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_839uM2WXRvyVV6Y6rUnMA2PHE48jNpQflWtuJM74TCGNHwp8ARWxcfZglJq88LmV')
    .then(response => response.json())
    .then(data => {
    let catImage = data[1].url;
    console.log(catImage)
    document.getElementById('imageHolder').innerHTML = `<img class="cat-image" src="${catImage}" alt="a cat" />`;
} )
}

let catButton = document.getElementById('random-cat');

catButton.addEventListener('click', changeData)


// random-cat