import React, { useEffect, useState } from "react";
import "./Bee.css"; // Import CSS

const Bee = ({ id }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const speed = 1; // Speed of movement (pixels per update)
  const changeDirectionInterval = 1000; // Change direction every second

  useEffect(() => {
    const moveBee = () => {
      // Update position based on current velocity
      setPosition((prevPosition) => ({
        top: Math.max(
          0,
          Math.min(window.innerHeight - 50, prevPosition.top + velocity.y)
        ),
        left: Math.max(
          0,
          Math.min(window.innerWidth - 50, prevPosition.left + velocity.x)
        ),
      }));
    };

    const interval = setInterval(moveBee, 20); // Update position every 20ms

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [velocity]);

  useEffect(() => {
    const changeDirection = () => {
      // Randomly change the velocity direction
      const angle = Math.random() * 2 * Math.PI; // Random angle
      setVelocity({
        x: speed * Math.cos(angle),
        y: speed * Math.sin(angle),
      });
    };

    changeDirection(); // Initial direction change
    const directionInterval = setInterval(
      changeDirection,
      changeDirectionInterval
    ); // Change direction every second

    return () => clearInterval(directionInterval); // Clean up direction interval on unmount
  }, [changeDirectionInterval]);

  return (
    <svg
      className="bee"
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        transition: "top 0.02s, left 0.02s", // Smooth transition for position changes
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="50"
      height="50"
    >
      <defs>
        <filter id="blur" x="0" y="0">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
        </filter>
        <filter id="glow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
          <feFlood floodColor="yellow" />
          <feComposite in2="blur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g fill="none" stroke="black" strokeWidth="2">
        <ellipse cx="100" cy="100" rx="50" ry="30" fill="yellow" />
        <ellipse cx="100" cy="100" rx="30" ry="20" fill="black" />
        <ellipse cx="70" cy="90" rx="10" ry="15" fill="black" />
        <ellipse cx="130" cy="90" rx="10" ry="15" fill="black" />
        <ellipse cx="100" cy="130" rx="40" ry="20" fill="black" />
        <path
          d="M 100 70 C 80 60, 80 40, 100 40 C 120 40, 120 60, 100 70 Z"
          fill="black"
        />
        <path
          d="M 100 70 C 120 60, 120 40, 100 40 C 80 40, 80 60, 100 70 Z"
          fill="yellow"
        />
        {/* Wings with blur effect */}
        <ellipse
          cx="70"
          cy="90"
          rx="10"
          ry="15"
          fill="black"
          filter="url(#blur)"
        />
        <ellipse
          cx="130"
          cy="90"
          rx="10"
          ry="15"
          fill="black"
          filter="url(#blur)"
        />
      </g>
    </svg>
  );
};

const BeeContainer = () => {
  const bees = Array.from({ length: 20 }); // Create an array for 10 bees

  return (
    <div>
      {bees.map((_, index) => (
        <Bee key={index} id={index} />
      ))}
    </div>
  );
};

export default BeeContainer;
