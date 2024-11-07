
        function showSection(sectionId) {
            // Hide all sections
            var sections = document.querySelectorAll('.section');
            sections.forEach(function(section) {
                section.classList.remove('active');
            });

            // Show the selected section
            var selectedSection = document.getElementById(sectionId);
            selectedSection.classList.add('active');
        }

        // Image Slider functionality
        let currentSlide = 0;

        function showSlide(index) {
            const slides = document.querySelectorAll('.slider img');
            const totalSlides = slides.length;
            if (index >= totalSlides) {
                currentSlide = 0; // Loop back to the first image
            } else if (index < 0) {
                currentSlide = totalSlides - 1; // Go to the last image
            } else {
                currentSlide = index;
            }

            // Move the slider to the current image
            const slider = document.querySelector('.slider');
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        // Auto slide every 3 seconds
        setInterval(nextSlide, 3000); // Change image every 3 seconds
    
