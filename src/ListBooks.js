import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onDeleteBook: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render() {
    const { books, onDeleteBook } = this.props
    const { query } = this.state

    let showingBooks
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i') // the 'i' means 'ignore case'.
      showingBooks = books.filter((book) => match.test(book.name))
    } else {
      showingBooks = books
    }

      showingBooks.sort(sortBy('name'))

    return (
      <div className='list-books'>
        <div className='list-books-top'>
          <input
            className='search-books'
            type='text'
            placeholder='Search books'
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
          <Link
            to='/create'
            className='add-book'
          >Add Book</Link>
        </div>

        {showingBooks.length !== books.length && (
          <div className='showing-books'>
            <span>Now showing {showingBooks.length} of {books.length} total</span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        )}

        <ol className='book-list'>
          {showingBooks.map((book) => (
            <li key={book.id} className='book-list-item'>
              <div className='book-avatar' style={{
                backgroundImage: `url(${book.avatarURL})`
              }}/>
              <div className='book-details'>
                <p>{book.name}</p>
                <p>{book.email}</p>
              </div>
              <button onClick={() => onDeleteBook(book)} className='book-remove'>
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default ListBooks
