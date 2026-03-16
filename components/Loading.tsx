import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = "" }) => {
  return (
    <div className={`relative overflow-hidden bg-gray-100 ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export const ProductSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <Skeleton className="aspect-[4/5] mb-6" />
      <div className="px-1">
        <div className="flex justify-between items-start mb-2">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/4" />
        </div>
        <Skeleton className="h-3 w-full mb-1" />
        <Skeleton className="h-3 w-4/5 mb-4" />
        <Skeleton className="h-3 w-1/3" />
      </div>
    </div>
  );
};

export const Spinner: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = "#4CAF50" }) => {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        style={{
          width: size,
          height: size,
          border: `2px solid ${color}20`,
          borderTop: `2px solid ${color}`,
          borderRadius: "50%",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <Spinner size={40} />
    </div>
  );
};

export default Loading;
