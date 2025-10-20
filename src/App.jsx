// import './App.css'
import Header from './Components/Header/Header.jsx'
import TestClass from './Components/Body/Body.jsx'
import Footer from './Components/Footer/Footer.jsx'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {

  return (
    <>
      <Header />
      <TestClass currency={'EGP'} />
      {/* <TestClass currency={'USD'} /> */}
      <Footer />
    </>
  )
}

export default App
