const categoriesList = document.querySelectorAll(`#categories .item`);
console.log(`Number of categories: ${categoriesList.length}`);
categoriesList.forEach(category => {
  const categoryTitle = category.querySelector(`h2`).textContent;
  const itemCount = category.querySelectorAll(`ul li`).length;
  console.log(`Сategory: ${categoryTitle}`);
  console.log(`Elements: ${itemCount}`);
});
