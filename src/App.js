import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css';
import Layout from './comps/Layout/Layout';
import Home from './comps/Home/Home';
import About from './comps/AboutUs/About';
import ContactUs from './comps/ContactUs/ContactUs';
import Animation from './comps/Home/childComps/Animation/Animation';
import ChooseUs from './comps/Home/childComps/ChooseUs/ChooseUs';

function App() {

  const routes = createHashRouter([
    {path:"/",element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:"/about",element:<div><About/> <Animation/> <ChooseUs/> </div>},
      {path:"/contact",element:<ContactUs/>},
    ]}
  ])


  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
