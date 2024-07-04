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
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        history.map((item, index) => <HistoryCard key={index} workout={item} />)
      )}
    </div>
  );
}

export default History;