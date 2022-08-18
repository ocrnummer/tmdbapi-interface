import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'

import HomePage from './pages/HomePage'
import NowPlayingPage from './pages/NowPlayingPage'
import PopularPage from './pages/PopularPage'
import TopRatedPage from './pages/TopRatedPage'
import SearchPage from './pages/SearchPage'

import Navigation from './components/Navigation'

import './assets/scss/App.scss'


function App() {

	return (
		<div className="App">

			<Navigation />

			<Routes>

				<Route path={'/'} element={<HomePage />} />
				<Route path={'/now-playing'} element={<NowPlayingPage />} />
				<Route path={'/popular'} element={<PopularPage />} />
				<Route path={'/top-rated'} element={<TopRatedPage />} />
				<Route path={'/search'} element={<SearchPage />} />

			</Routes>

			<ReactQueryDevtools />


		</div>
	)
}

export default App
