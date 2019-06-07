import React, { Component } from 'react';

class NovelFinds extends Component {

  render () {
    return (
      <div className="project">
        <h1 className="project__title">Novel Finds</h1>
        <p className="project__description">{" Novel Finds is an app to keep track of what you're reading, what you've read and to join book clubs in you're area. Users can create an account or log in with their username and password, search for books using the Google Books API, leave reviews, favorite books, create a new book club or search for book clubs using their zip code. An individual Book club's page also includes a discussion forum where users can post comments. I was inspired to create this app since I always found it diffcult to remember books I've read or books I'd like to read. The book club feature allows book lovers to meet others in their town and discuss their favorite reads."}</p>
        <div className="project__link-container">
         <a target="_blank" rel="noopener noreferrer" className="project__link" href="https://github.com/mckenziefiege/book_club_frontend">GitHub</a>
         <a target="_blank" rel="noopener noreferrer" className="project__link" href="https://www.youtube.com/watch?v=wysrWkzBlaw&feature=youtu.be">Video Demo</a>
       </div>
       <div className="project__technology">
         <p>{"Ruby on Rails, React, Redux, CSS, Google Books API"}</p>
       </div>
        <div className="project__image-container">
          <img alt="Novel Finds 1" className="project__image" src="https://user-images.githubusercontent.com/38592156/52527615-b6ccbc00-2c99-11e9-9a35-ea3112946b60.png" />
          <img alt="Novel Finds 2" className="project__image" src="https://user-images.githubusercontent.com/38592156/52527609-b2080800-2c99-11e9-975f-46a84a74f569.png" />
          <img alt="Novel Finds 3" className="project__image" src="https://user-images.githubusercontent.com/38592156/52527610-b3393500-2c99-11e9-98bc-5a4befae2d97.png" />
          <img alt="Novel Finds 4" className="project__image" src="https://user-images.githubusercontent.com/38592156/52527613-b59b8f00-2c99-11e9-9d3e-087405803dcc.png" />
          <img alt="Novel Finds 5" className="project__image" src="https://user-images.githubusercontent.com/38592156/52527614-b6342580-2c99-11e9-9d15-1dfa9a4ffc78.png" />
        </div>
      </div>
    );
  }
}

export default NovelFinds;
