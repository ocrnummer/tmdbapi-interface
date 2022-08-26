import { useNavigate } from "react-router-dom"
import { Button } from 'react-bootstrap'

import '../assets/scss/App.scss'

const BackButton = () => {
	const navigate = useNavigate()

	return (
		<>
			<Button
				variant="outline-primary"
				className="button mt-3"
				onClick={() => navigate(-1)}
			>Back</Button>
		</>
	)
}

export default BackButton