import { AnimatePresence } from "framer-motion"
import { useLocation, Routes, Route } from "react-router-dom"
import DashBoard from '../pages/DashBoard'
import TicketPage from '../pages/TicketPage'
const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location}>
                <Route path='/' element={<DashBoard />} />
                <Route path='/ticket' element={<TicketPage />} />
                <Route path='/ticket/:id' element={<TicketPage editMode={true} />} />
            </Routes>
        </AnimatePresence>
    )
}
export default AnimatedRoutes;