// Function to handle image download
function downloadImage(imageFile) {
    const link = document.createElement('a');
    link.href = imageFile;  // Set the href to the image URL
    link.download = imageFile;  // Trigger the download with the image filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);  // Clean up by removing the link element
}
