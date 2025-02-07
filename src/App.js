import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Navbar from './components/Navbar';
import ProductDetail from './Pages/ProductDetails';
import Login from './Pages/Login';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/Products" element={<Products />} />
                        <Route path="/Products/:id" element={<ProductDetail />} />
                        <Route path="/Login/:id" element={<Login />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
// import logo from './logo.svg';
// import './App.css';
// import Welcome from './welcome';
// import Status from './status';
// import Counter from './counter';
// import TodoList from './TodoList';
// import Timer from './Timer';

// function App() {
//   return (
//     <div>
//       <h1>Hello React 🙌</h1>
//       <p>Welcome to my first React app</p>
//       <Welcome name="Brunda" age="21" />
//       <Status stat="shipped" />
//       <Counter />
//       <TodoList />
//       <Timer />
//       <br></br>
//       <Welcome name="sam" age="20"/>
//       <Status stat="waiting"/>
//       <Counter />
//       <br></br>
//       <Welcome name="riya" age="28"/>
//       <Status stat="delivered"/>
//       <Counter />
//       <br></br>
//       <Welcome name="josh" age="23"/>
//       <Status stat="shipped" />
//       <Counter />

//     </div>
//   );
// }

// export default App;
