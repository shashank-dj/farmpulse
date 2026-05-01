import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Livestock from './pages/Livestock.jsx'
import Stock from './pages/Stock.jsx'
import Account from './pages/Account.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="livestock" element={<Livestock />} />
        <Route path="stock" element={<Stock />} />
        <Route path="account" element={<Account />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  )
}
