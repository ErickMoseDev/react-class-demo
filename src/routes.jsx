import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Playground from './pages/playground';
import Products from './components/products';
import RandomProduct from './components/random-product';
import Users from './components/users';
import UserInfoComputed from './components/user-info-computed';
import PlaygroundLayout from './layouts/playground-layout';
import ProductDetails from './pages/product-details';

export const myRouter = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/playground',
		element: <PlaygroundLayout />,
		children: [
			{ path: '/playground', element: <Playground /> },

			{
				path: '/playground/random-product',
				element: <RandomProduct />,
			},
			{
				path: '/playground/user-info-computed',
				element: <UserInfoComputed />,
			},
			{
				path: '/playground/users',
				element: <Users />,
			},
			{
				path: '/playground/products',
				element: <Products />,
			},
			{
				path: '/playground/products/:productId',
				element: <ProductDetails />,
			},
		],
	},
]);
