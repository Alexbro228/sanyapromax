// Array of image and audio files
const images = [
    'картинка1.jpg', 'картинка2.jpg', 'картинка3.jpg', 'картинка4.jpg',
    'картинка5.jpg', 'картинка6.jpg', 'картинка7.jpg', 'картинка8.jpg',
    'картинка9.jpg', 'картинка10.jpg'
];
const audios = [
    'аудио1.mp3', 'аудио2.mp3', 'аудио3.mp3', 'аудио4.mp3',
    'аудио5.mp3', 'аудио6.mp3', 'аудио7.mp3', 'аудио8.mp3',
    'аудио9.mp3', 'аудио10.mp3'
];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function showMedia() {
    // Get random image and audio
    const randomImage = getRandomElement(images);
    const randomAudio = getRandomElement(audios);

    // Get image and audio elements
    const imageElement = document.getElementById('displayed-image');
    const audioElement = document.getElementById('audio-player');

    // Set the source for the image and audio
    imageElement.src = randomImage;
    audioElement.src = randomAudio;

    // Show the image overlay
    document.getElementById('image-overlay').style.display = 'flex';

    // Play the audio
    audioElement.play();
}

function closeImage() {
    // Hide the image overlay
    document.getElementById('image-overlay').style.display = 'none';
}
