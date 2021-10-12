const loadBuddy = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displayImage(data.results[0]))
}

const displayImage = image => {
    const imageContainer = document.getElementById('display-image');
    imageContainer.innerHTML = '';
    const div = document.createElement('div');

    div.innerHTML = `
        <img src="${image.picture.large}">
        <h1> Location :</h1>
        <h2> street-number:${image.location.street.number} , street-name: ${image.location.street.name}
        </h2>
        <h2> City: ${image.location.city}</h2>
        <h2> Coordinates-latitude: ${image.location.coordinates.latitude}, Coordinates-longitude: ${image.location.coordinates.longitude}
        <h2> Timezone-offset: ${image.location.timezone.offset}, Timezone-description: ${image.location.timezone.description}</h2>

    `

    div.classList.add('image');
    imageContainer.appendChild(div);
    console.log(image.location.coordinates.latitude);
}
// timezone: { offset: "-10:00", description: "Hawaii"