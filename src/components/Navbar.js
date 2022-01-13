import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import {FiMenu} from 'react-icons/fi'


const Navbar = () => {

	const [hidden, setHidden] = useState(true)

	const toggleHide = () => {
		setHidden(!hidden)
	}

	React.useEffect(() => {
	    function handleResize() {
	    	if(window.innerWidth > 600)
	    	{
	    		setHidden(true)
	    	}
		}
		    window.addEventListener('resize', handleResize)
	})



	return (
		<nav className="navbar">
			<div className="nav-left" id={hidden ? "close" : "open"}>
				{hidden ? 
					<img src={Logo} />
					: 
					<div className="hiddenLinks" >
						<Link to="/"> Home </Link>
						<Link to="/menu"> Menu </Link>
						<Link to="/about"> About </Link>
					</div>
				}
				
			</div>
			<div className="nav-right">
				<Link to="/"> Home </Link>
				<Link to="/menu"> Menu </Link>
				<Link to="/about"> About </Link>

				<button onClick = {toggleHide}>
					<FiMenu size={30} />
				</button>
				
			</div>
			
		</nav>

	)
}

export default Navbar