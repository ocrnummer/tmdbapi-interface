import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'

import HomePage from './pages/HomePage'
import CategoriesPage from './pages/CategoriesPage'
import GenrePage from './pages/GenrePage'
import SearchPage from './pages/SearchPage'
import MoviePage from './pages/MoviePage'
import ActorPage from './pages/ActorPage'

import Navigation from './components/Navigation'

import './assets/scss/App.scss'


function App() {
	return (
		<div className="App">

			<Navigation />

			<Routes>
				<Route path={'/'} element={<HomePage />} />
				<Route path={'/categories'} element={<CategoriesPage />} />
				<Route path={'/genre'} element={<GenrePage />} />
				<Route path={'/search'} element={<SearchPage />} />
				<Route path={'/movie/:id'} element={<MoviePage />} />
				<Route path={'/person/:id'} element={<ActorPage />} />
			</Routes>

			<ReactQueryDevtools />

		</div>
	)
}

export default App
