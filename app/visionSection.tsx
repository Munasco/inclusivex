import Image from "next/image";
import {Button} from "@/components/ui/button";
import {ChevronRight} from "lucide-react";
const teamImages = [
    {
        src: "https://images.unsplash.com/photo-1507152927179-bc4ebfef7103?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
        alt: "Team member 1",
        className: "rounded-full absolute top-10 left-24 object-cover w-16 h-16",
    },
    {
        src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
        alt: "Team member 2",
        className: "rounded-full absolute top-20 right-16 object-cover w-16 h-16",
    },
    {
        src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
        alt: "Team member 3",
        className: "rounded-full absolute bottom-20 left-20 object-cover w-10 h-10",
    },
    {
        src: "https://images.unsplash.com/photo-1573497019236-17dd59b5fa20?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
        alt: "Team member 4",
        className: "rounded-full absolute bottom-10 right-10",
    },
];

export default function VisionSection() {
    return (
        <section className="py-20 px-4 bg-gradient-to-r from-[#1E2028] to-[#2A2C35] relative overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        <h2 className="text-sleek-green text-xl font-semibold mb-4">MAKING THE WORLD MORE INCLUSIVE</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">
                            Our vision: <span className="text-sleek-green">to make the internet accessible, inclusive & equitable</span>
                        </h3>
                        <p className="text-xl text-[#A1A1AA] mb-8">
                            We live our lives online. It's where we read the news, order groceries, and connect with people. But 20% of the population has disabilities that exclude them from using it. InclusiveX's goal is to make the online world inclusive. It's about time!
                        </p>
                        <div className="flex items-center mb-8">
                            <Image
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                                alt="Shir Ekerling"
                                width={60}
                                height={60}
                                className="rounded-full mr-4"
                            />
                            <div>
                                <blockquote className="text-lg font-semibold mb-2">
                                    &quot;Sustainable web accessibility is not just for businesses but first and foremost for users with disabilities.&quot;
                                </blockquote>
                                <p className="text-sleek-green">Munachi Ernest-Eze <span className="text-[#A1A1AA]">Founder @ InclusiveX</span></p>
                            </div>
                        </div>
                        <Button variant="outline" className="text-sleek-green border-sleek-green hover:bg-sleek-green hover:text-black">
                            MORE ON OUR VISION <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <svg className="w-full h-auto" viewBox="0 0 500 500" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="250" cy="250" r="240" stroke="green" strokeWidth="2" strokeDasharray="4 4"/>
                            <circle cx="250" cy="250" r="180" stroke="green" strokeWidth="2"/>
                            <circle cx="250" cy="250" r="120" stroke="green" strokeWidth="2" strokeDasharray="8 8"/>
                            {/*<circle cx="250" cy="250" r="60" fill="green" fillOpacity="0.2"/>*/}
                            <path d="M190 190 L310 310 M310 190 L190 310" stroke="white" strokeWidth="4"/>
                        </svg>
                        {teamImages.map((image, index) => (
                            <Image
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                width={60}
                                height={60}
                                className={image.className}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}