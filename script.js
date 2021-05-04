const form = document.forms['search'];
const input = form['searchInput'];

input.value = "Search here"
form.addEventListener('submit', search, false)

input.addEventListener('focus', () => {
  if (input.value === 'Search here') {
    input.value = "";
  }
}, false);

input.addEventListener('blur', () => {
  if (input.value === '') {
    input.value === 'Search here';
  }
}, false)

function search(event) {
  alert(`You searched for ${input.value}`);
  event.preventDefault();
}