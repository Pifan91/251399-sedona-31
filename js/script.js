const searchForm = document.querySelector('.search__form');
const searchFormShowButton = document.querySelector('.search__button');

const hideForm = function () {
  searchForm.classList.add('search__form--hide');
}

const showForm = function (evt) {
  evt.preventDefault();
  searchForm.classList.toggle('search__form--hide');
}

document.addEventListener('DOMContentLoaded', hideForm);
searchFormShowButton.addEventListener('click', showForm);
