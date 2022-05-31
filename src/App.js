import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes'
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
            <AnimatedRoutes />
          </BrowserRouter>
        </CategoriesContext.Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
