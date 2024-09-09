import React from 'react'

const Skeleton = ({ className }: { className?: string }) => {
    return (
        <div className={`animate-pulse bg-gray-300 ${className}`}></div>
      );
}

export default Skeleton