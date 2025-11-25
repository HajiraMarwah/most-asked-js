import React, { useState } from "react";
const usersData = [
  { id: 1, name: "Hajira", city: ["Bangalore", "Mangalore", "Ueupi"] },
  { id: 2, name: "Marwah", city: ["Pune", "Bangalore", "Siri"] },
  { id: 3, name: "Anaya", city: ["Delhi", "Bangalore", "Manali"] },
];
function App() {
  const [data, setData] = useState(usersData);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState("asc");
  const filteredUsers = data.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.city.some((c) => c.toLowerCase().includes(search.toLowerCase()))
  );
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    return sorting === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });
  const toggleSort = () => {
    setSorting(sorting === "asc" ? "dsc" : "asc");
  };

  return (
    <div>
      <h1>Users</h1>
      <input
        style={{ padding: "4px", marginBottom: "6px" }}
        type="text"
        placeholder="Search by name or cities"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        style={{ borderRadius: "8px", marginLeft: "3px", padding: "4px" }}
        onClick={toggleSort}
      >
        Sort:({sorting === "asc" ? "A-Z" : "Z-A"})
      </button>
      <table style={{ borderCollapse: "collapse", padding: "5px" }}>
        <thead>
          <th style={{ border: "1px solid #ccc" }}>ID</th>
          <th style={{ border: "1px solid #ccc" }}>Name</th>
          <th style={{ border: "1px solid #ccc" }}>Cities</th>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr>
              <td style={{ border: "1px solid #ccc" }}>{user.id}</td>
              <td style={{ border: "1px solid #ccc" }}>{user.name}</td>
              <td style={{ border: "1px solid #ccc" }}>
                {user.city.join(",")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
