"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Twitter } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Testimonial } from "@/app/page";
import { motion } from "framer-motion";

export function SlidingTestimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
    // Calculate the total width to animate across
    const testimonialWidth = 350; // Width of each testimonial card in pixels
    const gap = 24; // Gap between each card, equivalent to 1.5rem in pixels
    const itemCount = testimonials.length;

    // Calculate total distance to scroll, using JavaScript
    const totalScrollDistance =-(testimonialWidth * itemCount + gap * itemCount);
    useEffect(() => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        if (darkThemeMq.matches) {
            // Theme set to dark.
            console.log("Dark theme");
        } else {
            // Theme set to light.
            console.log("Light theme");
        }

    }, []);


    const clonedTestimonials = testimonials.slice(0, 5);
  return (
      <div className="w-full overflow-hidden py-12">
        <motion.div
            ref={containerRef}
            className="relative w-full flex gap-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            initial={{ x: 0 }}
            animate={isPaused ? { x: 0 } : { x: [0, totalScrollDistance] }}
            transition={{
                repeat: isPaused ? 0 : Infinity,
                ease: "linear",
                duration: 40,
            }}
        >
          {/* Original testimonials */}
          {[...testimonials, ...clonedTestimonials].map((testimonial, index) => (
              <Card
                  key={index}
                  className="w-[350px] flex-shrink-0 bg-gradient-to-br from-[#2A2C35] to-[#1E2028]"
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
                      <div className="text-sm font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-white dark:text-zinc-400">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-white">{testimonial.content}</p>
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
