export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
  searchResult: {
    link: 'https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    text: 'All Your staff',
    description: 'Click when it is done',
  },
  search: {
    defaultText: 'Filter all tasks',
    icon: 'search',
  },
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  info: {
    title: 'React, React Redux, React Router in action.',
    link: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?cs=srgb&dl=pexels-pixabay-356079.jpg&fm=jpg',
    list: {
      item_1: 'User can switch pages thanks to React Router',
      item_2: 'User can add columns thanks to React Redux',
      item_3: 'User can add lists thanks to React Redux',
      item_4: 'User can add cards thanks to React Redux',
      item_5: 'User is able to delate columns and cards thanks to React Redux',
      item_6: 'User can Drag n Drop cards in different columns and update state, thanks to React Redux',
      item_7: 'User can search cards and display matching ones in each column',
    },
  },
  faq: {
    link: 'https://images.pexels.com/photos/221164/pexels-photo-221164.jpeg?cs=srgb&dl=pexels-pixabay-221164.jpg&fm=jpg',
    title: 'FAQ',
    content: 'test content',
  },
  header: {
    logo: 'american-sign-language-interpreting',
  },
};

export const pageContents = {
  title: 'TO-DO',
  subtitle: '',
};

export const listData = {
  key: 0,
  title: 'Things to do <sup>soon!</sup>',
  description: 'Lets keep it organised!',
  link: 'https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  columns: [
    {
      key: 0,
      title: 'Job duties',
      icon: 'building',
      cards: [
        {
          key: 0,
          title: 'Arrange team meeting',
        },
        {
          key: 1,
          title: 'Do sales presentation',
        },
      ],
    },
    {
      key: 1,
      title: 'Home duties',
      icon: 'home',
      cards: [
        {
          key: 0,
          title: 'Cook Pizza',
        },
        {
          key: 1,
          title: 'Buy dogs food',
        },
      ],
    },
    {
      key: 2,
      title: 'Others',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'Play new game',
        },
        {
          key: 1,
          title: 'Read book',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    link: 'https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
    index: 0,
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
    index: 1,
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
    index: 0,
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
    index: 1,
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
    index: 0,
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
    index: 1,
  },
];

const initialStoreData = {
  setting: {...settings},
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;