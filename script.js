document.addEventListener('DOMContentLoaded', function() {
    const openModalBtn = document.getElementById('openModal');
    const modal = document.querySelector('.modal');
    const closeModalBtn = document.querySelector('.close-modal');

    openModalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
