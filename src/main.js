import {
  renderListTemplate,
  renderTemplate
} from "./utils";
import {
  getMenuTemplate
} from "./components/menu-template";
import {
  getLoadSearchTemplate
} from "./components/search-template";
import {
  getLoadFilterListTemplate
} from './components/filter-list-template';
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
  TASK_COUNT,
  tasks,
  filters
} from "./data";

const tasksArr = tasks.slice();
const START_COUNT_TASK = 4;


const mainControl = document.querySelector(`.main__control`);
const tasksLayout = document.querySelector(`.main`);

renderTemplate(mainControl, getMenuTemplate());
renderTemplate(tasksLayout, getLoadSearchTemplate());
renderTemplate(tasksLayout, getLoadFilterListTemplate());

const filterList = document.querySelector(`.main__filter`);
renderListTemplate(filterList, filters, getLoadFilterTemplate);

renderTemplate(tasksLayout, getLoadTasksContainerTemplate());

const board = document.querySelector(`.board__tasks`);

renderTemplate(board, getLoadAddTaskTemplate(tasksArr.shift()), `afterBegin`);

renderListTemplate(board, tasksArr.splice(0, START_COUNT_TASK), getLoadTaskItemTemplate);

renderTemplate(board, getLoadMoreBtnTemplate(), `afterend`);

const loadMoreBtn = document.querySelector(`.load-more`);

const renderMoreTasks = () => {
  if (tasksArr.length) {
    renderListTemplate(board, tasksArr.splice(0, TASK_COUNT), getLoadTaskItemTemplate);

    if (!tasksArr.length) {
      loadMoreBtn.style.display = `none`;
      loadMoreBtn.removeEventListener(`click`, renderMoreTasks);
    }
  }
};

loadMoreBtn.addEventListener(`click`, renderMoreTasks);
