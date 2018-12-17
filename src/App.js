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
