import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import { lazy, Suspense } from 'react';
import Loader from './components/Loader';
import SidePanel from './components/SidePanel';


const AddTask = lazy(()=>import("./pages/AddTask"))
const ViewTask = lazy(()=>import("./pages/ViewTask"))

const App = () => {
  return (
    <Router>
      <Header />
      <SidePanel/>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<AddTask />} />  
          <Route path='/view' element={<ViewTask />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;