import React from 'react'

import Coffee from '../components/Coffee'

import { Coffees } from '../assets/MenuCoffe'

const Menu = () => {
	return (
		<div className="menu">
			<h1 className="menu-title">Our Coffees</h1>
			<div className="menu-titles">
				{Coffees.map((coffee, key) => {
					return (
						<Coffee key={key} coffee={coffee}></Coffee>
						)
				})}
			</div>
		</div>
	)
}

export default Menu