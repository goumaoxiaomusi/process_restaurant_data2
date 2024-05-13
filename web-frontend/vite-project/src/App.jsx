import Dashboard from "./pages/Dashboard"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SearchPage from "./pages/SearchPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/restaurant/:postcode" element={<Dashboard/>}/>
        <Route exact path="/" element={<SearchPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
