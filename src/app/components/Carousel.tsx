import React, { useEffect, useState } from "react";

function Carousel() {
  const items = ["Get", "Your", "Last", "100", "SOL", "Transactions"];
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-52 text-zinc-400 md:my-14">
      <div className="relative h-full flex items-center justify-center">
        {items.map((item, index) => (
          <h2
            key={item}
            className={`absolute h-24 font-display text-6xl cursor-default text-edge-outline md:text-8xl whitespace-nowrap duration-1000 font-semibold tracking-tight text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 via-zinc-100/80 to-white ${
              index !== activeIndex
                ? "translate-y-full opacity-0"
                : "translate-y-0 opacity-100 transition-all"
            }`}
            style={{ top: index === activeIndex ? "3rem" : "0" }}
          >
            {item}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
