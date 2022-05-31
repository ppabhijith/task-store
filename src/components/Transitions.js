import { motion } from "framer-motion";
const animationConfiguration = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: '0%', opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
};
const Transitions = ({ delay, children }) => {
    return (
        <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: delay }}
        >
            {children}
        </motion.div>
    );
};
export default Transitions;
