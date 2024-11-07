document.addEventListener('DOMContentLoaded', () => {
    // Sample video data with titles and Google Drive video links for 8 videos
    const videos = [
        {
            title: 'Parola - Opening Ceremony',
            videoSrc: 'https://drive.google.com/uc?export=view&id=your_file_id_1'
        },
        {
            title: 'Zencoder - Workshop',
            videoSrc: 'https://drive.google.com/uc?export=view&id=your_file_id_2'
        },
        {
            title: 'Robotics - Closing Ceremony',
            videoSrc: 'https://drive.google.com/uc?export=view&id=your_file_id_3'
        },
        {
            title: 'Zencoder - Workshop 2',
            videoSrc: 'https://drive.google.com/uc?export=view&id=your_file_id_4'
        },
        {
            title: 'Game Dev - Introduction',
            videoSrc: 'https://drive.google.com/uc?export=view&id=your_file_id_5'
        },
        {
            title: 'AI Robotics - Presentation',
            videoSrc: 'https://drive.google.com/uc?export=view&id=your_file_id_6'
        },
        {
            title: 'Robotics - Workshop Highlights',
            videoSrc: 'https://drive.google.com/uc?export=view&id=your_file_id_7'
        },
        {
            title: 'Zencoder - Final Demo',
            videoSrc: 'https://drive.google.com/uc?export=view&id=your_file_id_8'
        }
    ];

    const videoGrid = document.getElementById('video-grid');
    const eventFilter = document.getElementById('event-name');
    const applyFiltersButton = document.getElementById('apply-filters');

    // Function to render videos based on the event filter
    function renderVideos(filterEventName = '') {
        // Clear the video grid before rendering
        videoGrid.innerHTML = '';

        const filteredVideos = videos.filter(video => {
            return !filterEventName || video.title.includes(filterEventName);
        });

        filteredVideos.forEach(video => {
            // Create video item element
            const videoItem = document.createElement('div');
            videoItem.classList.add('video-item');

            // Add title and video player
            videoItem.innerHTML = `
                <h3>${video.title}</h3>
                <video controls>
                    <source src="${video.videoSrc}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;

            // Add the video item to the grid
            videoGrid.appendChild(videoItem);
        });
    }

    // Apply filter when the button is clicked
    applyFiltersButton.addEventListener('click', () => {
        const eventName = eventFilter.value;
        renderVideos(eventName);
    });

    // Initial rendering of all videos
    renderVideos();
});
