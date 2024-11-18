'use client'
import {ReactNode} from "react"
import {motion} from "framer-motion"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import VisionSection from "@/app/visionSection";
import {Header, FeaturesComponent} from "@/app/pageForClientRendering";

import {
    Activity,
    BarChart,
    ChevronRight,
    FileText,
    GitBranch,
    Search,
    Zap,
} from "lucide-react"
import {demoUrl} from "@/constants/urls";
import {SlidingTestimonials} from "@/app/sliding-testimonials";

const sleekGreen = "#00FF94"

type ComplianceBadge = {
    name: string
    fullName: string
}

type Offering = {
    icon: ReactNode
    title: string
    description: string
}

export type Testimonial = {
    name: string
    company: string
    avatar: string
    content: string
}

export default function LandingPage() {


    const offerings: Offering[] = [
        {
            icon: <FileText className="w-8 h-8 text-sleek-green"/>,
            title: "AI-Powered Compliance Engine",
            description: "Our cutting-edge AI continuously scans and fixes accessibility violations, ensuring 24/7 compliance.",
        },
        {
            icon: <Search className="w-8 h-8 text-sleek-green"/>,
            title: "Comprehensive Accessibility Checker",
            description: "Instantly identify and diagnose WCAG compliance issues across your entire digital ecosystem.",
        },
        {
            icon: <Activity className="w-8 h-8 text-sleek-green"/>,
            title: "Real-time Accessibility Monitoring",
            description: "Proactively track and manage accessibility concerns with detailed insights for your development team.",
        },
        {
            icon: <BarChart className="w-8 h-8 text-sleek-green"/>,
            title: "Expert-led Accessibility Audits",
            description: "Receive comprehensive WCAG and ADA compliance audits from our team of certified accessibility experts.",
        },
        {
            icon: <FileText className="w-8 h-8 text-sleek-green"/>,
            title: "VPAT & ACR Generation",
            description: "Easily create and maintain up-to-date Voluntary Product Accessibility Templates and Accessibility Conformance Reports.",
        },
        {
            icon: <FileText className="w-8 h-8 text-sleek-green"/>,
            title: "Document Accessibility Conversion",
            description: "Transform your existing documents into fully accessible formats, compliant with the latest standards.",
        },
        {
            icon: <GitBranch className="w-8 h-8 text-sleek-green"/>,
            title: "Integrated CI/CD Accessibility Checks",
            description: "Seamlessly integrate accessibility testing into your development workflow for continuous compliance.",
        },
    ]

    const complianceBadges: ComplianceBadge[] = [
        {name: "ADA", fullName: "Americans with Disabilities Act"},
        {name: "WCAG", fullName: "Web Content Accessibility Guidelines"},
        {name: "EN 301 549", fullName: "European Standard for ICT Accessibility Requirements"},
        {name: "EAA", fullName: "European Accessibility Act"},
        {name: "GDPR", fullName: "General Data Protection Regulation"},
        {name: "UNRUH", fullName: "Unruh Civil Rights Act"},
    ]

    const testimonials: Testimonial[] = [
        {
            name: "John Maverick",
            company: "Shopify",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
            content: "UX+ has revolutionized our approach to web accessibility. It's a game-changer!",
        },
        {
            name: "Emily Parker",
            company: "TechNova",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
            content: "The AI-powered fixes have saved us countless hours. Highly recommended for any dev team.",
        },
        {
            name: "Alex Johnson",
            company: "WebWizards",
            avatar: "https://randomuser.me/api/portraits/men/3.jpg",
            content: "UX+'s real-time monitoring has helped us maintain WCAG compliance effortlessly.",
        },
        {
            name: "Sophia Martinez",
            company: "InnovateX",
            avatar: "https://randomuser.me/api/portraits/women/4.jpg",
            content: "Thanks to UX+, our design team can now focus on creativity while accessibility is handled automatically.",
        },
        {
            name: "Ethan Turner",
            company: "DevPeak",
            avatar: "https://randomuser.me/api/portraits/men/5.jpg",
            content: "This tool has been invaluable in keeping our web apps compliant without extra overhead.",
        },
        {
            name: "Olivia Green",
            company: "SoftSolutions",
            avatar: "https://randomuser.me/api/portraits/women/6.jpg",
            content: "UX+ made our platform more accessible, and we’ve noticed improved user engagement since integrating it.",
        },
        {
            name: "Liam Brown",
            company: "NextGenTech",
            avatar: "https://randomuser.me/api/portraits/men/7.jpg",
            content: "A must-have for any serious dev team. Accessibility is no longer an afterthought.",
        },
        {
            name: "Emma Wilson",
            company: "UIWorks",
            avatar: "https://randomuser.me/api/portraits/women/8.jpg",
            content: "Our accessibility audits have never been smoother thanks to UX+.",
        },
        {
            name: "Benjamin Lee",
            company: "CodeCraft",
            avatar: "https://randomuser.me/api/portraits/men/9.jpg",
            content: "I can’t imagine managing our site’s compliance without UX+ anymore.",
        },
        {
            name: "Grace Collins",
            company: "AccessNow",
            avatar: "https://randomuser.me/api/portraits/women/10.jpg",
            content: "Finally, a product that makes accessibility not just easy, but proactive!",
        },
    ]

    return (
        <div
            className="flex flex-col min-h-screen bg-gradient-to-b from-[#0A0B0D] to-[#1E2028] text-white relative" >
            <DottedBackground/>
            <Header/>
            <main className="flex-grow relative">
                <HeroSection/>
                <FeaturesComponent/>
                <PowerSection/>
                <OfferingsSection offerings={offerings}/>
                <VisionSection/>
                <ComplianceSection complianceBadges={complianceBadges}/>
                <AccessibilityCheckerSection/>
                <TestimonialsSection testimonials={testimonials}/>
                <CTASection/>
            </main>
        </div>
    )
}

function DottedBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill={sleekGreen} fillOpacity="0.2"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dotPattern)"/>
            </svg>
        </div>
    )
}

function HeroSection() {
    return (
        <section className="py-20 px-4 overflow-hidden">
            <motion.div
                className="container mx-auto text-center"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                    100% Digital Accessibility Compliance For Your Website
                </h1>
                <p className="text-xl md:text-2xl text-[#A1A1AA] mb-8 max-w-3xl mx-auto">
                    Empower your web presence with UX+. Our AI-driven platform instantly identifies and resolves
                    accessibility issues, ensuring a seamless experience for every user.
                </p>
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.4}}
                    className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <motion.div
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        className="relative"
                    >
                        <motion.div
                            className="absolute inset-0 rounded-lg"
                            animate={{
                                boxShadow: [
                                    "0 rgba(0, 255, 148, 0)",
                                    "0 10px rgba(0, 255, 148, 0.1)",
                                    "0 20px rgba(0, 255, 148, 0)",
                                ],
                            }}
                            transition={{duration: 1.5, repeat: Infinity}}
                        />
                        <Button size="lg"
                                className="dark:bg-[#00FF94] text-black dark:hover:bg-[#00CC75] font-semibold">
                            <a href="/coming-soon">Start Your Accessibility Journey</a>
                        </Button>
                    </motion.div>
                    <Button size="lg" variant="outline"
                            className="bg-dark-theme text-white border-[#1E2028] hover:bg-[#E2E8F0]">
                        <a href={demoUrl}> Schedule a Demo With Us</a>
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    )
}

function PowerSection() {
    return (
        <section className="py-20 px-4 bg-gradient-to-r from-[#1E2028] to-[#2A2C35]">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
                    Experience the Power of UX+
                </h2>
                <motion.div
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.8}}
                    className="bg-[#0A0B0D] p-8 rounded-lg shadow-lg relative overflow-hidden"
                >
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                    </div>
                    <pre className="text-sm text-[#E2E8F0] overflow-x-auto">
            <code>{`// Harness the power of UX+
import { UXPlus } from 'uxplus';

const app = new UXPlus();

app.scan('#main-content').then(issues => {
  console.log('Accessibility issues detected:', issues);
  app.fix(issues).then(results => {
    console.log('Resolved accessibility concerns:', results);
  });
});`}</code>
          </pre>
                    <motion.div
                        animate={{
                            background: [
                                `linear-gradient(0deg, ${sleekGreen}00 0%, ${sleekGreen}00 100%)`,
                                `linear-gradient(0deg, ${sleekGreen}22 0%, ${sleekGreen}00 100%)`,
                                `linear-gradient(0deg, ${sleekGreen}00 0%, ${sleekGreen}00 100%)`
                            ]
                        }}
                        transition={{duration: 2, repeat: Infinity, repeatType: "reverse"}}
                        className="absolute inset-0 pointer-events-none"
                    />
                </motion.div>
            </div>
        </section>
    )
}

