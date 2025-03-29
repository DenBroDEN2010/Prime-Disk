document.getElementById('search').addEventListener('keyup', function(){
    const query = this.value.toLowerCase();
    const items = document.querySelectorAll('.item');
    console.log(items)
    let hasResults = false;

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        const category = item.getAttribute('data-category').toLowerCase();
        if (text.includes(query) || category.includes(query)) {
            item.style.display = 'block';
            hasResults = true
        } else {
            item.style.display = 'none';
        }

    });

const noResultsMessage = document.getElementById('noResults');
if (hasResults) {
    noResultsMessage.style.display = 'none';
} else {
    noResultsMessage.style.display = 'block';
}
});
