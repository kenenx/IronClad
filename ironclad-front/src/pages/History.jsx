import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import HistoryCard from "../components/HistoryCard";

import { getUserWorkouts } from "../services/workout.service";



const History = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await getUserWorkouts({ userId });
        setHistory(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchHistory();
  }, [userId]);

  return (
    <div className="content-container mt-3">
      <h3 className="text-center m-3">Workout History</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        [...history]
          .sort((a, b) => new Date(b.date) - new Date(a.date)) //
          .map((item, index) => (
            <div key={index} className="mb-3">
              <HistoryCard workout={item} />
            </div>
          ))
      )}
      <div style={{ height: "500px" }}></div>
    </div>
  );
}

export default History;