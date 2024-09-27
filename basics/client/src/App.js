import './App.css';
import {Route, BrowserRouter, Router, Routes} from "react-router-dom"
import Cart from './components/Cart';
import Counter from './components/Counter';

function App() {
  return (
        <BrowserRouter>
            <Routes>
                  <Route path="/practice/cart" element={<Cart/>}/>
                  <Route path="/practice/counter" element={<Counter/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
