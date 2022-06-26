import Footer from './components/footer'
import Routs from './router'
import Header from './components/header'

function App () {
  return (
    <div className="App">
     <Header/>
      <div className="main">
        <Routs/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
