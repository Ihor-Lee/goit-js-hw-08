"use strict";
const categoriesList = document.getElementById('categories');

const categoryItems = categoriesList.querySelectorAll('li.item');


console.log(`Number of categories: ${categoryItems.length}`);



categoryItems.forEach((categoryItem) => {

  const categoryName = categoryItem.querySelector('h2').textContent;

  const subCategoryItems = categoryItem.querySelectorAll('li');

  console.log(`category: ${categoryName}`);
  console.log(`elements: ${categoryName} ${subCategoryItems.length}`);
});