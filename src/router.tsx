import React, { lazy, Suspense, useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const Default = lazy(
    () => import(/* webpackChunkName: "VidtuRouter" */ "./Default")
  );

export default function VidtuRouter() {
    const user = null;
	const router = createBrowserRouter([
		{
			element: (
				<Suspense fallback={<>...</>}>
					<Default />
				</Suspense>
			),
			children: [
				{
					path: '',
					element: user ? (
						<Suspense fallback={<>...</>}>
							<Default />
						</Suspense>
					) : (
						<Suspense fallback={<>...</>}>
							<Default />
						</Suspense>
					),
				},
			],
			errorElement: (
				<Suspense fallback={<>...</>}>
					<Default />
				</Suspense>
			),
		},
	]);

	return <RouterProvider router={router} />;
}
