export const renderTemplate = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};
export const renderListTemplate = (container, list, template, place = `beforeEnd`) => container.insertAdjacentHTML(place, list.map(template).join(``));

export const getRandomInteger = (max, min = 0) => Math.floor(min + Math.random() * (max - min + 1));

export const getRandomArrayIndex = (array) => getRandomInteger(array.length - 1);

export const getRandomElement = (array) => array[getRandomArrayIndex(array)];
