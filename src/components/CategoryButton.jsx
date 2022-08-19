import { Button } from 'react-bootstrap'

const CategoryButton = ({ category, text, onSetSearchParams }) => {
	return (
		<Button
			onClick={() => { onSetSearchParams({ category: { category }, page: 1 }) }}
			variant="outline-primary"
		>{text}</Button>
	)
}

export default CategoryButton