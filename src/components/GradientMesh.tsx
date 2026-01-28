import { motion } from 'motion/react';

export function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orb 1 - SAP Blue */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-[80px] opacity-[0.25]"
        style={{
          background: 'radial-gradient(circle, #0070F3 0%, transparent 70%)',
          top: '-20%',
          right: '5%',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Gradient Orb 2 - Purple-Blue */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-[70px] opacity-[0.20]"
        style={{
          background: 'radial-gradient(circle, #667eea 0%, transparent 70%)',
          top: '30%',
          left: '0%',
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Gradient Orb 3 - Light Gray */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[60px] opacity-[0.18]"
        style={{
          background: 'radial-gradient(circle, #a0aec0 0%, transparent 70%)',
          bottom: '5%',
          right: '15%',
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5,
        }}
      />
    </div>
  );
}