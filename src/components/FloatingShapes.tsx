import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function FloatingShapes() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effects for different shapes
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large Circle - Top Left */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full border-2 border-black/[0.12]"
        style={{
          top: '5%',
          left: '-10%',
          y: y1,
        }}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Medium Square - Top Right */}
      <motion.div
        className="absolute w-[300px] h-[300px] border-2 border-black/[0.15] bg-black/[0.03]"
        style={{
          top: '10%',
          right: '5%',
          y: y2,
          rotate: 15,
        }}
        animate={{
          scale: [1, 1.08, 1],
          rotate: [15, 20, 15],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      />

      {/* Small Circle - Middle Left */}
      <motion.div
        className="absolute w-[250px] h-[250px] rounded-full bg-black/[0.06] border border-black/[0.10]"
        style={{
          top: '45%',
          left: '8%',
          y: y3,
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5,
        }}
      />

      {/* Large Square - Bottom Right */}
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-lg border-2 border-black/[0.12] bg-black/[0.04]"
        style={{
          bottom: '10%',
          right: '-5%',
          y: y4,
          rotate: -10,
        }}
        animate={{
          scale: [1, 1.06, 1],
          rotate: [-10, -5, -10],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 7,
        }}
      />

      {/* Small Circle - Bottom Left */}
      <motion.div
        className="absolute w-[200px] h-[200px] rounded-full border-2 border-black/[0.14]"
        style={{
          bottom: '20%',
          left: '15%',
        }}
        animate={{
          scale: [1, 1.12, 1],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
    </div>
  );
}