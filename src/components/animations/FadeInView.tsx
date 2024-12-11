import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInViewProps {
  children: React.ReactNode;
  delay?: number;
}

const FadeInView = ({ children, delay = 0 }: FadeInViewProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInView;