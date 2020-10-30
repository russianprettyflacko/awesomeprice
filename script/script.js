// Навигация
let nav = document.querySelector('.navigation__elements');

function navSelect(event) {
    if (event.target.classList.contains('navigation__element-link')) {
        document.querySelector('.navigation__element-link_active').classList.remove('navigation__element-link_active');
        event.target.classList.add('navigation__element-link_active');
    }
}
nav.addEventListener('click', navSelect);

// Сортировка
let sort = document.querySelector('.sorting .selector__options');

function sortSelect(event) {
    if (event.target.classList.contains('selector__option')) {
        let selectedEl = document.querySelector('.selector__selected-element');

        if (selectedEl.textContent !== event.target.textContent) {
            selectedEl.textContent = event.target.textContent;
            selectedEl.setAttribute('data-sorting', event.target.getAttribute('data-sorting'));
        }
    }
}
sort.addEventListener('click', sortSelect);

// Фильтр
let filter = document.querySelector('.filters');

function checkboxSelect(event) {
    if (event.target.classList.contains('filter__checkbox')) {
        event.target.classList.toggle('filter__checkbox_checked');
    }
}
filter.addEventListener('click', checkboxSelect);

// Поиск бренда
let inputBrand = document.querySelector('#filter__search-element_brand');
let brandList = document.querySelectorAll('#filter__brand li');

inputBrand.oninput = function () {
    for (var i = 0; i < brandList.length; i++) {
        let brand = brandList[i];

        if(brand.textContent.toLowerCase().search(inputBrand.value)!=0){
            brand.classList.add('filter__checkbox_hide');
        }else{
            brand.classList.remove('filter__checkbox_hide');
        }
    }
};