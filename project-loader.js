const projects = {
    "esp32-robot": {
        title: "ESP32 Robot Companion",
        description: "The ESP32 Robot Companion is a small interactive desk robot that uses an ESP32, an OLED display, a distance sensor, and a servo motor to show animated eyes, detect when a person comes near, and display useful information like time and weather. It connects to WiFi, reacts with greetings when someone approaches, and cycles through different display modes during normal operation. This project combines basic IoT, sensors, and simple animations to create a friendly and engaging robot companion.",
        image: "img/emo.jpeg",
        video: "video/emo.mp4",
        github: "https://github.com/PinToCode/esp32-robo-companion"
    }
    // Add more projects here in the future
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (projectId && projects[projectId]) {
        const project = projects[projectId];

        // Set Title
        document.getElementById('project-title').innerHTML = `${project.title} <span class="accent">Details</span>`;
        document.title = `${project.title} | Jerit Jose`;

        // Set Image
        const imgEl = document.getElementById('project-image');
        if (project.image) {
            imgEl.src = project.image;
            imgEl.style.display = 'block';
        }

        // Set Video
        const videoEl = document.getElementById('project-video');
        if (project.video) {
            videoEl.querySelector('source').src = project.video;
            videoEl.load(); // Reload video with new source
            videoEl.style.display = 'block';
        }

        // Set Description
        document.getElementById('project-desc').textContent = project.description;

        // Set GitHub Link
        const githubBtn = document.getElementById('project-github');
        if (project.github) {
            githubBtn.href = project.github;
            githubBtn.style.display = 'inline-block';
        }

    } else {
        document.getElementById('project-content').innerHTML = `
            <div style="text-align: center; margin-top: 50px;">
                <h2>Project Not Found</h2>
                <p>The project you are looking for does not exist or has been removed.</p>
            </div>
        `;
    }
});
