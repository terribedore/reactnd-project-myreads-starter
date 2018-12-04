[Intro Video](https://www.youtube.com/watch?v=PoAgT72QH-s)

## Project Overview
In the MyReads project, you'll create a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

## Get the Project
You have a few options to start developing this project:
* using your preconfigured Workspace
* forking and cloning the [start repository](https://github.com/udacity/reactnd-project-myreads-starter)
* starting from scratch with [Create React App](https://github.com/facebookincubator/create-react-app)

### Starter Code
Your Workspace is a development environment integrated into the Udacity Classroom and comes preconfigured with the MyReads project starter repository. You can both develop your entire in your Workspace as well as submit your project to be reviewed. For more information about your Workspace, check out the Your Project Workspace page.

If you'd like to work locally on your own computer, fork and clone the [starter repository](https://github.com/udacity/reactnd-project-myreads-starter).

The code in both your Workspace and the starter repo contains all the CSS and HTML markup that may be used but omits the React code that is required to complete the project. This can save you some time if you don't wish to write all the CSS and HTML from scratch. The provided code will demonstrate a static HTML page of the finished application, but with no interactive functionality.

### Starting from Scratch
If you'd like to start completely from scratch, you can use [Create React App](https://github.com/facebookincubator/create-react-app) to create a new React application. However, even if you create your own application from scratch you'll still need to use the `booksAPI.js` [file](https://github.com/udacity/reactnd-project-myreads-starter/blob/master/src/BooksAPI.js) that comes with the starter template to interact with the backend API. Instructions for using the API methods are provided in the `README` in the starter template repository.

### App Functionality
In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:
* Currently Reading
* Want to Read
* Read

[Image of HomePage](https://d17h27t6h515a5.cloudfront.net/topher/2017/May/590c0f12_react-project1-a/react-project1-a.png) **hidden `alt` text** The homepage of the MyReads App shows the title "MyReads" and then three shelves, which are named "Currently Reading," "Want to Read," and "Read." There are books on each shelf. Each book has a green circle in the bottom right-hand corner. The app has a green plus sign icon in the bottom right-hand corner. **end hidden text**

The static page (and your completed app) should look something like this.

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

[Image of Nav Requirements](https://d17h27t6h515a5.cloudfront.net/topher/2017/May/590c0f26_react-project1-b/react-project1-b.png) **hidden `alt` text** The green circle in the right-hand cover of the first book is clicked. You see a menu that has the following options: "Move To," "Currently Reading," "Want to Read," Read," and "None." The "Move to" option is greyed out. There is a checkmark next to the "Currently Reading" option. **end hidden text**

The main page also has a link to `/search`, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. To keep the interface consistent, you may consider re-using some of the code you used to display the books on the main page.

[Image of bookshelf](https://d17h27t6h515a5.cloudfront.net/topher/2017/December/5a3c22b9_screen-shot-2017-12-21-at-1.06.59-pm/screen-shot-2017-12-21-at-1.06.59-pm.png)
When a book is on a bookshelf, it should have the same state on both the main application page and the search page.

[Image of correct use of state](https://d17h27t6h515a5.cloudfront.net/topher/2017/July/595d48a9_correct-use-of-state/correct-use-of-state.gif)

The search page also has a link to `/` (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.

### Submission Requirements
Your submission should include all of the files necessary to install and launch your web application on a local web server. For files that include JSX, please refrain from using the `.jsx` extension (you can prefer `.js`). You can assume that your reviewer will have npm installed on their machine.

Even if you don't end up using the [starter code](https://github.com/udacity/myreads-starter), you should probably still use [Create React App](https://github.com/facebookincubator/create-react-app) to generate your submission since it's the easiest way to ensure you have everything the project reviewer will need to install and run your app.

### Considerations
The focus of this project is on writing functional React code, not on making the page beautiful. Feel free to spend some time working on your layout and CSS if you want to, but the goal for this project is correct functionality.
