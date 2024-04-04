import "./App.css";
import {Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import NewsDetailPage from "./pages/NewsDetailPage";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <Navbar />
    
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/news-detail/:id" element={<NewsDetailPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
