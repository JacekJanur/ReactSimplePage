import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
	return (
		<div className="home" >
			<div className="home-container">
				<h1>Jacek's Coffee</h1>
				<p>A MATHEMATICIAN IS A DEVICE FOR TURNING COFFEE INTO THEOREMS</p>
				<Link to="">
					<button> CHECK OFFER </button>
				</Link>
			</div>
		</div>
	)
}

export default Home