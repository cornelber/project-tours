import './App.css'
import { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
	const [loading, setLoading] = useState(true)
	const [tours, setTours] = useState([])

	const removeTour = id => {
		const newTours = tours.filter(tour => tour.id !== id)
		setTours(newTours)
	}

	const handleTours = () => {
		fetchData()
	}

	const fetchData = () => {
		fetch(url).then(res =>
			res.json().then(data => {
				try {
					setLoading(false)
					setTours(data)
				} catch (error) {
					setLoading(false)
					console.log(error)
				}
			})
		)
	}

	useEffect(() => {
		fetchData()
	}, [])

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		)
	}

	if (tours.length === 0) {
		return (
			<main>
				<div className='tours-title'>
					<h2>No Tours Find</h2>
					<div className='tours-title__line'></div>
					<button onClick={handleTours} className='btn-refresh'>
						Refresh
					</button>
				</div>
			</main>
		)
	}

	return (
		<main>
			<Tours tours={tours} removeTour={removeTour} />
		</main>
	)
}

export default App
