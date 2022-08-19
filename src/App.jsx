import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'

import HomePage from './pages/HomePage'
import CategoriesPage from './pages/CategoriesPage'
import SearchPage from './pages/SearchPage'

import Navigation from './components/Navigation'

import './assets/scss/App.scss'


function App() {

	return (
		<div className="App">

			<Navigation />

			<Routes>

				<Route path={'/'} element={<HomePage />} />
				<Route path={'/categories'} element={<CategoriesPage />} />
				<Route path={'/search'} element={<SearchPage />} />

			</Routes>

			<ReactQueryDevtools />


		</div>
	)
}

export default App
