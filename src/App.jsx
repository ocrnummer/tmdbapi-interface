import { Router, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'

function App() {

  return (
    <div className="App">

      <Router>
        <Route path={'/'} element={<HomePage />} />
      </Router>

    </div>
  )
}

export default App
