import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <h1
        style={{
          backgroundColor: "tomato",
          fontSize: "40px",
          color: "white",
          padding: "10px",
          width: "50%",
          margin: "auto",
          textAlign: "center",
          borderRadius: "20px",
          marginTop: "40px",
        }}
      >
        Travelpio
      </h1>
      <div
        style={{
          display: "flex",
          width: "40%",
          margin: "auto",
          marginTop: "20px",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{
            background: "none",
            borderRadius: "10px",
            border: "1px solid blue",
            padding: "10px",

            width: "30%",
          }}
        >
          <Link
            to="/form"
            style={{
              color: "blue",
              fontSize: "15px",
              textDecorationLine: "none",
            }}
          >
            Form
          </Link>
        </button>
        <button
          style={{
            background: "none",
            borderRadius: "10px",
            border: "1px solid blue",
            padding: "10px",

            width: "40%",
          }}
        >
          <Link
            to="/dashboard"
            style={{
              color: "blue",
              fontSize: "15px",
              textDecorationLine: "none",
            }}
          >
            Dashboard
          </Link>
        </button>
      </div>
    </div>
  );
}
