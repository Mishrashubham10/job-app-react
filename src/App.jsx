import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import ViewAllJobs from './components/ViewAllJobs';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<HomeCards />} />
      <Route path="/hero" element={<Hero />} />
      <Route path="/view-jobs" element={<ViewAllJobs />} />
      </>
    )
  );

  return (
    <RouterProvider router={router} />
  );
};

export default App;