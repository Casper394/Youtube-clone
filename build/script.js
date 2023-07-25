const searchInputWrapper = document.querySelector('.search-input-wrapper');
const searchInput = document.querySelector('.search-input');
const searchInputLoupe = document.querySelector('.search-input-loupe');
const resetInputButton = document.querySelector('.reset-input-button');

resetInputButton.addEventListener('click', (e) => {
  e.preventDefault();
  searchInput.value = ''
  resetInputButton.classList.add('hidden')
})

searchInput.addEventListener('input', (e) => {
  if (e.target.value) {
    resetInputButton.classList.remove('hidden')
  } else {
    resetInputButton.classList.add('hidden')
  }
})

searchInput.addEventListener('focus', () => {
  searchInputLoupe.classList.remove('hidden')
  searchInputLoupe.classList.add('push-back')

  searchInputWrapper.classList.remove('rounded-l-full')
  searchInputWrapper.classList.add('border-l-0')
  searchInputWrapper.classList.remove('border-borderColor')
  searchInputWrapper.classList.add('border-blue-500')
})

searchInput.addEventListener('focusout', () => {
  searchInputLoupe.classList.add('hidden')
  searchInputLoupe.classList.remove('push-back')

  searchInputWrapper.classList.add('rounded-l-full')
  searchInputWrapper.classList.remove('border-l-0')
  searchInputWrapper.classList.remove('border-blue-500')
  searchInputWrapper.classList.add('border-borderColor')
})