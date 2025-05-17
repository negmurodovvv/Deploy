import React from 'react'

function Navbar() {
	return (
		<div className='container'>
			<nav>
				<div className='logo'>
					<img className='iconSection' src='images/First.svg' alt='' />
				</div>

				<ul>
					<li>Home</li>
					<li>Product</li>
					<li>Faq</li>
					<li>Contact</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navbar
