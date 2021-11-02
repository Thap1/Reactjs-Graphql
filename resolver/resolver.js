const { books, authors } = require("../data/static");
const resolves = {
  Query: {
    books: () => books,
    book: (parent, args) => books.find((book) => book.id == args.id),
    authors: () => authors,
    author: (parent, args) => authors.find((author) => author.id == args.id),
  },
  Book: {
    author: (parent, agrs) => {
      return authors.find(author => author.id === parent.id)
    }
  },
  Author: {
    book: (parent, agrs) => {
      return books.find(book => book.id === parent.id)
    }
  }
};

module.exports = resolves;
