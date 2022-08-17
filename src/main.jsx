import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'

// App lol
import App from './App'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>

		<QueryClientProvider client={queryClient}>

			<BrowserRouter>
				<App />
			</BrowserRouter>

		</QueryClientProvider>

	</React.StrictMode>
)
