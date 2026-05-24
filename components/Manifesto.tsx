"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Manifesto() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (textRef.current) {
      const chars = textRef.current.innerText.split("");
      textRef.current.innerText = "";
      
      chars.forEach((char) => {
        const span = document.createElement("span");
        span.innerText = char;
        span.style.opacity = "0.1";
        textRef.current?.appendChild(span);
      });

      gsap.to(textRef.current.children, {
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 40%",
          scrub: 1,
        }
      });
    }
  }, []);

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-4 md:px-20 py-32">
      <div className="max-w-5xl mx-auto text-center">
        <h2 
          ref={textRef}
          className="text-4xl md:text-7xl font-display font-bold leading-tight uppercase"
        >
          We are not just riders, we are a brotherhood.
        </h2>
      </div>
    </section>
  );
}