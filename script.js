// Get elements
const openModalBtn = document.getElementById('openModal');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');

// Open modal when button is clicked
openModalBtn.addEventListener('click', function() {
	modal.style.display = 'block';
});

// Close modal when close button is clicked
closeModalBtn.addEventListener('click', function() {
	modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', function(event) {
	if (event.target === modal) {
		modal.style.display = 'none';
	}
});
