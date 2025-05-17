const books = [
  {
    title: "The Silent River",
    genre: "Fiction",
    publishDate: "2020-05-10",
    edition: "1st"
  },
  {
    title: "Exploring Space",
    genre: "Science",
    publishDate: "2018-11-22",
    edition: "2nd"
  },
  {
    title: "The Ancient War",
    genre: "History",
    publishDate: "2016-07-15",
    edition: "3rd"
  },
  {
    title: "Mystery of the Forest",
    genre: "Fiction",
    publishDate: "2021-01-05",
    edition: "1st"
  },
  {
    title: "Quantum Basics",
    genre: "Science",
    publishDate: "2019-04-18",
    edition: "2nd"
  },
  {
    title: "Chronicles of Empire",
    genre: "History",
    publishDate: "2017-09-30",
    edition: "4th"
  },
  {
    title: "Beyond Imagination",
    genre: "Fiction",
    publishDate: "2023-02-12",
    edition: "1st"
  },
  {
    title: "Inside the Atom",
    genre: "Science",
    publishDate: "2020-06-09",
    edition: "3rd"
  },
  {
    title: "Rise and Fall of Kingdoms",
    genre: "History",
    publishDate: "2015-12-01",
    edition: "5th"
  },
  {
    title: "Tales from the Unknown",
    genre: "Fiction",
    publishDate: "2022-08-25",
    edition: "1st"
  }
];

console.log(books.filter((book)=> book.genre==='Fiction'));
