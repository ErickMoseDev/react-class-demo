import { Link, NavLink } from 'react-router-dom';
import Products from './components/products';
import RandomProduct from './components/random-product';
import UserInfo from './components/user-info';
import UserInfoComputed from './components/user-info-computed';
import Users from './components/users';

const navLinks = [
	{
		path: '/',
		title: 'Home',
	},
	{
		path: '/playground',
		title: 'Playground',
	},
	{
		path: '/login',
		title: 'Login',
	},
	{
		path: '/signup',
		title: 'Sign up',
	},
];

function App() {
	return (
		<div className="max-w-5xl mx-auto">
			<header>
				<nav className="py-5 flex justify-between items-center">
					{/* logo */}
					<div className="flex items-center gap-2">
						<div className="size-10 rounded-full bg-orange-500" />
						<h1 className="text-3xl font-bold font-mono">
							React class demo
						</h1>
					</div>

					{/* links */}
					<ul className="flex items-center gap-3">
						{navLinks.map((link) => (
							<NavLink
								to={link.path}
								className={({ isActive }) =>
									isActive
										? 'text-orange-500'
										: 'text-gray-600'
								}
							>
								{link.title}
							</NavLink>
						))}
					</ul>
				</nav>
			</header>
		</div>
	);
}

export default App;
