import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const menuItems = [
	{
		id: 1,
		path: '/playground',
		title: 'Playground',
	},
	{
		id: 2,
		path: '/playground/products',
		title: 'Products',
	},
	{
		id: 3,
		path: '/playground/random-product',
		title: 'Random Product',
	},
	{
		id: 4,
		path: '/playground/user-info-computed',
		title: 'User Info Computed',
	},
	{
		id: 5,
		path: '/playground/products/5',
		title: 'Product 5',
	},
];

export default function PlaygroundLayout() {
	return (
		<div className="flex gap-5">
			{/* links */}
			<div className=" h-fit border rounded-xl p-5 m-5 sticky top-5 w-80">
				<ul className="flex flex-col gap-2">
					{menuItems.map((item) => (
						<SidebarItem
							path={item.path}
							title={item.title}
							key={item.id}
						/>
					))}
				</ul>
			</div>

			{/* outlet */}
			<div className="w-full h-full">
				<Outlet />
			</div>
		</div>
	);
}

function SidebarItem({ path, title }) {
	return (
		<NavLink
			to={path}
			className={({ isActive }) =>
				isActive
					? 'text-white bg-orange-500 p-1.5 font-bold rounded-md'
					: 'text-gray-500 p-1.5 rounded-md '
			}
			end
		>
			{title}
		</NavLink>
	);
}
