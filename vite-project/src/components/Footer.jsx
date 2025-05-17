import { FaFacebookSquare, FaInstagramSquare, FaTwitter } from 'react-icons/fa'

function Footer() {
	return (
		<div className='container'>
			<nav>
				<img src='images/First.svg' alt='' />

				<div className='icons'>
					<FaTwitter />
					<FaFacebookSquare />
					<FaInstagramSquare />
				</div>

				<div>Copywright 2020 Bella Onojie.com</div>
			</nav>
		</div>
	)
}

export default Footer
