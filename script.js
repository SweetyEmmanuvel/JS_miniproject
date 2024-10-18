const videos = {
    shortvideos: [
        { title: 'Short-Form Videos', url:'Iman Gadhzi Tryout.mp4'},

    ],
    longvideos: [
        { title: 'Long-Form Videos', url: 'Talking head.mp4' },
    
    ],
    gamingvideos: [
        { title: 'Gaming Videos', url: 'Gaming Edited YT Video.mp4' },
        
    ],
    footballedits: [
        { title: 'Football Edits', url: 'Ronaldo vs messi.mp4' },
    ],
    ecommerceads: [
        { title: 'E-Commerce', url: '2nd Mockup Edit.mp4' },
    ],
    documentrystyle: [
        { title: 'Documentry Style', url: 'Mohak Mangal Documentry Style.mp4' },
    ],
    colorgrading: [
        { title: 'Color Grading', url: 'Color Grading.mp4' },
    ],
    animevideos: [
        { title: 'Anime Videos', url: 'Comp 1_1.mp4' },
    ],
    ads: [
        { title: 'Ads', url: 'Coca Cola Landing Page AD.mp4' },
    ],

};

function showVideos(category) {
    const videoDisplay = document.getElementById('videoDisplay');
    videoDisplay.innerHTML = '';

    if (category === 'all') {
        Object.values(videos).flat().forEach(video => {
            displayVideo(video);
        });
    } else {
        videos[category].forEach(video => {
            displayVideo(video);
        });
    }
}

function displayVideo(video) {
    const videoDisplay = document.getElementById('videoDisplay');
    const videoElement = document.createElement('div');
    videoElement.innerHTML = `
        <h3>${video.title}</h3>
        <video width="600" height="400" controls>
            <source src="${video.url}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
    videoDisplay.appendChild(videoElement);
}
