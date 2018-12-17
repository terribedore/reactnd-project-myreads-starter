import React from 'react';
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  //calls to API to get all the books that are on the shelves
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  // TODO: Shoot! Need something to pass the book and shelf into a function so it can be 'moved' to a shelf.
  onShelfChange = (book, shelf) => {
    book.shelf = shelf
    this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat([book])
    }))
    BooksAPI.update(book, shelf)
  }


  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div>
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
             <ListBooks books={this.state.books}
             onShelfChange={this.onShelfChange}/>
           </div>
        )}/>
        <Route path="/search" render={({ history }) => (
          <Search
          onShelfChange={this.onShelfChange}
          history={history}
          books={this.state.books}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
