import React, { useEffect, useState } from "react";
import axios from "axios";
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
  axios
    .get("/users")
    .then((res) => setUsers(res.data))
    .catch((err) => console.error(err));

  // Update time every second
  const timer = setInterval(() => setCurrentTime(new Date()), 1000);
  return () => clearInterval(timer);
}, []);

// Example: count users per month
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const usersPerMonth = months.map(
  (_, idx) =>
    users.filter((user) => new Date(user.createdAt).getMonth() === idx).length
);

const data = {
  labels: months,
  datasets: [
    {
      label: "Users per Month",
      data: usersPerMonth,
      backgroundColor: "rgba(59, 130, 246, 0.7)", // blue
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
