import React,{useState} from 'react';
import '../assets/Css/Review.css';

function Review() {
  const [searchTerm, setSearchTerm] = useState('');
  const [allBooks] = useState([
    {
      title: 'the last true love story',
      description: 'The Last True Love Story is a tender story that is as much about the meaning of family as it is about falling in love.',
      rating: 5,
      reviews: 1200,
      image:'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781481429894/the-last-true-love-story-9781481429894_lg.jpg'
    },
    {
      title: 'like a love story',
      description: 'A wonderful book about something interesting.',
      rating: 4.5,
      reviews: 1200,
      image:'https://richincolor.com/wp-content/uploads/2019/01/lovestory.jpg'
    },
    {
      title: 'body in the wood',
      description: 'He Body in the Woods was exciting and original. Realistic in detail, from the crime, to the secret lives and insecurities of today\'s teens.',
      rating: 4,
      reviews: 500,
    },
    {
      title: 'because i am yours',
      description: 'Claire Contreras is a New York Times Best Selling Author. Her books range from romantic suspense to contemporary romance.',
      rating: 4.8,
      reviews: 3000,
    },
  ]);

  const [searchedBook, setSearchedBook] = useState(null);

  const handleSearch = () => {
    const foundBook = allBooks.find(book => book.title.toLowerCase() === searchTerm.toLowerCase());

    // Update the state with the searched book details
    setSearchedBook(foundBook);
  };
  return(
      <>  
      <div className="search">
        <input
          className="find"
          type="text"
          placeholder="Type the name of the book"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="button" className="mis" onClick={handleSearch}>
          SEARCH
        </button>
      </div>

      {searchedBook && (
        <div className="wrapper">
          <div className="col" onTouchStart="this.classList.toggle('hover');">
            <div className="container">
              <div className="front">
                <div className="inner">
                  <div className={`hi`}>
                    {/* <p>{searchedBook.title}</p> */}
                    {/* <span>{searchedBook.author}</span> */}
                  </div>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>{searchedBook.description}</p>
                  <p className="fa-sharp fa-solid fa-star">{searchedBook.rating}</p>
                  <p>{searchedBook.reviews} Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <Sidebar/>  */}
        {/* <div className="search">
        <input className="find" type="text" placeholder="Type the name of book"/>
        <button type="submit" class="mis">SEARCH</button>
          </div>  */}
         <div>
         <div class="wrapper">
  <h1>BoOk ThAt StOlEd YoUr HeArTs</h1>
  <div class="cols">
    <div class="col" ontouchstart="this.classList.toggle('hover');">
      <div class="container">
        <div class="front">
          <div class="inner">
            <div class="hi">
             <p></p>
            <span></span>
            </div>
          </div>
        </div>
        <div class="back">
          <div class="inner">
            <p>“The Last True Love Story is a tender multi-generational story that's as much about the meaning of family as it is about falling in love".</p>
            <p class="fa-sharp fa-solid fa-star"></p>
            <p class="fa-sharp fa-solid fa-star"></p>
            <p class="fa-sharp fa-solid fa-star"></p>
            <p class="fa-sharp fa-solid fa-star"></p>
            <p class="fa-sharp fa-solid fa-star"> 1,200</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col" ontouchstart="this.classList.toggle('hover');">
      <div class="container">
        <div class="front">
          <div class="inner">
            <div className="hi1">

            </div>
          </div>
        </div>
        <div class="back">
          <div class="inner">
            <p>"Reza is an Iranian boy . He’s terrified that someone will guess the truth he can barely acknowledge about himself."</p>
            <p class="fa-sharp fa-solid fa-star"></p>
            <p class="fa-sharp fa-solid fa-star"></p>
            <p class="fa-sharp fa-solid fa-star"></p>
            {/* <p class="fa-sharp fa-solid fa-star"></p> */}
            <p class="fa-sharp fa-solid fa-star"> 800</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col" ontouchstart="this.classList.toggle('hover');">
      <div class="container">
        <div class="front">
          <div class="inner">
            <div class="hi2">
            </div>
            {/* <p>Strizzes</p>
            <span>Lorem ipsum</span> */}
          </div>
        </div>
        <div class="back">
          <div class="inner">
            <p>He Body in the Woods was exciting and original. Realistic in detail, from the crime, to the secret lives and insecurities of today's teens."</p> 
            <p class="fa-sharp fa-solid fa-star"></p>
            <p class="fa-sharp fa-solid fa-star"></p>
            <p class="fa-sharp fa-solid fa-star"> 500</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col" ontouchstart="this.classList.toggle('hover');">
      <div class="container">
        <div class="front">
          <div class="inner">
            <div className="hi3">

            </div>
            {/* <p>Clossyo</p>
            <span>Lorem ipsum</span> */}
          </div>
        </div>
        <div class="back">
          <div class="inner">
            <p>"Claire Contreras is a New York Times Best Selling Author. Her books range from romantic suspense to contemporary romance".</p> 
            <p class="fa-sharp fa-solid fa-star"></p>
            <p class="fa-sharp fa-solid fa-star"></p> 
            <p class="fa-sharp fa-solid fa-star"></p>
            <p class="fa-sharp fa-solid fa-star"></p>
            <p class="fa-sharp fa-solid fa-star"> 3,000</p>
          </div>
        </div>
      </div>
    </div>
    {/* <div class="col" ontouchstart="this.classList.toggle('hover');">
      <div class="container">
        <div class="front">
          <div class="inner">
            <p>Rendann</p>
            <span>Lorem ipsum</span>
          </div>
        </div>
        <div class="back">
          <div class="inner">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col" ontouchstart="this.classList.toggle('hover');">
      <div class="container">
        <div class="front">
          <div class="inner">
            <p>Reflupper</p>
            <span>Lorem ipsum</span>
          </div>
        </div>
        <div class="back">
          <div class="inner">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col" ontouchstart="this.classList.toggle('hover');">
      <div class="container">
        <div class="front">
          <div class="inner">
            <p>Acirassi</p>
            <span>Lorem ipsum</span>
          </div>
        </div>
        <div class="back">
          <div class="inner">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col" ontouchstart="this.classList.toggle('hover');">
      <div class="container">
        <div class="front">
          <div class="inner">
            <p>Sohanidd</p>
            <span>Lorem ipsum</span>
          </div>
        </div>
        <div class="back">
          <div class="inner">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
          </div>
        </div>
      </div>
          </div>*/}
  </div>
</div> 
         </div>
        </>
    )
}
export default Review;