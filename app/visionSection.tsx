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
                            Our Mission: <span className="text-sleek-green">make the internet accessible, inclusive & equitable</span>
                        </h3>
                        <p className="text-xl text-[#A1A1AA] mb-8">
                            From buying Jordans to paying taxes or pursuing remote learning, the web powers so
                            much of our daily lives. Yet, 25% of the population still face barriers due to disabilities
                            that limit their access to these essential online services.
                        </p>
                        <div className="flex items-center mb-8">
                            <Image
                                src="/images/munachi-profile.jpg"
                                alt="Shir Ekerling"
                                width={100}
                                height={80}
                                className="rounded-full mr-4 object-cover h-16"
                            />
                            <div>
                                <blockquote className="text-lg font-semibold mb-2">
                                    &quot;25 years ago, we dreamt of a connected future and got the internet but 25% of
                                    us are still being left out of it.&quot;
                                </blockquote>
                                <p className="text-sleek-green">Munachi Ernest-Eze <span className="text-[#A1A1AA]">Founder @ InclusiveX</span>
                                </p>
                            </div>
                        </div>
                        <Button variant="outline"
                                className="text-sleek-green border-sleek-green hover:bg-sleek-green hover:text-black">
                            MORE ON OUR VISION <ChevronRight className="ml-2 h-4 w-4"/>
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