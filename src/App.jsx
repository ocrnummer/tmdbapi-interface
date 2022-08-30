// React
import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'

// Pages & Components
import HomePage from './pages/HomePage'
import CategoriesPage from './pages/CategoriesPage'
import GenrePage from './pages/GenrePage'
import MoviePage from './pages/MoviePage'
import ActorPage from './pages/ActorPage'
import Navigation from './components/Navigation'

// Assets
import './assets/scss/App.scss'

function App() {
	return (
		<div className="App">
			<Navigation />

			<Routes>
				<Route path={'/'} element={<HomePage />} />
				<Route path={'/categories'} element={<CategoriesPage />} />
				<Route path={'/genre'} element={<GenrePage />} />
				<Route path={'/movie/:id'} element={<MoviePage />} />
				<Route path={'/person/:id'} element={<ActorPage />} />
			</Routes>

			<ReactQueryDevtools />
		</div>
	)
}

export default App
