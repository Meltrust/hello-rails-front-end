import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './components/Greeting';
import store from './redux/configureStore';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="p-0">

          <Routes>
            <Route path="/" element="Home" />
            <Route path="/hello" element={<Greeting greetingFromApp="Hey!" />} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
