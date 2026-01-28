import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useRef } from 'react';

interface CounterAnimationProps {
  value: string;
  duration?: number;
}

export function CounterAnimation({ value, duration = 2 }: CounterAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  
  // Extract number and suffix (e.g., "200+" -> 200 and "+")
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');
  
  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: duration,
        ease: [0.25, 0.1, 0.25, 1.0], // Apple-like easing
      });
      
      return controls.stop;
    }
  }, [isInView, numericValue, count, duration]);

  // Format the number (add commas for thousands)
  const displayValue = useTransform(count, (latest) => {
    const rounded = Math.floor(latest);
    return rounded.toLocaleString();
  });

  return (
    <motion.span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </motion.span>
  );
}
