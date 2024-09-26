import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import ListUsers from './components/users/ListUsers';
import CreateUser from './components/users/CreateUser';
import EditUser from './components/users/EditUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/users' element={<ListUsers />} />
        <Route path='/users/create' element={<CreateUser/>} />
        <Route path='/users/edit/:id' element={<EditUser/>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
