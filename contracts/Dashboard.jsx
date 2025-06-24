import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/assets")
      .then(res => setAssets(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">My Assets</h1>
      <ul>
        {assets.map(asset => (
          <li key={asset._id}>{asset.name} - {asset.value} CFA</li>
        ))}
      </ul>
    </div>
  );
}
