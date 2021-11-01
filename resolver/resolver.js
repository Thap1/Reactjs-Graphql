const { books, authors } = require("../data/static");
const resolves = {
  Query: {
    books: () => books,
    book: (parent, args) => books.find((book) => book.id == args.id),
    authors: () => authors,
  },
};

module.exports = resolves;
