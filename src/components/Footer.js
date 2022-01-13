import React from 'react'
import {FiMenu} from 'react-icons/fi'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaFileCode} from 'react-icons/fa'


const Footer = () => {
	return (
		<footer className="footer">
			<div className="socialMedia">
				<a target="_blank" href="https://github.com/JacekJanur/" ><AiFillGithub /></a>
				<a target="_blank" href="https://www.linkedin.com/in/jacek-janur/" ><AiFillLinkedin /></a>
				<a target="_blank" href="https://github.com/JacekJanur/ReactSimplePage" ><FaFileCode /></a>
			</div>
			<p> &copy; 2022 Jacek Janur </p>
			<p className="images-note"> Images from pexels from users: Juan Pablo Serrano Arenas, Gustavo Peres, Verschoren Maurits, Di Bella Coffee, Karolina Grabowska, Polina Kholodova</p>
		</footer>
	)
}

export default Footer