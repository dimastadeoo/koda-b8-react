import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import halaman dari folder components
import Home from './component/HomePage.jsx';
import About from './component/AboutPage.jsx';
import Contact from './component/ContactPage.jsx';

// Konfigurasi Peta Rute URL halaman
const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about", 
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },


]);

function App() {
  // Jalankan konfigurasi router ke dalam aplikasi React
  return <RouterProvider router={router} />;
}

export default App;