import {
  getMenuTemplate
} from "./components/menu-template";
import {
  getLoadSearchTemplate
} from "./components/search-template";
import {
  getLoadFilterTemplate
} from "./components/filter-template";
import {
  getLoadTasksContainerTemplate
} from "./components/tasks-container-template";
import {
  getLoadTaskItemTemplate
} from "./components/task-item-template";
import {
  getLoadAddTaskTemplate
} from "./components/task-form-template";
import {
  getLoadMoreBtnTemplate
} from "./components/task-btn-template";

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const mainControl = document.querySelector(`.main__control`);
const tasksLayout = document.querySelector(`.main`);

renderTemplate(mainControl, getMenuTemplate(), `beforeend`);
renderTemplate(tasksLayout, getLoadSearchTemplate(), `beforeend`);
renderTemplate(tasksLayout, getLoadFilterTemplate(), `beforeend`);
renderTemplate(tasksLayout, getLoadTasksContainerTemplate(), `beforeend`);

const board = document.querySelector(`.board__tasks`);

renderTemplate(board, getLoadAddTaskTemplate(), `beforeend`);
renderTemplate(board, getLoadTaskItemTemplate().repeat(3), `beforeend`);
renderTemplate(board, getLoadMoreBtnTemplate(), `beforeend`);
