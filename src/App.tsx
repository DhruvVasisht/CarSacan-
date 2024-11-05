import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader';
import SidePanel from './components/SidePanel';

const AddTask = lazy(()=>import("./pages/AddTask"))
const ViewTask = lazy(()=>import("./pages/ViewTask"))

const App = () => {
  return (
    <>
      <SidePanel/>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/add-task' element={<AddTask />} />  
           <Route path='/view-task' element={<ViewTask />} />
        </Routes>
      </Suspense>
      </>

  );
}

export default App;
