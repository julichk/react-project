import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home';
import NotesPage from '../components/NotesPage/NotesPage';

function Router() {
  return (
    <Routes>
      <Route
        path="/" element={<Home/>}
      />
      <Route path="/notes" element={<NotesPage/>} />
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
    
  );
}

export default Router;
