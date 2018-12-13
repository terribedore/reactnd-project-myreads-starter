import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import CreateBook from './CreateBook'
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

  // IDEA: Potentially change these into `moveBook` so can change category?
  /*
    removeContact = (contact) => {
      this.setState((state) => ({
        contacts: state.contacts.filter((c) => c.id !== contact.id)
      }))

      ContactsAPI.remove(contact)
    }
  createContact(contact) {
    ContactsAPI.create(contact).then(contact => {
      this.setState(state => ({
        contacts: state.contacts.concat([ contact ])
      }))
    })
  }
  */

  render() {
    return (
      <div className="app">
        //link to 'home page'
        <Route exact path='/' render={() => (
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
           // NOTE: add something here (`.state`) so changes show up!
        )}/>
        //link to 'search page'
        <Route path="/search" render={({ history }) => (
          // NOTE: add the search stuff here!
        )}/>
      </div>
    )
  }
}

// TODO: rework this as most is above. Potentially add all the info about the books into their OWN Component??
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
