/* eslint-disable react/jsx-no-comment-textnodes */
import "./App.css";
import { useState } from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
  Navigate,
} from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import {ThemeProvider,createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7'; 
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import InfoIcon from '@mui/icons-material/Info';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Initial_BOOK_LIST = [
  {
    name: "Charlotte's web",
    poster:
      "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
    rating: 8.8,
    summary:
      "The novel tells the story of Link livestock pig named Wilbur and his friendship with Link barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live.",
  },
  {
    name: "The power of your subconscious mind",
    poster:
      "https://imgv2-1-f.scribdassets.com/img/word_document/506884166/original/216x287/f39dce63c4/1666992162?v=1",
    rating: 7,
    summary:
      "Your subconscious mind is Link powerful force to be reckoned with. It makes up around 95% of your brain power and handles everything your body needs to function properly, from eating and breathing to digesting and making memories",
    trailer: "https://www.youtube.com/embed/Solb9uA-tgQ",
  },
  {
    name: "Attitude is everything ",
    poster: "https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg",
    rating: 8.1,
    summary:
      "Attitude, In psychology, Link mental position with regard to Link fact or state. Attitudes reflect Link tendency to classify objects and events and to react to them with some consistency. Attitudes are not directly observable but rather are inferred from the objective, evaluative responses Link person makes.",
  },
  {
    name: "The Secret",
    poster: "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
    summary:
      "There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from Link catalogue",
    rating: 8.8,
  },
  {
    name: "Discover Your Destiny",
    rating: 6,
    summary:
      "'Discover Your Destiny' is Link story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside.",
    poster: "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg",
  },
  {
    name: "The 5 AM Club",
    poster: "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
    rating: 8.6,
    summary:
      "In The 5 AM Club: Own Your Morning. Elevate Your Life, he uses Link fictitious story about Link billionaire mentor teaching Link struggling artist and an entrepreneur about the importance of waking up early to show how revolutionary it is for success.",
  },
  {
    name: "Atomic Habits",
    poster: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    rating: 8,
    summary:
      "Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time.",
  },
  {
    name: "I Can Do It",
    poster: "https://images-na.ssl-images-amazon.com/images/I/81T3L1yTJwL.jpg",
    rating: 8,
    summary:
      "Hay shows you that you “can do it”—that is, change and improve virtually every aspect of your life—by understanding and using affirmations correctly. Louise explains that every thought you think and every word you speak is an affirmation. Even your self-talk, your internal dialogue, is Link stream of affirmations.",
  },
];

export default function App() {

// 1. creating-createContext
//2. Publisher-provider-context.provider
//3.Subsciber-useContext-useContext(context)

  // const booklist = Initial_BOOK_LIST;
  const [booklist, setBookList] = useState(Initial_BOOK_LIST);
  const[mode,setMode]=useState("light");

  const theme = createTheme({
  palette: {
    mode: mode,
  },
});

  const navigatepage=useNavigate();

fetch("https://6403897380d9c5c7bab6db4e.mockapi.io/books")
.then((response)=>response.json())
.then((data)=>console.log(data))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div >
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={()=> navigatepage("/")}>Home</Button>
        <Button color="inherit" onClick={()=> navigatepage("/books")}>Booklist</Button>
        
        <Button color="inherit" onClick={()=> navigatepage("/add-color")}>AddColor</Button>
         <Button color="inherit" onClick={()=> navigatepage("/books/add")}>AddBook</Button>
         {/* <Button startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />} color="inherit" onClick={()=> setMode(mode==="light" ? "dark" : "light")}>{mode==="light" ? "dark" : "light"} Mode</Button> */}
      </Toolbar>
    </AppBar>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/books">BooksList</Link>
          </li>
          <li>
            <Link to="/books/add">AddBooks</Link>
          </li>
          <li>
            <Link to="/add-color">AddColor</Link>
          </li>
        </ul>
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/books"
          element={<BookList   booklist={booklist}/>}
        />
        <Route
          path="/books/:bookid"
          element={<BookTrailer booklist={booklist} />}
        />
        <Route path="/add-color" element={<Addcolor />} />
        <Route path="/novel" element={<Navigate replace to="/books" />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
        <Route
          path="/books/add"
          element={<Addbook booklist={booklist} setBookList={setBookList}/>}
        />
      </Routes>
      {/* <div className="book-list">
        {booklist.map((bk, index) => (
          <Book book={bk} key={index} />
        ))}
      </div> */}
    </div>

    </ThemeProvider>
    
  );
}

//                  lifting the state up i.e parent to child or props Drilling
function Addbook({ booklist, setBookList })
{
  const navigate1 = useNavigate();
  const [name, setName] = useState(""); 
  const [rate, setRate] = useState("");
  const [summary, setSummary] = useState("");
  const [poster, setposter] = useState("");
  return(
    <div>
      <div className="add-book-form">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(event) => setName(event.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="rating"
          variant="outlined"
          onChange={(event) => setRate(event.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Summary"
          variant="outlined"
          onChange={(event) => setSummary(event.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Poster"
          variant="outlined"
          onChange={(event) => setposter(event.target.value)}
        />
        

        <Button
          variant="contained"
          
          onClick={() => {
            
            const newbook = {
              name: name,
              poster: poster,
              rating: rate,
              summary: summary,
            };
            navigate1(-1)

            setBookList([...booklist, newbook]);
          }}
        >
          Add Book
        </Button>

        {/* <button
          onClick={() => {
            const newbook = {
              name: name,
              poster:poster,
              rating:rate,
              summary:summary,
            };

            setBookList([...booklist, newbook]);
          }}
        >
          Add book
        </button> */}
      </div>
    </div>
  );
}

function PageNotFound() {
  return (
    <div>
      <img
        src="https://www.moreycreative.com/hubfs/Blogs/Graphic%20of%20astronaut%20falling%20into%20a%20black%20hole%20that%20says%20404.jpg"
        alt="404 not found"
      />
    </div>
  );
}

function BookTrailer({ booklist }) {
  const { bookid } = useParams();
  const book = booklist[bookid];
  console.log(book, booklist);

  const navi = useNavigate();

  return (
    // useParams()-->  is used to extract the parameter from the url. -- 1.)path="/about/:id"   2.)const{id}=useParams();
    //useNavigate()--> is used to add the parameters for the url.
    <div>
      <iframe
        width="100%"
        height="365"
        src={book.trailer}
        title="The Power of Your Subconscious Mind (1963) by Joseph Murphy"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="Book-Content-trailer">
        <div className="book-spec">
          <h2 className="book-name">{book.name}</h2>
          <p className="book-rating">⭐{book.rating}</p>
        </div>

        <p className="book-summary"> {book.summary} </p>
        <Button onClick={() => navi(-1)} variant="contained">
          ❮ Back
        </Button>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h3>Hi,Welcome to my book store 🏬 🏬</h3>
    </div>
  );
}

function BookList({ booklist, setBookList }) {
  // const booklist = Initial_BOOK_LIST;
  // const [booklist, setBookList] = useState(Initial_BOOK_LIST);
  
  return (
    <div>
      

      <div className="book-list">
        {booklist.map((bk, index, id) => (
          <Book book={bk} key={index} id={index} />
        ))}
      </div>
    </div>
  );
}

function Book({ book, id }) {
  const [show, setShow] = useState(true);

  const summarystyle = {
    display: show ? "block" : "none",
  };

  const styles = {
    color: book.rating >= 8 ? "green" : "red",
  };

  const navigate = useNavigate();

  // const book={
  //   name:"the Secret",
  //   poster:"https://cdn.cinematerial.com/p/297x/qabssn9o/the-secret-dvd-movie-cover-md.jpg?v=1456272383",
  //   summary:"The Secret is a self-help book by Rhonda Byrne that explains how the law of attraction, which states that positive energy attracts positive things into your life, governs your thinking and actions, and how you can use the power of positive thinking to achieve anything you can imagine",
  //   rating:"8.3"
  // };
  return (
    <div className="Book-Content">
      <img className="book-poster" src={book.poster} alt={book.name} />
      <div className="book-spec">
        <h2 className="book-name">{book.name}</h2>
        <p style={styles} className="book-rating">
          ⭐{book.rating}
        </p>
      </div>

      {/* <IconButton
        aria-label="delete"
        color="error"
        onClick={() => setShow(!show)}
      >
      {show ?<ExpandLessIcon/>:<ExpandMoreIcon/>}

      
      
        
      </IconButton> */}

      <button onClick={() => setShow(!show)}>Toogle</button>
      <button onClick={() => navigate("/books/" + id)}>Info</button>

      {/* <p className="book-summary" style={summarystyle}>     // conditional styling //
        {book.summary} 
      </p> */}

      {/* //conditional rendering// */}
      {show ? <p className="book-summary"> {book.summary} </p> : ""}

      <Counter />
    </div>
  );
}
// export default App;

function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div>
      <IconButton
        aria-label="delete"
        color="primary"
        onClick={() => setLike(like + 1)}
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton
        aria-label="delete"
        color="error"
        onClick={() => setDislike(dislike + 1)}
      >
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>

      {/* <button onClick={() => setLike(like + 1)}>👍{like}</button> */}
      {/* <button onClick={() => setDislike(dislike + 1)}>👎{dislike}</button> */}
    </div>
  );
}

function Addcolor() {
  const [color, setColor] = useState("skyblue");

  // const colorList = ["orange", "pink", "red"];
  const [colorList, setColorList] = useState(["orange", "pink", "red"]);

  const styles = {
    fontSize: "24px",
    backgroundColor: color,
  };

  return (
    <div>
      <div className="add-color">
        <input
          onChange={(event) => setColor(event.target.value)} //word - color
          style={styles}
          type="text"
          value={color}
        />
        <button
          //copy the colorList and add newColor to it
          onClick={() => setColorList([...colorList, color])}
        >
          Add Color
        </button>
      </div>
      {colorList.map((clr, index) => (
        <ColorBox color={clr} key={index} />
      ))}
    </div>
  );
}

function ColorBox({ color }) {
  const styles = {
    width: "300px",
    height: "40px",
    backgroundColor: color,
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}
