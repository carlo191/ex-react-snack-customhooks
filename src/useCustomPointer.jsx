import React, { useEffect, useState } from "react";
export default function useCustomPointer(emoji) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <span
      style={{
        position: "fixed",
        left: coords.x,
        top: coords.y,
        transform: "translate(-50%, -50%)",
        cursor: "none",
      }}
    >
      {emoji}
    </span>
  );
}
