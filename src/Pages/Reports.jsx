import React from 'react'
import CalenderView from '../Components/Reports/CalenderView'

const Reports = () => {
  return (
    <div className="min-h-screen bg-[#040603] text-white p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Reports</h1>
        <p className="text-gray-400 text-sm md:text-base">
          Track your progress and visualize your nutrition journey.
        </p>
      </div>
      <CalenderView />
    </div>
  )
}

export default Reports