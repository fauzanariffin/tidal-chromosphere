document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const categorySelect = document.getElementById('categorySelect');
    const talkCards = document.querySelectorAll('.talk-card');

    function filterTalks() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categorySelect.value.toLowerCase();

        talkCards.forEach(card => {
            const title = card.getAttribute('data-title').toLowerCase();
            const speakers = card.getAttribute('data-speakers').toLowerCase();
            const categories = card.getAttribute('data-category').toLowerCase();

            const matchesSearch = title.includes(searchTerm) || speakers.includes(searchTerm);
            const matchesCategory = selectedCategory === '' || categories.includes(selectedCategory);

            if (matchesSearch && matchesCategory) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', filterTalks);
    categorySelect.addEventListener('change', filterTalks);
});
