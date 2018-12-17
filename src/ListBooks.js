import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'


//This is the way books will look on the home page!
function ListBooks(props){

  const { onShelfChange } = props;

  //Filter the books according to the shelf they belong to.
  const currentlyReading = props.books.filter((book) => book.shelf === 'currentlyReading')
  const wantToRead =props.books.filter((book) => book.shelf === 'wantToRead')
  const read =props.books.filter((book) => book.shelf === 'read')

  return(
    <div className="list-books">
      <div className="list-books-content">
        <div>
          <Shelf
            bookshelfTitle='Currently Reading'
            bookshelfBooks={currentlyReading}
            onShelfChange={onShelfChange}
          />

          <Shelf
            bookshelfTitle='Want to Read'
            bookshelfBooks={wantToRead}
            onShelfChange={onShelfChange}
          />

          <Shelf
            bookshelfTitle='Read'
            bookshelfBooks={read}
            onShelfChange={onShelfChange}
          />
        </div>
      </div>

      <div className="open-search">
          <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

export default ListBooks