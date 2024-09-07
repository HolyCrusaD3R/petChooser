// let APIkey;

// fetch('/api-key')
//     .then(response => response.json())
//     .then(data => {
//         APIkey = data.APIkey;

//         console.log('API key: ', APIkey);
//     });

const MAX_WIDTH_VW = 80;
const MAX_HEIGHT_VH = 70; 
const MIN_WIDTH_VW = 30;
const MIN_HEIGHT_VH = 30; 

const petContainer = document.getElementById('petContainer');
const likeButton = document.getElementById('like');
const dislikeButton = document.getElementById('dislike');

let likedPets = [];

const fetchCatPhoto = async (liked) => {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search');
            const data = await response.json();
            const newCatImageUrl = data[0].url;

            

            // const img = new Image();
            // img.src = newCatImageUrl;

            // img.onload = () => {
            //     const imgWidth = img.width;
            //     const imgHeight = img.height;

            //     const viewportWidth = window.innerWidth;
            //     const viewportHeight = window.innerHeight;

            //     const maxWidth = (MAX_WIDTH_VW / 100) * viewportWidth;
            //     const maxHeight = (MAX_HEIGHT_VH / 100) * viewportHeight;
            //     const minWidth = (MIN_WIDTH_VW / 100) * viewportWidth;
            //     const minHeight = (MIN_HEIGHT_VH / 100) * viewportHeight;

            //     const containerWidth = Math.min(Math.max(imgWidth, minWidth), maxWidth);
            //     const containerHeight = Math.min(Math.max(imgHeight, minHeight), maxHeight);

            //     petContainer.style.width = `${containerWidth}px`;
            //     petContainer.style.height = `${containerHeight}px`;
            //     petContainer.style.backgroundImage = `url(${newCatImageUrl})`;
            //     petContainer.style.backgroundSize = 'cover';  
            //     petContainer.style.backgroundPosition = 'center';  
            // };

            petContainer.style.backgroundImage = `url(${newCatImageUrl})`;
            petContainer.style.backgroundSize = 'cover';  
            petContainer.style.backgroundPosition = 'center'; 
            liked ? likedPets.push(newCatImageUrl) : null;
            console.log(likedPets);
        } catch (error) {
            console.error('Error fetching cat photo:', error);
        }
    };

fetchCatPhoto(false);

likeButton.addEventListener('click', () => fetchCatPhoto(true));
dislikeButton.addEventListener('click', () => fetchCatPhoto(false));