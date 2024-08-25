import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Home />}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
