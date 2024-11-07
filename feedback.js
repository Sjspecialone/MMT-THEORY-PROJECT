
        // Function to validate the form inputs
        function validateForm() {
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let rating = document.getElementById("rating").value;
            let comments = document.getElementById("comments").value;

            // Name validation
            if (name === "") {
                alert("Please enter your name.");
                return false;
            }

            // Email validation using regular expression
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email.");
                return false;
            }

            // Rating validation
            if (rating === "") {
                alert("Please select a rating.");
                return false;
            }

            // If all fields are validated, hide the form and show a thank you message
            document.getElementById("feedbackForm").style.display = "none";
            document.getElementById("thankYouMessage").style.display = "block";

            // Prevent the form from actually submitting (for demonstration)
            return false;
        }
    