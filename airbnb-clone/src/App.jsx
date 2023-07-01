import Nav from './comp/Nav'
import './App.css'
import bg from './assets/bg.png'
import OnlineExp from './comp/OnlineExp'

function App() {
  return(
    <div className="app">
      <Nav />
      <div className="img"><img src={bg} alt="bg" /></div>
      <OnlineExp />
    </div>
  )
}

export default App
