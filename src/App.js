import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Fuel from './pages/Fuel';
import Maintain from './pages/Maintain';
import Repair from './pages/Repair';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashboard/>} />
                    <Route path="/fuel" element={<Fuel />} />
                    <Route path="/maintain" element={<Maintain />} />
                    <Route path="/repair" element={<Repair />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;