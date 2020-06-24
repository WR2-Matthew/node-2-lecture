let movies = [
  { id: 1, name: 'Star Wars', rating: 5 },
  { id: 2, name: 'Harry Potter', rating: 4 },
  { id: 3, name: 'American Gangster', rating: 5 }
];
let id = 4

module.exports = {
  getMovies: (req, res) => {
    res.status(200).send(movies)
  }
}