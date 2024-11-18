"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Twitter } from "lucide-react";
import { useState } from "react";
import { Testimonial } from "@/app/page";
import {Button} from "@/components/ui/button";
import {motion, AnimatePresence} from "framer-motion";

export function SlidingTestimonials({ testimonials }: { testimonials: Testimonial[] }) {
    const [showAll, setShowAll] = useState(false)
    // Animation variants
    const testimonialVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 },
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6 text-center">What Our Customers Say</h2>
            <div className="relative">
                <motion.div
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                        exit: {
                            transition: {
                                staggerChildren: 0.1,
                                staggerDirection: -1,
                            },
                        },
                    }}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
                >
                    <AnimatePresence>
                        {(showAll ? testimonials : testimonials.slice(0, 4)).map((testimonial, index) => (
                            <motion.div
                                key={index}
                                variants={testimonialVariants}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                layout // This prop enables smooth layout transitions
                            >
                                <Card className="bg-zinc-900 text-white border-zinc-800">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-3 mb-3">
                                            <Avatar className="h-10 w-10 rounded-full">
                                                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                                <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <h3 className="font-semibold text-white">{testimonial.name}</h3>
                                                <p className="text-sm text-zinc-400">{testimonial.company}</p>
                                            </div>
                                        </div>
                                        <p className="text-zinc-100 mb-4">{testimonial.content}</p>
                                        <div className="flex items-center gap-2 text-emerald-500">
                                            <Twitter className="h-4 w-4" />
                                            <span className="text-sm">Shared on Twitter</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
                {!showAll && (
                    <div
                        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"
                        aria-hidden="true"
                    ></div>
                )}
            </div>
            <div className="text-center">
                <Button
                    onClick={() => setShowAll(!showAll)}
                    variant="outline"
                    className="bg-zinc-900 text-white hover:bg-zinc-800"
                >
                    {showAll ? "Show Less" : "View More Testimonials"}
                </Button>
            </div>
        </div>
    );
}
