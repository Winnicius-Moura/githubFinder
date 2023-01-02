import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './routes/HomePage'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './services/queryClient'
import { ListRepos } from './components/ListRepos'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      }
    ]
  },
  {
    path: `/repos/`,
    element: <ListRepos />
  }
])



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
