import React, { lazy, Suspense, useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Default = lazy(
  () => import(/* webpackChunkName: "VidtuRouter" */ "./Default")
);
const Layout = lazy(
  () => import(/* webpackChunkName: "VidtuRouter" */ "./Layout")
);
const Test = lazy(() => import(/* webpackChunkName: "VidtuRouter" */ "./Test"));

export default function VidtuRouter() {
  const user = null;
  const router = createBrowserRouter([
    {
      element: (
        <Suspense fallback={<>...</>}>
          <Layout />
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
		{
			path: 'test',
			element: (
				<Suspense fallback={<>...</>}>
					<Test />
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
