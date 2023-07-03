import Navbar from './comp/Navbar'
import './App.css'
import SearchBar from './comp/SearchBar'
import SearchResults from './comp/SearchResults'
import MoreInfo from './comp/MoreInfo'
import Footer from './comp/Footer'

function App() {
  return (
    <div>
      <div className="header">
        <Navbar />
        <SearchBar />
      </div>
      <SearchResults />
      <MoreInfo />
      <Footer />
    </div>
  )
}

export default App
