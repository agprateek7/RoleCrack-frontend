import React from 'react'

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse space-y-4 p-4">
      <div className="h-6 bg-gray-300 rounded w-3/4"></div>
      <div className="h-6 bg-gray-300 rounded w-full"></div>
      <div className="h-6 bg-gray-300 rounded w-5/6"></div>
      <div className="h-40 bg-gray-300 rounded w-full"></div>
    </div>
  )
}

export default SkeletonLoader
