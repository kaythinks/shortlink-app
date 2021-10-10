import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/'>
			Home
		</NavLink>
		<NavLink to='/shorten-url'>
			Shorten URL
		</NavLink>
		<NavLink to='/list-url'>
			List URL
		</NavLink>
		
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;
