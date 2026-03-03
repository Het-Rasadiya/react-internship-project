import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AdminPanel = () => {
  const [reservations, setReservations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("adminAuth") !== "true") {
      navigate("/admin-login");
      return;
    }
    const data = JSON.parse(localStorage.getItem("reservations") || "[]");
    setReservations(data);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Panel - Reservations</h1>
          <div className="flex gap-4">
            <Link to="/" className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700">
              Home
            </Link>
            <button onClick={handleLogout} className="bg-primary text-white px-6 py-2 rounded hover:bg-red-700">
              Logout
            </button>
          </div>
        </div>
        <div className="mb-6 flex gap-4 flex-wrap">
          <a href="/#home" className="bg-white px-4 py-2 rounded shadow hover:bg-gray-50">Home</a>
          <a href="/#about" className="bg-white px-4 py-2 rounded shadow hover:bg-gray-50">About</a>
          <a href="/#menu" className="bg-white px-4 py-2 rounded shadow hover:bg-gray-50">Menu</a>
          <a href="/#reservation" className="bg-white px-4 py-2 rounded shadow hover:bg-gray-50">Reservation</a>
          <a href="/#contact" className="bg-white px-4 py-2 rounded shadow hover:bg-gray-50">Contact</a>
        </div>
        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Time</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Party Size</th>
                <th className="p-3 text-left">Table</th>
                <th className="p-3 text-left">Special Request</th>
              </tr>
            </thead>
            <tbody>
              {reservations.length === 0 ? (
                <tr>
                  <td colSpan="8" className="p-4 text-center text-gray-500">No reservations yet</td>
                </tr>
              ) : (
                reservations.map((res, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="p-3">{res.date}</td>
                    <td className="p-3">{res.time}</td>
                    <td className="p-3">{res.fullName}</td>
                    <td className="p-3">{res.phone}</td>
                    <td className="p-3">{res.email}</td>
                    <td className="p-3">{res.partySize}</td>
                    <td className="p-3">{res.tableRef}</td>
                    <td className="p-3">{res.specialRequest || "-"}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
