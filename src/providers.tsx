import { NextUIProvider } from '@nextui-org/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TemplateScreen from "./screens/Template";
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <TemplateScreen />
      </Layout>
    ),
  },
]);

const Providers = () => {
  return (
    <NextUIProvider className='flex gap-4 w-screen h-screen p-10'>
      <RouterProvider router={router} />
    </NextUIProvider>
  );
}

export default Providers