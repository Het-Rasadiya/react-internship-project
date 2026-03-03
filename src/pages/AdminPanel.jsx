import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AdminPanel = () => {
  const [reservations, setReservations] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [activeTab, setActiveTab] = useState("reservations");
  const [editItem, setEditItem] = useState(null);
  const [formData, setFormData] = useState({ title: "", price: "", category: "", ingredients: "", description: "", image: "" });
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("adminAuth") !== "true") {
      navigate("/admin-login");
      return;
    }
    loadData();
  }, [navigate]);

  const loadData = () => {
    setReservations(JSON.parse(localStorage.getItem("reservations") || "[]"));
    setMenuItems(JSON.parse(localStorage.getItem("menuItems") || "[]"));
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/");
  };

  const handleDelete = (id) => {
    const updated = menuItems.filter(item => item.id !== id);
    localStorage.setItem("menuItems", JSON.stringify(updated));
    setMenuItems(updated);
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setFormData({ title: item.title, price: item.price, category: item.category, ingredients: item.ingredients, description: item.description, image: item.image });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const updated = menuItems.map(item => item.id === editItem.id ? { ...item, ...formData } : item);
    localStorage.setItem("menuItems", JSON.stringify(updated));
    setMenuItems(updated);
    setEditItem(null);
    setFormData({ title: "", price: "", category: "", ingredients: "", description: "", image: "" });
  };

  const handleAdd = () => {
    const priceWithRupee = formData.price.startsWith("₹") ? formData.price : `₹ ${formData.price}`;
    const newItem = { id: Date.now(), ...formData, price: priceWithRupee };
    const updated = [...menuItems, newItem];
    localStorage.setItem("menuItems", JSON.stringify(updated));
    setMenuItems(updated);
    setFormData({ title: "", price: "", category: "", ingredients: "", description: "", image: "" });
  };

  return (
    <div className="min-h-screen bg-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Panel</h1>
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
        
        <div className="mb-6 flex gap-4">
          <button onClick={() => setActiveTab("reservations")} className={`px-6 py-2 rounded ${activeTab === "reservations" ? "bg-primary text-white" : "bg-white"}`}>
            Reservations
          </button>
          <button onClick={() => setActiveTab("menu")} className={`px-6 py-2 rounded ${activeTab === "menu" ? "bg-primary text-white" : "bg-white"}`}>
            Menu Items
          </button>
        </div>

        {activeTab === "reservations" && (
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
        )}

        {activeTab === "menu" && (
          <div>
            <div className="bg-white p-6 rounded shadow mb-6">
              <h2 className="text-xl font-bold mb-4">{editItem ? "Edit Menu Item" : "Add Menu Item"}</h2>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Title" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="p-2 border rounded" required />
                <input type="text" placeholder="Price (e.g., 299)" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} className="p-2 border rounded" required />
                <input type="text" placeholder="Category" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="p-2 border rounded" required />
                <input type="text" placeholder="Ingredients" value={formData.ingredients} onChange={(e) => setFormData({...formData, ingredients: e.target.value})} className="p-2 border rounded" required />
                <div className="col-span-2">
                  <label className="block mb-2 font-semibold">Upload Image</label>
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="p-2 border rounded w-full" />
                  {formData.image && <img src={formData.image} alt="Preview" className="mt-2 h-32 object-cover rounded" />}
                </div>
                <textarea placeholder="Description" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="p-2 border rounded col-span-2" rows="3" required></textarea>
              </div>
              <div className="mt-4 flex gap-2">
                {editItem ? (
                  <>
                    <button onClick={handleSave} className="bg-primary text-white px-6 py-2 rounded">Save</button>
                    <button onClick={() => { setEditItem(null); setFormData({ title: "", price: "", category: "", ingredients: "", description: "", image: "" }); }} className="bg-gray-500 text-white px-6 py-2 rounded">Cancel</button>
                  </>
                ) : (
                  <button onClick={handleAdd} className="bg-primary text-white px-6 py-2 rounded">Add Item</button>
                )}
              </div>
            </div>
            
            <div className="bg-white rounded shadow overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 text-left">Image</th>
                    <th className="p-3 text-left">Title</th>
                    <th className="p-3 text-left">Price</th>
                    <th className="p-3 text-left">Category</th>
                    <th className="p-3 text-left">Ingredients</th>
                    <th className="p-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {menuItems.map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="p-3">{item.image && <img src={item.image} alt={item.title} className="h-16 w-16 object-cover rounded" />}</td>
                      <td className="p-3">{item.title}</td>
                      <td className="p-3">{item.price}</td>
                      <td className="p-3">{item.category}</td>
                      <td className="p-3">{item.ingredients}</td>
                      <td className="p-3">
                        <button onClick={() => handleEdit(item)} className="bg-blue-500 text-white px-3 py-1 rounded mr-2">Edit</button>
                        <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
