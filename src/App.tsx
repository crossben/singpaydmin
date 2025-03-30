import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Clients } from './pages/Clients';
import { Transactions } from './pages/Transactions';
import { Portefeuille } from './pages/Portefeuille';
import { Head } from './components/Head';
import { ClientInfoPage } from './pages/InfoClient';
import Login from './pages/login';

function App() {
  return (
    <>
      <Head />
      <BrowserRouter>
        <div className="flex min-h-screen bg-gray-50">
          <Sidebar />
          <main className="flex-1 p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/clients/info" element={<ClientInfoPage />} />
              <Route path="/portefeuille" element={<Portefeuille />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;