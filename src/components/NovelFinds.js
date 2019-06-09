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
          <img alt="Novel Finds 1" className="project__image" src="https://user-images.githubusercontent.com/38592156/59161262-5bc39e00-8aae-11e9-848e-0f21dbf38e74.png" />
          <img alt="Novel Finds 2" className="project__image" src="https://user-images.githubusercontent.com/38592156/59161259-58301700-8aae-11e9-944f-b165f302fbcf.png" />
          <img alt="Novel Finds 3" className="project__image" src="https://user-images.githubusercontent.com/38592156/59161258-56665380-8aae-11e9-9dba-f1d5b340859c.png" />
          <img alt="Novel Finds 4" className="project__image" src="https://user-images.githubusercontent.com/38592156/59161260-59614400-8aae-11e9-98a6-352ddf7572be.png" />
          <img alt="Novel Finds 5" className="project__image" src="https://user-images.githubusercontent.com/38592156/59161261-5a927100-8aae-11e9-912d-6c0c5806b301.png" />
        </div>
      </div>
    );
  }
}

export default NovelFinds;
