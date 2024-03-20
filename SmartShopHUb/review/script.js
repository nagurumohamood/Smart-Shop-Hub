// Function to submit a review
function submitReview() {
    const rating = document.getElementById('rating').value;
    const reviewText = document.getElementById('review').value;
  
    // Simulate sending data to a server (replace with actual logic)
    console.log(`Rating: ${rating}, Review: ${reviewText}`);
  
    // Update average rating display (replace with actual calculation logic)
    document.getElementById('average-rating').textContent = (parseFloat(document.getElementById('average-rating').textContent) + parseFloat(rating)) / 2;
  
    // Update star icons based on selected rating (optional)
    const starElements = document.querySelectorAll('.stars i');
    for (let i = 0; i < starElements.length; i++) {
      starElements[i].classList.remove('active');
      if (i < rating) {
        starElements[i].classList.add('active');
      }
    }
  
    // Add the review to the list dynamically (assuming basic structure)
    const reviewList = document.getElementById('review-list');
    const newReview = document.createElement('li');
    const reviewerName = "Anonymous"; // Replace with actual user name if available
    newReview.innerHTML = `<span class="reviewer">${reviewerName}</span> - ${reviewText}`;
    reviewList.appendChild(newReview);
  
    // Clear the review form after submission
    document.getElementById('review').value = "";
  }
  
  // Optional function to handle star rating selection (if using font icons)
  function handleStarClick(starElement) {
    const rating = starElement.dataset.rating;
    document.getElementById('rating').value = rating;
    const starElements = document.querySelectorAll('.stars i');
    for (let i = 0; i < starElements.length; i++) {
      starElements[i].classList.remove('active');
    }
    starElement.classList.add('active');
  }
  