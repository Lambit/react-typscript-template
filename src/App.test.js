import AppLayout from 'components/AppLayout';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import App from './App'


it('renders without crashing', () => {
  const div = document.createElement('div')

 const routes = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'dash-route',
        title: 'Dashboard',
        path: '/dash',
        enabled: true,
        component: Dashboard
    },
]

  ReactDOM.render(
    <BrowserRouter>
    <AppLayout
      initializeState={({ set }) => {
        set(routes)
      }}
    >
      <App path="/" />
    </AppLayout>
    </BrowserRouter>,
    div
  )

  ReactDOM.unmountComponentAtNode(div)
})