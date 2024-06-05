import React, { useEffect, useState } from 'react';
import WorkerCard from '../components/WorkerCard'; // Import WorkerCard component
import { getWorkers } from '../api'; // Import function to fetch worker data

function WorkersList() {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    // Fetch worker data when the component mounts
    const fetchWorkers = async () => {
      const data = await getWorkers(); // Function to fetch worker data from API
      setWorkers(data);
    };

    fetchWorkers();
  }, []);

  // Sort workers based on reviews and proximity (implement your sorting logic here)

  return (
    <div>
      <h2>Workers List</h2>
      <div className="worker-list">
        {workers.map(worker => (
          <WorkerCard key={worker.id} worker={worker} />
        ))}
      </div>
    </div>
  );
}

export default WorkersList;
