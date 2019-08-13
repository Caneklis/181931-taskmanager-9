import {
  renderTemplate
} from "./utils";
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
import {
  getTaskData
} from "./data";
const mainControl = document.querySelector(`.main__control`);
const tasksLayout = document.querySelector(`.main`);

renderTemplate(mainControl, getMenuTemplate());
renderTemplate(tasksLayout, getLoadSearchTemplate());
renderTemplate(tasksLayout, getLoadFilterTemplate());
renderTemplate(tasksLayout, getLoadTasksContainerTemplate());

const board = document.querySelector(`.board__tasks`);

const TASK_COUNT = 8;

renderTemplate(board, getLoadAddTaskTemplate());
renderTemplate(board, new Array(TASK_COUNT)
  .fill(``)
  .map(getTaskData)
  .map(getLoadTaskItemTemplate)
  .join(``));
renderTemplate(board, getLoadMoreBtnTemplate());
