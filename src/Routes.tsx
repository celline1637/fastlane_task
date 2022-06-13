import { Navigate, useRoutes } from 'react-router-dom'
import { Layout } from './components/layout'
import { ListScreen } from './pages/list'

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Navigate to="/fastlane/list" />,
    },
    {
      element: <Layout />,
      path: '/fastlane',
      children: [{ path: 'list', element: <ListScreen /> }],
    },
  ])

  return routes
}

export default Routes
