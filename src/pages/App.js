import './App.scss'
import './Example/MyComponent'
import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


function App() {

  

  return (
    <div className="App">
      <header className="App-header">
          {/* <MyComponent/> */}
          <ListTodo />
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
  );
}

export default App;
