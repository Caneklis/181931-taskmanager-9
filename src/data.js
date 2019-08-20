import {
  getRandomElement,
} from './utils';

export const TASK_COUNT = 8;

const description = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`
];

const days = {
  mo: Boolean(Math.round(Math.random())),
  tu: Boolean(Math.round(Math.random())),
  we: Boolean(Math.round(Math.random())),
  th: Boolean(Math.round(Math.random())),
  fr: Boolean(Math.round(Math.random())),
  sa: false,
  su: false
};

const tagsName = new Set([`homework`, `theory`, `practice`, `intensive`, `keks`]);

const colors = [`black`, `yellow`, `blue`, `green`, `pink`];

export const getTaskData = () => ({
  description: getRandomElement(description),
  dueDate: Date.now() + (-8 + Math.ceil(Math.random() * 15)) * 24 * 60 * 60 * 1000,
  repeatingDays: days,
  tags: tagsName,
  color: colors[Math.floor(Math.random() * 5)],
  isFavorite: Boolean(Math.round(Math.random())),
  isArchive: Boolean(Math.round(Math.random()))
});

export const tasks = Array.from(Array(TASK_COUNT)).map(getTaskData);

export const filters = [{
  title: `all`,
  count: tasks.length,
},
{
  title: `overdue`,
  count: tasks.filter((it) => it.dueDate < Date.now()).length,
},
{
  title: `today`,
  count: tasks.filter((it) => new Date(it.dueDate).toDateString() === new Date().toDateString()).length,
},
{
  title: `favorites`,
  count: tasks.filter((it) => it.isFavorite).length,
},
{
  title: `repeating`,
  count: tasks.filter((it) => Object.keys(it.repeatingDays).some((day) => it.repeatingDays[day])).length,
},
{
  title: `tags`,
  count: tasks.filter((it) => it.tags).length,
},
{
  title: `archive`,
  count: tasks.filter((it) => it.isArchive).length,
}
];
