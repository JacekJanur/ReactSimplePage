import React from 'react'

const Coffee = ({coffee}) => {
	return (
		<div className="coffee">
			<div style={{ backgroundImage: `url(${coffee.image})` }}></div>
			<h2>{coffee.name}</h2>
			<p>{coffee.price} PLN</p>
		</div>
	)
}

export default Coffee