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

const filterTitles = [`All`, `Overdue`, `Today`, `Favorites`, `Repeating`];

export const getTaskData = () => ({
  description: description[Math.floor(Math.random() * description.length)],
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  repeatingDays: days,
  tags: tagsName,
  color: colors[Math.floor(Math.random() * 5)],
  isFavorite: Boolean(Math.round(Math.random())),
  isArchive: Boolean(Math.round(Math.random()))
});

export const getFilterData = () => ({
  title: filterTitles,
  count: {}
});
