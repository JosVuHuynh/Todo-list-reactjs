import './App.scss'
import './Example/MyComponent'
import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Nav from './Nav/Nav';
import Users from './Users/Users'
import DetailUser from './Users/DetailUser';
import Home from './Example/Home'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
            <Nav />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/todo" element={<ListTodo/>} />
              <Route path="/about" element={<MyComponent/>} />
              <Route path='/user' element={<Users />} />
              <Route path='/user/:id' element={<DetailUser />} />
            </Routes>
        </header>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
    </div>
    </BrowserRouter>
  );
}

export default App;
