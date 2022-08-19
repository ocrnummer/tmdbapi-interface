import { Button } from 'react-bootstrap'

const CategoryButton = ({ category, text }) => {
	return (
		<Button
			onClick={() => { setSearchParams({ category: { category }, page: 1 }) }}
			variant="outline-primary"
		>{text}</Button>
	)
}

export default CategoryButton