import {
  renderTemplate
} from './utils';
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

const mainControl = document.querySelector(`.main__control`);
const tasksLayout = document.querySelector(`.main`);

renderTemplate(mainControl, getMenuTemplate());
renderTemplate(tasksLayout, getLoadSearchTemplate());
renderTemplate(tasksLayout, getLoadFilterTemplate());
renderTemplate(tasksLayout, getLoadTasksContainerTemplate());

const board = document.querySelector(`.board__tasks`);

renderTemplate(board, getLoadAddTaskTemplate());
renderTemplate(board, getLoadTaskItemTemplate().repeat(3));
renderTemplate(board, getLoadMoreBtnTemplate());
