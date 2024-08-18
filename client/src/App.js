import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home';
import NewProject from './components/NewProject';
import MyProjects from './components/MyProjects';
import ManageProject from './components/ManageProject';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new-project' element={<NewProject/>}/>
          <Route path='/my-projects' element={<MyProjects/>}/>
          <Route path='/manage/:id' element={<ManageProject />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
