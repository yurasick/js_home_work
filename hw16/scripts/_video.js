/* Підказки до назв властивостей в об'єкті:
    id - ідентифікатор фільму, id
    title - назва фільму
    year - рік фільму
    genres - жанри фільму
    mark - оцінка фільму
    time - час фільму в хвилинах
    trailer - посилання на трейлер на ютуб
    image - назва зображення з форматом
    type - тип фільму
*/

const videos = [
  {
    id: 1,
    title: 'Наяд',
    year: '2023',
    genres: 'драма, спорт',
    mark: '7.1',
    time: '121',
    trailer: 'https://www.youtube.com/watch?v=xyxekxcLqow',
    image: 'nyad.webp',
    type: 'повнометражний фільм'
  },
  {
    id: 2,
    title: 'Ілюзія безпеки',
    year: '2023',
    genres: 'драма, трилер',
    mark: '6.5',
    time: '139',
    trailer: 'https://www.youtube.com/watch?v=ZQrKxIY0cdM',
    image: 'illusion.webp',
    type: 'повнометражний фільм'
  },
  {
    id: 3,
    title: 'Наполеон',
    year: '2023',
    genres: 'драма, історичний',
    mark: '6.4',
    time: '158',
    trailer: 'https://www.youtube.com/watch?v=_vPpBViQ04o',
    image: 'napoleon.webp',
    type: 'повнометражний фільм'
  },
  {
    id: 4,
    title: 'Аквамен і Загублене королівство',
    year: '2023',
    genres: 'пригоди, фентезі',
    mark: '5.6',
    time: '115',
    trailer: 'https://www.youtube.com/watch?v=qCVpzmKrxZE',
    image: 'aquamen.webp',
    type: 'повнометражний фільм'
  },
  {
    id: 5,
    title: 'Оріон і Темряк',
    year: '2024',
    genres: 'пригоди, фентезі',
    mark: '6.4',
    time: '90',
    trailer: 'https://www.youtube.com/watch?v=f1udIcIVUr4',
    image: 'orion.webp',
    type: 'мультфільм'
  },
  {
    id: 6,
    title: 'Останні з нас',
    year: '2023',
    genres: 'жахи, фантастика',
    mark: '8.7',
    time: '55',
    trailer: 'https://www.youtube.com/watch?v=pUPxZpH6GEo',
    image: 'last-of-us.webp',
    type: 'серіал'
  },
  {
    id: 7,
    title: 'Агенція «Локвуд & К°»',
    year: '2023',
    genres: 'жахи, пригоди',
    mark: '7.4',
    time: '60',
    trailer: 'https://www.youtube.com/watch?v=fFxJ8cbBoXk',
    image: 'lockwood.webp',
    type: 'серіал'
  },
  {
    id: 8,
    title: 'Сьоґун / Шьоґун',
    year: '2024',
    genres: 'драма, пригоди',
    mark: '8.8',
    time: '43',
    trailer: 'https://www.youtube.com/watch?v=yAN5uspO_hk',
    image: 'shogun.webp',
    type: 'серіал'
  },
  {
    id: 9,
    title: 'Бідолашні створіння',
    year: '2024',
    genres: 'драма, фентезі',
    mark: '7.9',
    time: '141',
    trailer: 'https://www.youtube.com/watch?v=RlbR5N6veqw',
    image: 'poor-things.webp',
    type: 'повнометражний фільм'
  },
  {
    id: 10,
    title: 'Оппенгеймер',
    year: '2023',
    genres: 'драма, біографія',
    mark: '8.3',
    time: '180',
    trailer: 'https://www.youtube.com/watch?v=YkOkMHClI6s',
    image: 'oppenheimer.webp',
    type: 'повнометражний фільм'
  },
  {
    id: 11,
    title: 'Вбивці квіткової повні',
    year: '2023',
    genres: 'драма, вестерн',
    mark: '7.6',
    time: '206',
    trailer: 'https://www.youtube.com/watch?v=7T4ym2KtNwo',
    image: 'killers.webp',
    type: 'повнометражний фільм'
  },
  {
    id: 12,
    title: 'Проблема 3 тіл',
    year: '2024',
    genres: 'пригоди, фантастика',
    mark: '7.6',
    time: '45',
    trailer: 'https://www.youtube.com/watch?v=mogSbMD6EcY',
    image: 'body.webp',
    type: 'серіал'
  },
  {
    id: 13,
    title: 'Панда Кунг-Фу 4',
    year: '2024',
    genres: 'пригоди, фунтезі',
    mark: '6.3',
    time: '94',
    trailer: 'https://www.youtube.com/watch?v=mKDYE401t1s',
    image: 'panda.webp',
    type: 'мультфільм'
  },
  {
    id: 14,
    title: 'Перекладач',
    year: '2023',
    genres: 'драма, воєнний',
    mark: '7.5',
    time: '123',
    trailer: 'https://www.youtube.com/watch?v=Xk_i7e0Olxc',
    image: 'covenant.webp',
    type: 'повнометражний фільм'
  },
  {
    id: 15,
    title: 'Джентльмени',
    year: '2024',
    genres: 'комедія, бойовик',
    mark: '8.1',
    time: '45',
    trailer: 'https://www.youtube.com/watch?v=z9jGv6N3mvE',
    image: 'gentlemen.webp',
    type: 'серіал'
  },
  {
    id: 16,
    title: 'Темна Матерія',
    year: '2024',
    genres: 'драма, фантастика',
    mark: '7.3',
    time: '50',
    trailer: 'https://www.youtube.com/watch?v=j6ucGt_Xp14',
    image: 'dark-matter.webp',
    type: 'серіал'
  },
  {
    id: 17,
    title: 'Ґодзілла та Конґ: Нова імперія',
    year: '2024',
    genres: 'пригоди, фантастика',
    mark: '6.5',
    time: '115',
    trailer: 'https://www.youtube.com/watch?v=qdOAhIeX79Q',
    image: 'godzilla.webp',
    type: 'повнометражний фільм'
  },
  {
    id: 18,
    title: 'Барбі',
    year: '2023',
    genres: 'пригоди, драма',
    mark: '6.8',
    time: '114',
    trailer: 'https://www.youtube.com/watch?v=K9cibjqbcBQ',
    image: 'barbie.webp',
    type: 'повнометражний фільм'
  },
  {
    id: 19,
    title: 'Дюна: Частина друга / Дюна 2',
    year: '2024',
    genres: 'фантастика, драма',
    mark: '8.7',
    time: '166',
    trailer: 'https://www.youtube.com/watch?v=ZiGZxPo7fPY',
    image: 'dune-2.webp',
    type: 'повнометражний фільм'
  },
  {
    id: 20,
    title: 'Фолаут',
    year: '2024',
    genres: 'фантастика, драма',
    mark: '8.5',
    time: '50',
    trailer: 'https://www.youtube.com/watch?v=57_atR7oLh4',
    image: 'fallout.webp',
    type: 'серіал'
  },
  {
    id: 21,
    title: 'Ріплі',
    year: '2024',
    genres: 'трилер, драма',
    mark: '8.2',
    time: '45',
    trailer: 'https://www.youtube.com/watch?v=UE0byWSKp0E',
    image: 'ripli.webp',
    type: 'серіал'
  },
  {
    id: 22,
    title: 'Придорожній заклад',
    year: '2024',
    genres: 'екшн, триллер',
    mark: '6.2',
    time: '114',
    trailer: 'https://www.youtube.com/watch?v=TH7Or8PHLIE',
    image: 'road-house.webp',
    type: 'повнометражний фільм'
  },
  {
    id: 23,
    title: 'Вартові Галактики 3',
    year: '2023',
    genres: 'екшн, фантастика',
    mark: '7.9',
    time: '114',
    trailer: 'https://www.youtube.com/watch?v=phHhZrQokQQ',
    image: 'guardians.webp',
    type: 'повнометражний фільм'
  },
  {
    id: 24,
    title: 'Міграція',
    year: '2023',
    genres: 'пригоди, фентезі',
    mark: '6.7',
    time: '82',
    trailer: 'https://www.youtube.com/watch?v=AgaV5Dr4id8',
    image: 'migration.webp',
    type: 'мультфільм'
  },
  {
    id: 25,
    title: 'Зона інтересу',
    year: '2024',
    genres: 'драма, воєнний',
    mark: '7.5',
    time: '105',
    trailer: 'https://www.youtube.com/watch?v=QqSmQnC8dRs',
    image: 'zone.webp',
    type: 'повнометражний фільм'
  },
];

export default videos;