import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from './pages/DashBoard'
import TicketPage from './pages/TicketPage'
import Nav from './components/Nav'
import ErrorBoundary from './ErrorBoundary'
import CategoriesContext from './context';
import { useState } from 'react';
function App() {
  const [categories, setCategory] = useState(null)
  const value = { categories, setCategory }
  return (
    <div className="app">
      <ErrorBoundary>
        <CategoriesContext.Provider value={value}>
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path='/' element={<DashBoard />} />
              <Route path='/ticket' element={<TicketPage />} />
              <Route path='/ticket/:id' element={<TicketPage editMode={true} />} />
            </Routes>
          </BrowserRouter>
        </CategoriesContext.Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
