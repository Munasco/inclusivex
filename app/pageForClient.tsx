'use client';
import {ReactNode, useEffect, useState} from 'react'
import {motion, useAnimation} from "framer-motion";
import {Brain, Menu, PlugZap, ShieldCheck, X, Zap} from "lucide-react";
import Link from "next/link";
import Logo from "@/app/logo.svg";
import {Button} from "@/components/ui/button";

type Feature = {
    icon: ReactNode
    title: string
    description: string
}


const features: Feature[] = [
    {
        icon: <Zap className="w-10 h-10 text-sleek-green"/>,
        title: "Lightning-Fast Scans",
        description: "Our advanced algorithms swiftly detect accessibility issues, providing comprehensive results in seconds.",
    },
    {
        icon: <Brain className="w-10 h-10 text-sleek-green"/>,
        title: "AI-Driven Solutions",
        description: "Leverage cutting-edge AI to automatically generate intelligent fixes for identified accessibility problems.",
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-sleek-green"/>,
        title: "WCAG Compliance Assurance",
        description: "Stay ahead of accessibility standards with continuous updates aligned with the latest WCAG guidelines.",
    },
    {
        icon: <PlugZap className="w-10 h-10 text-sleek-green"/>,
        title: "Seamless Integration",
        description: "Effortlessly incorporate our tools into your existing workflow, supporting major platforms and frameworks.",
    },
]


export function FeaturesComponent() {
    const [showAnimation, setShowAnimation] = useState(false)
    const controls = useAnimation()

    useEffect(() => {
        setShowAnimation(true)
        controls.start({
            opacity: [0.3, 0.6, 0.3],
            transition: {duration: 3, repeat: Infinity, ease: "easeInOut"}
        }).catch(() => {
            console.log("Animation cancelled")
        })
    }, [controls])
    return (
        <FeaturesSection features={features} showAnimation={showAnimation}/>
    )
}

export function Header() {
    function NavLink({href, children}: { href: string; children: ReactNode }) {
        return (
            <Link href={href} className="text-[#A1A1AA] hover:text-white transition-colors">
                {children}
            </Link>
        )
    }
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="border-b border-[#1E2028] relative z-10 backdrop-blur-sm bg-opacity-80 bg-[#0A0B0D]">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-gray-800 flex flex-col items-start">
                    <div className="flex items-center">
                        <Logo className="w-8 h-8 mr-2 text"/>
                        <span className="text-gray-300">UX+</span>
                    </div>
                    <span
                        className="text-sm font-normal text-gray-600 ml-10 font-mono hidden lg:inline-block">By TheAccessibilityCompany, Inc.</span>
                </Link>
                <nav className="hidden md:flex space-x-6">
                    <NavLink href="/coming-soon">Documentation</NavLink>
                    <NavLink href="/coming-soon">Pricing</NavLink>
                    <NavLink href="/coming-soon">Blog</NavLink>
                    <NavLink href="/coming-soon">Careers</NavLink>
                    <NavLink href="/coming-soon">Demo</NavLink>
                </nav>
                <div className="flex items-center space-x-2">
                    <Button variant="ghost" className="text-[#A1A1AA] hover:bg-dark-theme hover:text-white">
                        Sign In
                    </Button>
                    <Button className="dark:bg-[#00FF94] text-black dark:hover:bg-[#00CC75]">
                        <a href="/coming-soon">Get Started</a>
                    </Button>
                </div>
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X/> : <Menu/>}
                </button>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-[#0A0B0D] p-4">
                    <nav className="flex flex-col space-y-4">
                        <NavLink href="#">Documentation</NavLink>
                        <NavLink href="#">Pricing</NavLink>
                        <NavLink href="#">Blog</NavLink>
                        <NavLink href="#">Careers</NavLink>
                        <NavLink href="#">Demo</NavLink>
                    </nav>
                </div>
            )}
        </header>

    );
}


function FeaturesSection({features, showAnimation}: { features: Feature[]; showAnimation: boolean }) {
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: {y: 20, opacity: 0},
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <section className="py-16 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={showAnimation ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-gradient-to-br from-[#1E2028] to-[#2A2C35] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <motion.div
                                    whileHover={{scale: 1.1, rotate: 360}}
                                    transition={{duration: 0.5}}
                                >
                                    {feature.icon}
                                </motion.div>
                            </div>
                            <h1 className="text-xl font-semibold mb-2 text-center text-white">{feature.title}</h1>
                            <p className="text-[#A1A1AA] text-center">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
