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

const likedPetsContainer = document.getElementById('likedPetsContainer');

let likedPets = [];

const syncPetsPhotos = () => {
    const containerChildren = Array.from(likedPetsContainer.children);
    containerChildren.forEach(child => {
        if (!likedPets.includes(child.id)) {
            likedPetsContainer.removeChild(child);
        }
    });

    likedPets.forEach(petId => {
        if (!document.getElementById(petId)) {
        const newPetDiv = document.createElement('div');
        newPetDiv.id = petId;
        newPetDiv.classList.add('petContainer');
        newPetDiv.style.backgroundImage = `url(${petId})`;
        newPetDiv.style.backgroundSize = 'cover';
        newPetDiv.style.backgroundPosition = 'center';
        likedPetsContainer.appendChild(newPetDiv);
        }
    });
}

const fetchCatPhoto = async (liked) => {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search');
            const data = await response.json();
            const newCatImageUrl = data[0].url;

            

            petContainer.style.backgroundImage = `url(${newCatImageUrl})`;
            petContainer.style.backgroundSize = 'cover';  
            petContainer.style.backgroundPosition = 'center'; 
            liked ? likedPets.push(newCatImageUrl) : null;
            liked ? syncPetsPhotos() : null;
            console.log(likedPets);
        } catch (error) {
            console.error('Error fetching cat photo:', error);
        }
    };

fetchCatPhoto(false);

likeButton.addEventListener('click', () => fetchCatPhoto(true));
dislikeButton.addEventListener('click', () => fetchCatPhoto(false));