
import './App.css';
import { RouterProvider,  createHashRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import NotFound from './Components/NotFound/NotFound';

import { ShareCardProvider } from './Context/ShareContext';

function App() {





let routers= createHashRouter([

{
  path: '/' , element:<Layout/>,children : [
  {path:'/', element: <Home/>},
  {path:'home',element: < Home />},

  {path: 'cart', element: <Cart/>},
  {path:'*', element:  <NotFound/>}

] }



])






  return (

<ShareCardProvider>   <RouterProvider router={routers}/>    </ShareCardProvider>


  





   
   



  );
}

export default App;
