'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Zap, Search, Activity, Twitter, ShieldCheck, Brain, PlugZap} from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function LandingPageComponent() {
    const [showAnimation, setShowAnimation] = useState(false)

    useEffect(() => {
        setShowAnimation(true)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    const features = [
        {
            icon: <Zap className="w-10 h-10 text-[#00FF94]" />,
            title: "Comprehensive Lightning-Fast Scans",
            description: "Detect issues quickly and thoroughly.\n",
        },
        {
            icon: <Brain className="w-10 h-10 text-[#00FF94]" />,
            title: "AI-Powered Fixes",
            description: "Smart suggestions for quick resolutions",
        },
        {
            icon: <ShieldCheck className="w-10 h-10 text-[#00FF94]" />,
            title: "WCAG Compliance",
            description: "Ensure your site meets accessibility standards",
        },
        {
            icon: <PlugZap className="w-10 h-10 text-[#00FF94]" />,
            title: "Seamless Integration",
            description: "Works with your existing workflow",
        },
    ]

    const offerings = [
        {
            icon: <Zap className="w-10 h-10 text-[#00FF94]" />,
            title: "Comprehensive Error Detection",
            description: "Detect accessibility issues in webpages and Figma designs with precision.",
        },
        {
            icon: <Search className="w-10 h-10 text-[#00FF94]" />,
            title: "AI-Powered Improvements",
            description: "Automated compliance fixes for identified accessibility issues.",
        },
        {
            icon: <Activity className="w-10 h-10 text-[#00FF94]" />,
            title: "Ongoing Monitoring",
            description: "Continuous website monitoring with automated workflows to address new problems.",
        },
    ]

    const testimonials = [
        {
            name: "John Maverick",
            company: "Shopify",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
            content: "InclusiveX has revolutionized our approach to web accessibility. It's a game-changer!",
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
            content: "InclusiveX's real-time monitoring has helped us maintain WCAG compliance effortlessly.",
        },
        {
            name: "Sophia Martinez",
            company: "InnovateX",
            avatar: "https://randomuser.me/api/portraits/women/4.jpg",
            content: "Thanks to InclusiveX, our design team can now focus on creativity while accessibility is handled automatically.",
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
            content: "InclusiveX made our platform more accessible, and we’ve noticed improved user engagement since integrating it.",
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
            content: "Our accessibility audits have never been smoother thanks to InclusiveX.",
        },
        {
            name: "Benjamin Lee",
            company: "CodeCraft",
            avatar: "https://randomuser.me/api/portraits/men/9.jpg",
            content: "I can’t imagine managing our site’s compliance without InclusiveX anymore.",
        },
        {
            name: "Grace Collins",
            company: "AccessNow",
            avatar: "https://randomuser.me/api/portraits/women/10.jpg",
            content: "Finally, a product that makes accessibility not just easy, but proactive!",
        },
    ]
    return (
        <div className="flex flex-col min-h-screen bg-[#0A0B0D] text-white relative overflow-hidden">
            <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                    background: [
                        "radial-gradient(circle, rgba(0,255,148,0) 0%, 100%)",
                        "radial-gradient(circle, rgba(0,255,148,0.1) 0%, rgba(0,255,148,0) 70%)",
                        "radial-gradient(circle, rgba(0,255,148,0) 0%, 100%)"
                    ]
                }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            />
            <header className="border-b border-[#1E2028] relative z-10">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold text-white flex items-center">
                        <svg className="w-8 h-8 mr-2" viewBox="0 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 2Z" fill="#00FF94" />
                            <path d="M2 17L12 22L22 17" stroke="#00FF94" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 12L12 17L22 12" stroke="#00FF94" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        InclusiveX
                    </Link>
                    <nav className="hidden md:flex space-x-6">
                        <Link href="#" className="text-[#A1A1AA] hover:text-white transition-colors">
                            Documentation
                        </Link>
                        <Link href="#" className="text-[#A1A1AA] hover:text-white transition-colors">
                            Pricing
                        </Link>
                        <Link href="#" className="text-[#A1A1AA] hover:text-white transition-colors">
                            Blog
                        </Link>
                        <Link href="#" className="text-[#A1A1AA] hover:text-white transition-colors">
                            Careers
                        </Link>
                        <Link href="#" className="text-[#A1A1AA] hover:text-white transition-colors">
                            Demo
                        </Link>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" className="text-[#A1A1AA] hover:text-gray-700">
                            Login
                        </Button>
                        <Button className="bg-[#00FF94] text-black hover:bg-[#00CC75]">Get Started</Button>
                    </div>
                </div>
            </header>
            <main className="flex-grow relative z-10">
                <section className="py-20 px-4">
                    <div className="container mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-bold mb-6 text-white"
                        >
                            Achieve Full Accessibility Compliance for Your Website
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-[#A1A1AA] mb-8 max-w-3xl mx-auto"
                        >
                            Instantly identify and resolve accessibility issues. Deliver a flawless experience to every user, with ease.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex justify-center space-x-4"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
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
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                                <Button size="lg" className="bg-[#00FF94] text-black hover:bg-[#00CC75] font-semibold relative z-10">
                                    Start Detecting
                                </Button>
                            </motion.div>
                            <Button size="lg" variant="outline" className="bg-dark-theme text-white border-[#1E2028] hover:bg-[#E2E8F0]">
                                Request a Demo
                            </Button>
                        </motion.div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate={showAnimation ? "visible" : "hidden"}
                            className="grid grid-cols-1 md:grid-cols-4 gap-8"
                        >
                            {features.map((feature, index) => (
                                <motion.div key={index} variants={itemVariants} className="bg-[#1E2028] p-6 rounded-lg shadow-lg">
                                    <div className="flex items-center justify-center mb-4">
                                        {feature.icon}
                                    </div>
                                    <h1 className="text-xl font-semibold mb-2 text-center text-white">{feature.title}</h1>
                                    <p className="text-[#A1A1AA] text-center">{feature.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <section className="py-20 px-4">
                    <div className="container mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
                            Experience the power of InclusiveX
                        </h2>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#1E2028] p-8 rounded-lg shadow-lg relative overflow-hidden"
                        >
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                            </div>
                            <pre className="text-sm text-[#E2E8F0] overflow-x-auto">
                <code>{`// Example of InclusiveX in action
import { InclusiveX } from 'inclusivex';

const app = new InclusiveX();

app.scan('#main-content').then(issues => {
  console.log('Accessibility issues found:', issues);
  app.fix(issues).then(results => {
    console.log('Fixed issues:', results);
  });
});`}</code>
              </pre>
                            <motion.div
                                animate={{
                                    background: [
                                        "linear-gradient(0deg, rgba(0,255,148,0) 0%, 100%)",
                                        "linear-gradient(0deg, rgba(0,255,148,0.1) 0%, rgba(0,255,148,0) 100%)",
                                        "linear-gradient(0deg, rgba(0,255,148,0) 0%, 100%)"
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                                className="absolute inset-0 pointer-events-none"
                            />
                        </motion.div>
                    </div>
                </section>

                <section className="py-20 px-4 bg-[#1E2028]">
                    <div className="container mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
                            What InclusiveX Offers
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {offerings.map((offering, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    className="bg-[#2A2C35] p-6 rounded-lg shadow-lg"
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

                <section className="py-20 px-4">
                    <div className="container mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
                            Documentation Snapshot
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="bg-[#1E2028] p-6 rounded-lg shadow-lg"
                            >
                                <h3 className="text-xl font-semibold mb-4 text-white">Quick Start Guide</h3>
                                <pre className="text-sm text-[#E2E8F0] overflow-x-auto">
                  <code>{`npm install inclusivex

import { InclusiveX } from 'inclusivex';

const app = new InclusiveX();
app.init();

// Start scanning
app.scan();`}</code>
                </pre>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="bg-[#1E2028] p-6 rounded-lg shadow-lg"
                            >
                                <h3 className="text-xl font-semibold mb-4 text-white">API Reference</h3>
                                <ul className="list-disc list-inside text-[#A1A1AA]">
                                    <li>app.scan(selector: string): Promise&lt;Issue[]&gt;</li>
                                    <li>app.fix(issues: Issue[]): Promise&lt;Result[]&gt;</li>
                                    <li>app.monitor(options: MonitorOptions): void</li>
                                    <li>app.generateReport(): Report</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 bg-[#1E2028]">
                    <div className="container mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
                            What Our Users Say
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    className="bg-[#2A2C35] p-6 rounded-lg shadow-lg"
                                >
                                    <div className="flex items-center mb-4">
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            width={40}
                                            height={40}
                                            className="rounded-full mr-4"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-white">{testimonial.name}</h3>
                                            <p className="text-sm text-[#A1A1AA]">{testimonial.company}</p>
                                        </div>
                                    </div>
                                    <p className="text-[#E2E8F0]">{testimonial.content}</p>
                                    <div className="mt-4 flex items-center text-[#00FF94]">
                                        <Twitter className="w-5 h-5 mr-2" />
                                        <span className="text-sm">Posted on Twitter</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 bg-[#0A0B0D] relative overflow-hidden">
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        animate={{
                            background: [
                                "radial-gradient(circle at center, rgba(0,255,148,0.1) 0%, rgba(0,255,148,0) 50%)",
                                "radial-gradient(circle at center, rgba(0,255,148,0.2) 0%, rgba(0,255,148,0) 50%)",
                                "radial-gradient(circle at center, rgba(0,255,148,0.1) 0%, rgba(0,255,148,0) 50%)"
                            ]
                        }}
                        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <div className="container mx-auto text-center relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-3xl md:text-4xl font-bold mb-8 text-white"
                        >
                            Transform Your Web Accessibility Today
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl text-[#A1A1AA] mb-12 max-w-3xl mx-auto"
                        >
                            Join thousands of developers who are creating more inclusive digital experiences with InclusiveX.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
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
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                                <Button size="lg" className="bg-[#00FF94] text-black hover:bg-[#00CC75] font-semibold relative z-10">
                                    <Zap className="mr-2 h-4 w-4" />
                                    Get Started Now
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <footer className="border-t border-[#1E2028] py-8 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-[#A1A1AA] text-sm">&copy; 2024 InclusiveX. All rights reserved.</p>
                        <nav className="flex space-x-6 mt-4 md:mt-0">
                            <Link href="#" className="text-[#A1A1AA] hover:text-white text-sm">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-[#A1A1AA] hover:text-white text-sm">
                                Terms of Service
                            </Link>
                            <Link href="#" className="text-[#A1A1AA] hover:text-white text-sm">
                                Contact Us
                            </Link>
                        </nav>
                    </div>
                </div>
            </footer>
        </div>
    )
}