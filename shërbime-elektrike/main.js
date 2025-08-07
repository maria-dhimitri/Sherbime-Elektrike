document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    alert("Mesazhi u dërgua me sukses!");
    this.reset();
  });

  const form = document.getElementById('reviewForm');
  const reviewsContainer = document.getElementById('reviewsContainer');

  window.addEventListener('DOMContentLoaded', showReviews);

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !message) return;

    const review = { name, message };

    
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));

    
    addReviewToPage(review);

    form.reset();
  });

  function showReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviewsContainer.innerHTML = ''; 
    reviews.forEach(review => addReviewToPage(review));
  }

  function addReviewToPage(review) {
    const div = document.createElement('div');
    div.className = 'col-md-4';
    div.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title text-primary">${review.name}</h5>
          <p class="card-text">${review.message}</p>
        </div>
      </div>
    `;
    reviewsContainer.appendChild(div);
  }

