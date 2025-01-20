// Function to toggle image sources
function toggleImages(changeToNew) {
  const images = document.querySelectorAll('.toggle-image');

  images.forEach(image => {
      if (changeToNew) {
          image.src = image.getAttribute('normal-image');
      } else {
          image.src = image.getAttribute('depth-image');
      }
  });
}

// Toggle switch event listener
document.getElementById('normalSwitch').addEventListener('change', function() {
  toggleImages(this.checked);
});
