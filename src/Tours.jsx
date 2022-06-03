import './App.css'
import React from 'react'
import Tour from './Tour'

const Tours = ({ tours, removeTour }) => {
	return (
		<section className='tours-section'>
			<div className='tours-title'>
				<h2>Our Tours</h2>
				<div className='tours-title__line'></div>
			</div>
			<div className='tours-list'>
				{tours.map(tour => {
					return (
						<Tour key={tour.id} {...tour} removeTour={removeTour} />
					)
				})}
			</div>
		</section>
	)
}

export default Tours
