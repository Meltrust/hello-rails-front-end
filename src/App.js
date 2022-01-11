import './App.css';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './components/Greeting';
import store from './redux/configureStore';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="container">

          <Routes>
            <Route path="/" element={<Link to="/Hello" className="row mt-5"><h1 className="col-12 text-center">Hello! Click to get greetings</h1></Link>} />
            <Route path="/hello" element={<Greeting greetingFromApp="Hey!" />} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
