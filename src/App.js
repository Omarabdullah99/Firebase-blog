
import './App.css';
import Home from './pages/Home';
import {Routes,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Detail from './pages/Detail';
import AddEditBlog from './pages/AddEditBlog';
import About from './pages/About';
import NotFound from './pages/NotFound';
function App() {
  return (
    <div className="App">
    <ToastContainer />
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/create' element={<AddEditBlog />} />
        <Route path='/update/:id' element={<AddEditBlog />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
     </Routes>
    </div>
  );
}

export default App;
