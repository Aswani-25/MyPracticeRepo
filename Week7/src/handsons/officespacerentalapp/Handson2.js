import React from "react";


const offices = [
  { name: "Alpha Tower", rent: 55000, address: "Delhi", image: "/images/office.jpg" },
  { name: "Beta Building", rent: 72000, address: "Mumbai", image: "/images/office1.jpeg" },
  { name: "Gamma Plaza", rent: 61000, address: "Chennai", image: "/images/office2.jpeg" }
];

function Handson2() {
  return (
    <div>
      <h2>Office Space, At Affordable Range</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {offices.map((o, i) => (
          <div key={i} style={{ 
            border: "1px solid #ccc", 
            padding: "10px", 
            width: "300px", 
            color: o.rent > 60000 ? "green" : "red" 
          }}>
            <img 
              src={o.image} 
              alt={o.name} 
              style={{ width: "100%", height: "200px", objectFit: "cover" }} 
            />
            <h3>Name: {o.name}</h3>
            <h3>Rent: ₹{o.rent}</h3>
            <h3>Address: {o.address}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Handson2;