function OfferingsSection({offerings}: { offerings: Offering[] }) {
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-[#1E2028] to-[#0A0B0D]">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
                    Comprehensive Accessibility Solutions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offerings.map((offering, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: index * 0.1}}
                            className="bg-gradient-to-br from-[#2A2C35] to-[#1E2028] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-center justify-center mb-4">
                                {offering.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-center text-white">{offering.title}</h3>
                            <p className="text-[#A1A1AA] text-center">{offering.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function ComplianceSection({complianceBadges}: { complianceBadges: ComplianceBadge[] }) {
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-[#0A0B0D] to-[#1E2028]">
            <div className="container mx-auto text-center">
                <motion.h2
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="text-3xl md:text-4xl font-bold mb-8 text-white"
                >
                    Stay Ahead of Global Accessibility Standards
                </motion.h2>
                <motion.p
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.2}}
                    className="text-xl text-[#A1A1AA] mb-12 max-w-3xl mx-auto"
                >
                    Our cutting-edge technology and expert services ensure continuous alignment with the latest
                    accessibility regulations across the U.S., Canada, and Europe. We adhere to the highest global
                    compliance standards for digital assets, including WCAG 2.2 and EN 301 549.
                </motion.p>
                <div className="flex flex-wrap justify-center gap-8">
                    {complianceBadges.map((badge, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center w-40 h-40 rounded-full bg-green-900 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            {/* Curved Text */}
                            <div className="absolute w-40 h-40 flex items-center justify-center text-center">
                                <svg viewBox="0 0 200 200" >
                                    <defs>
                                        <path
                                            id="textPath"
                                            d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                                        />
                                    </defs>
                                    <text fill="white" fontSize="14" fontWeight="bold">
                                        <textPath xlinkHref="#textPath" textAnchor="start" startOffset="0%">
                                            {badge.fullName.toUpperCase()}
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                            <div className="flex items-center justify-center w-28 h-28 rounded-full bg-white text-gray-900">
                                <div className="text-center px-2">
                                    <div className="font-bold text-md mb-1">{badge.name}</div>
                                    <div className="text-sm">Compliance</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12">
                    <Button variant="default"
                            className="border-sleek-green hover:bg-sleek-green">
                        Explore Our Compliance Standards <ChevronRight className="ml-2 h-4 w-4"/>
                    </Button>
                </div>
            </div>
        </section>
    )
}

function AccessibilityCheckerSection() {
    return (
        <section className="py-20 px-4 bg-gradient-to-r from-[#1E2028] to-[#2A2C35]">
            <div className="container mx-auto">
                <div className="bg-gradient-to-r from-[#0A0B0D] to-[#1E2028] rounded-lg p-8 md:p-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
                        Evaluate Your Website&#39;s Accessibility - Free of Charge
                    </h2>
                    <p className="text-xl text-[#A1A1AA] mb-8 text-center max-w-2xl mx-auto">
                        Our Accessibility Checker swiftly identifies ADA & WCAG compliance issues, providing an instant
                        diagnosis of potential violations and areas for improvement.
                    </p>
                    <div
                        className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                        <Input
                            type="url"
                            placeholder="Enter your website URL"
                            className="w-full md:w-96 rounded-md placeholder-gray-600"
                        />
                        <Button className="dark:bg-sleek-green dark:hover:bg-[rgba(0,255,148,0.6)] w-full md:w-auto">
                            Start Free Accessibility Check
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

function TestimonialsSection({testimonials}: { testimonials: Testimonial[] }) {
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-[#1E2028] to-[#0A0B0D]">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
                    Voices of Satisfied Clients
                </h2>
                <SlidingTestimonials testimonials={testimonials} />
            </div>
        </section>
    )
}

function CTASection() {
    return (
        <section className="py-20 px-4 bg-gradient-to-r from-[#0A0B0D] to-[#1E2028] relative overflow-hidden">
            <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                    background: [
                        `radial-gradient(circle at center, ${sleekGreen}22 0%, ${sleekGreen}00 50%)`,
                        `radial-gradient(circle at center, ${sleekGreen}44 0%, ${sleekGreen}00 50%)`,
                        `radial-gradient(circle at center, ${sleekGreen}22 0%, ${sleekGreen}00 50%)`
                    ]
                }}
                transition={{duration: 4, repeat: Infinity, repeatType: "reverse"}}
            />
            <div className="container mx-auto text-center">
                <motion.h2
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="text-3xl md:text-4xl font-bold mb-8 text-white"
                >
                    Elevate Your Digital Accessibility Today
                </motion.h2>
                <motion.p
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.2}}
                    className="text-xl text-[#A1A1AA] mb-12 max-w-3xl mx-auto"
                >
                    Join the ranks of forward-thinking developers and businesses creating truly inclusive digital
                    experiences with UX+. Your journey towards a more accessible web starts here.
                </motion.p>
                <motion.div
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.8, delay: 0.4}}
                >
                    <motion.div
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        className="relative inline-block"
                    >
                        <motion.div
                            className="absolute inset-0 rounded-lg"
                            animate={{
                                boxShadow: [
                                    "0 rgba(0, 255, 148, 0)",
                                    "0 10px rgba(0, 255, 148, 0.1)",
                                    "0 20px rgba(0, 255, 148, 0)",
                                ],
                            }}
                            transition={{duration: 1.5, repeat: Infinity}}
                        />
                        <Button size="lg"
                                className="dark:bg-[#00FF94] dark:hover:bg-[#00CC75] font-semibold">
                            <Zap className="mr-2 h-4 w-4"/>
                            <a href="/coming-soon">Start Free Trial</a>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}