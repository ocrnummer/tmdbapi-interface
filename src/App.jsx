import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import NowPlayingPage from './pages/NowPlayingPage'
import PopularPage from './pages/PopularPage'
import TopRatedPage from './pages/TopRatedPage'

import Navigation from './components/Navigation'


function App() {

	return (
		<div className="App">

			<Navigation />

			<Routes>

				<Route path={'/'} element={<HomePage />} />
				<Route path={'/now-playing'} element={<NowPlayingPage />} />
				<Route path={'/popular'} element={<PopularPage />} />
				<Route path={'/top-rated'} element={<TopRatedPage />} />

			</Routes>

		</div>
	)
}

export default App
