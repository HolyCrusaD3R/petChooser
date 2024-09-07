// let APIkey;

// fetch('/api-key')
//     .then(response => response.json())
//     .then(data => {
//         APIkey = data.APIkey;

//         console.log('API key: ', APIkey);
//     });

const petContainer = document.getElementById('petContainer');
const likeButton = document.getElementById('like');
const dislikeButton = document.getElementById('dislike');

const fetchCatPhoto = async () => {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search');
            const data = await response.json();
            const newCatImageUrl = data[0].url;
            petContainer.style.backgroundImage = `url(${newCatImageUrl})`;
            petContainer.style.backgroundSize = 'cover';  
            petContainer.style.backgroundPosition = 'center'; 
        } catch (error) {
            console.error('Error fetching cat photo:', error);
        }
    };

fetchCatPhoto();

likeButton.addEventListener('click', fetchCatPhoto);
dislikeButton.addEventListener('click', fetchCatPhoto);