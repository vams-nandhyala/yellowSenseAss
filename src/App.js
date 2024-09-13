import {Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import Jobs from "./components/Jobs"
import BookMarks from './components/BookMarks';
import JobCard from './components/JobCard';

import './App.css';

const App = () => (
  <BrowserRouter>
  
  <Route exact path="/" component={Home} />
  <Route exact path="/jobs" component={Jobs} />
  <Route exact path="/bookmarks" component={BookMarks} />
  <Route exact path="/jobs/:id" component={JobCard} />
  
  </BrowserRouter>
)

export default App;
