<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image and Audio Display</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background-color: #f8d8d8; /* Нежно розовый фон */
            text-align: center;
        }

        button {
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }

        #image-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            display: none;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.8);
            z-index: 1000;
        }

        #displayed-image {
            max-width: 100%;
            max-height: 100%;
            display: block;
        }

        #close-button {
            position: absolute;
            top: 20px;
            left: 20px;
            background-color: #fff;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            z-index: 1001;
        }

        #audio-container {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>Click the Button to Show Image and Play Audio</h1>
    <button onclick="showMedia()">Show Image and Play Audio</button>

    <div id="image-overlay">
        <button id="close-button" onclick="closeImage()">Close</button>
        <img id="displayed-image" src="" alt="Displayed Image">
    </div>

    <div id="audio-container">
        <audio id="audio-player" controls>
            Your browser does not support the audio element.
        </audio>
    </div>

    <script>
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
    </script>
</body>
</html>
