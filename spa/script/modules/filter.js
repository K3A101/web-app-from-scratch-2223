// Variabele
export const searchInput = document.getElementById('search');
export let myArray = []



export function addTags(data) {
    const tagsContainer = document.querySelector('header section:nth-of-type(2) ul');

    let listItem = ''
data.map(item => {
  listItem = `<li>${item.tags}</li>`;

  tagsContainer.insertAdjacentHTML('beforeend', `${listItem}`)
});
}

// Als je op de button filter klikt dan open je het filter nmenu met tags
export function openFilter() {
  const menu = document.querySelector('header section:nth-of-type(2) ul');
  menu.classList.toggle('show-container');
}

// Als je op de serch icon klikt dan open je de searchbar
 export function showSearchBar() {
  const searchBar = document.getElementById('search');
  searchBar.classList.toggle('show-searchbar');

}

export function filterBy() {
  console.log('hello')
  const searchInput = document.getElementById('search');

  console.log(searchInput.value)
}