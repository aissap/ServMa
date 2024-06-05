import React from 'react';

function WorkerCard({ worker }) {
  return (
    <div className="worker-card">
      <h3>{worker.name}</h3>
      <p>Location: {worker.location}</p>
      <p>Reviews: {worker.reviews}</p>
      {/* Add more worker information as needed */}
    </div>
  );
}

export default WorkerCard;
