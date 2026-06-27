import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homescreen from "./pages/Homescreen"
import Navbar from "./components/Navbar"
import Details from "./pages/Details"
import Browse from "./pages/Browse"
import BrowseByGenre from "./pages/BrowseByGenre"
import SearchResults from "./pages/SearchResults"

function App() {
 

  return (
  
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Homescreen/>}></Route>
        <Route path="/details/:platform/:id" element={<Details/>}></Route>
         <Route path="/browse/:platform" element={<Browse/>}></Route>
        <Route path="/browsebygenre/:platform/:genreid" element={<BrowseByGenre />}></Route>
        <Route path="/search" element={<SearchResults />}></Route>

      </Routes>
     </BrowserRouter>


  )
}

export default App
