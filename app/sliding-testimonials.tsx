"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Twitter } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Testimonial } from "@/app/page";
import { motion, useAnimationControls } from "framer-motion";

export function SlidingTestimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clone the first few items and append them to create a seamless loop
    const content = container.querySelector(".content") as HTMLElement;
    if (!content) return;

    const items = content.querySelectorAll(".testimonial-card");
    const clonedItems = Array.from(items)
        .slice(0, 3)
        .map((item) => item.cloneNode(true));

    clonedItems.forEach((item) => content.appendChild(item));
  }, []);

  useEffect(() => {
    if (isPaused) {
      controls.stop();
    } else {
      controls.start("animate")
    }
  }, [isPaused, controls]);

  return (
      <div className="w-full overflow-hidden py-12">
        <motion.div
            ref={containerRef}
            className="relative w-full flex gap-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            animate={controls}
            variants={{
              animate: {
                x: ["0%", "-100%"],
                transition: {
                  repeat: Infinity,
                  ease: "linear",
                  duration: 40,
                },
              },
            }}
        >
          {/* Original testimonials */}
          {testimonials.map((testimonial, index) => (
              <Card
                  key={index}
                  className="testimonial-card w-[350px] flex-shrink-0 bg-white dark:bg-zinc-950"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                            .split("")
                            .map((n) => n[0])
                            .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <div className="text-sm font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-zinc-500 dark:text-zinc-400">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-zinc-950 dark:text-zinc-50">{testimonial.content}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-emerald-500">
                    <Twitter className="h-4 w-4" />
                    Shared on Twitter
                  </div>
                </CardContent>
              </Card>
          ))}

          {/* Cloned testimonials to create seamless marquee */}
          {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card
                  key={`cloned-${index}`}
                  className="testimonial-card w-[350px] flex-shrink-0 bg-white dark:bg-zinc-950"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                            .split("")
                            .map((n) => n[0])
                            .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <div className="text-sm font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-zinc-500 dark:text-zinc-400">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-zinc-950 dark:text-zinc-50">{testimonial.content}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-emerald-500">
                    <Twitter className="h-4 w-4" />
                    Shared on Twitter
                  </div>
                </CardContent>
              </Card>
          ))}
        </motion.div>
      </div>
  );
}
