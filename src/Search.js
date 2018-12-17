import React from 'react'
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class Search extends Component {
  state = {
    searchResults: []
  }

  //Keeps track of the value inputed.
  search = (e) => {
    const query = e.target.value;
    if (!query) {
      this.setState({searchResults: []});
      return;
    }

  //Call to the search API
  BooksAPI
    .search(query, 20)
    .then(searchResults => {
      if (!searchResults || searchResults.error) {
        this.setState({searchResults: []});
        return;
      }
      // map over the books returned from the search API, and check if they are on the shelf (or not)
      searchResults = searchResults.map((book) => {
        const bookOnShelf = this.props.books.find(b => b.id === book.id);
        book.shelf = bookOnShelf
        ? bookOnShelf.shelf
        : "none";
        return book;
      });

    this.setState({searchResults});

    });
  };

  render() {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            /*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
            */
            <input type="text" onChange={this.search} placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            // TODO: add book results here. Use `.map`?
            {this.state.searchResults &&
              this.state.searchResults.map((book, index) => (
                <li key={book.id + index}>
                <Book book={book}
                onShelfChange={this.props.onShelfChange}/>
                </li>
              ))}
          </ol>
        </div>
    </div>
    )}
}

export default Search
