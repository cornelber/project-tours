import './App.css'
import React from 'react'
import { useState } from 'react'

const Tour = ({ id, name, info, image, price, removeTour }) => {
	const [readMore, setReadMore] = useState(false)

	const handleInfo = () => {
		setReadMore(!readMore)
	}

	return (
		<article>
			<div className='tour-img'>
				<img src={image} alt={name} />
			</div>
			<footer className='tour-footer'>
				<div className='tour-title'>
					<h2>{name}</h2>
					<div className='tour-price'>
						<p>${price}</p>
					</div>
				</div>
				<div className='tour-subtitle'>
					<p>
						{readMore ? info : `${info.substring(0, 200)}...`}
						<button
							onClick={handleInfo}
							className='tour-subtitle__btn'
						>
							{readMore ? 'Show Less' : 'Read More'}
						</button>
					</p>
				</div>
				<button className='tour-btn' onClick={() => removeTour(id)}>
					Not Interested
				</button>
			</footer>
		</article>
	)
}

export default Tour
