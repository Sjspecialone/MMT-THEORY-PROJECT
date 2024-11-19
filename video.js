document.addEventListener('DOMContentLoaded', () => {
    // Sample video data with titles and YouTube video links
    const videos = [
        {
            title: 'AI AND ML',
            videoSrc: 'https://www.youtube.com/embed/RXDduY2Vr0Q'
        },
        {
            title: 'Youth Club',
            videoSrc: 'https://www.youtube.com/embed/lbIEWI5Ums8'
        },
        {
            title: 'Robotics ',
            videoSrc: 'https://www.instagram.com/reel/C6dmF71JXlc/embed'
        },
        {
            title: 'Youth Club',
            videoSrc: 'https://www.youtube.com/embed/mKc4F5DrrTU'
        },
        {
            title: 'Optica',
            videoSrc: 'https://www.youtube.com/embed/gGmYlFXr4sQ'
        },
        
       
       
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

            // Add title and YouTube iframe
            videoItem.innerHTML = `
                <h3>${video.title}</h3>
                <iframe 
                    width="560" 
                    height="315" 
                    src="${video.videoSrc}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
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
