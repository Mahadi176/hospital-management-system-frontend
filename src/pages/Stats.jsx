import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import api from "../api/axiosInstance";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Stats = () => {
  const [users, setUsers] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [calendarDate, setCalendarDate] = useState(new Date());

  useEffect(() => {
    // Fetch user data from API
    api
      .get("/users")
      .then((res) => setUsers(res?.data))
      .catch((err) => console.error(err));

    // Update time every second
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Simple chart: just show number of users per index
  const data = {
    labels: users?.map((user, idx) => `User ${idx + 1}`),
    datasets: [
      {
        label: "Users",
        data: users?.map(() => 1), // just count each user as 1
        backgroundColor: "rgba(59, 130, 246, 0.7)",
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Chart */}
      <div className="bg-white shadow rounded p-4 flex flex-col">
        <h2 className="text-lg font-bold mb-4">User Growth</h2>
        <Bar data={data} />
      </div>

      {/* Calendar */}
      <div className="bg-white shadow rounded p-4 flex flex-col items-center">
        <h2 className="text-lg font-bold mb-4">Calendar</h2>
        <Calendar value={calendarDate} onChange={setCalendarDate} />
      </div>

      {/* Current Time */}
      <div className="bg-white shadow rounded p-4 flex flex-col items-center md:col-span-2">
        <h2 className="text-lg font-bold mb-4">Current Time</h2>
        <p className="text-2xl font-mono">{currentTime.toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default Stats;
