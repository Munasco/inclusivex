'use client'

import {motion} from 'framer-motion'
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {Label} from "@/components/ui/label"
import {Facebook, Linkedin, Twitter} from 'lucide-react'
import Countdown, {CountdownRenderProps} from "react-countdown"
import {ChangeEvent, FormEvent, useEffect, useRef, useState} from "react";
import Logo from "@/app/logo.svg";
import Link from "next/link"; // Import the countdown library

const sleekGreen = "#00FF94"
const targetDate = new Date("2024-11-30T00:00:00")

const socialLinks = [
    { href: "https://twitter.com/a11ylabs", label: "Follow us on Twitter", Icon: Twitter },
    { href: "https://facebook.com/a11ylabs", label: "Follow us on Facebook", Icon: Facebook },
    { href: "https://linkedin.com/company/theaccessibilitycompany", label: "Follow us on LinkedIn", Icon: Linkedin }];

// Custom renderer for the countdown
const CountdownRenderer = ({days, hours, minutes, seconds, completed}: CountdownRenderProps) => {
    if (completed) {
        return <p className="text-2xl">The platform has launched! 🎉</p>
    } else {
        return (
            <div className="flex justify-center space-x-8 mb-12">
                <div className="text-center">
                    <div className="text-4xl font-bold mb-2">{days}</div>
                    <div className="text-sm uppercase">Days</div>
                </div>
                <div className="text-center">
                    <div className="text-4xl font-bold mb-2">{hours}</div>
                    <div className="text-sm uppercase">Hours</div>
                </div>
                <div className="text-center">
                    <div className="text-4xl font-bold mb-2">{minutes}</div>
                    <div className="text-sm uppercase">Minutes</div>
                </div>
                <div className="text-center">
                    <div className="text-4xl font-bold mb-2">{seconds}</div>
                    <div className="text-sm uppercase">Seconds</div>
                </div>
            </div>
        )
    }
}

export default function Page() {
    const otherInputRef = useRef<HTMLInputElement | null>(null)
    const [mounted, setMounted] = useState(false)
    const [formData, setFormData] = useState({
        companyName: "",
        email: "",
        category: "",
        otherCategory: "",
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }

    const handleCategoryChange = (value: string) => {
        setFormData(prev => ({...prev, category: value}))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("'Form submitted:'", formData)
    }
    useEffect(() => {
        if (formData.category === "other" && otherInputRef.current) {
            otherInputRef.current.focus()
        }
    }, [formData.category])
    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <section className="min-h-screen bg-gradient-to-b from-[#0A0B0D] to-[#1E2028] text-white flex flex-col
            justify-center items-center p-4">
            <motion.div
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
                className="text-center max-w-4xl w-full"
            >
                <Link href="/"><Logo className="w-24 h-24 mx-auto mb-8"/>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Inclusivio</h1></Link>

                <p className="text-2xl md:text-3xl mb-8">Making Digital Platforms Accessible for Everyone</p>
                <p className="text-xl mb-12 max-w-2xl mx-auto">
                    We&#39;re working hard to bring you a revolutionary platform that ensures web accessibility for all.
                    Stay tuned!
                </p>

                {mounted && (
                    <Countdown
                        date={targetDate}
                        renderer={CountdownRenderer}
                    />
                )}

                <form onSubmit={handleSubmit} className="mb-12 space-y-4">
                    <div
                        className="flex flex-col md:flex-row justify-center items-start space-y-4 md:space-y-0 md:space-x-4">
                        <div className="w-full md:w-1/3">
                            <Label htmlFor="companyName" className="text-left block mb-2">Company Name</Label>
                            <Input
                                id="companyName"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleInputChange}
                                className="bg-white text-black w-full"
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/3">
                            <Label htmlFor="email" className="text-left block mb-2">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="bg-white text-black w-full"
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/3">
                            <Label htmlFor="category" className="text-left block mb-2">Category</Label>
                            <Select onValueChange={handleCategoryChange}>
                                <SelectTrigger className="bg-white text-black w-full">
                                    <SelectValue placeholder="Select category"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ecommerce">Ecommerce</SelectItem>
                                    <SelectItem value="public-institution">Public Institution</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    {formData.category === "other" && (
                        <div className="w-full" ref={otherInputRef}>
                            <Label htmlFor="otherCategory" className="text-left block mb-2">Specify Other
                                Category</Label>
                            <Input
                                id="otherCategory"
                                name="otherCategory"
                                value={formData.otherCategory}
                                onChange={handleInputChange}
                                className="bg-white text-black w-full"
                                required
                            />
                        </div>
                    )}
                    <Button type="submit"
                            className="bg-sleek-green text-gray-900 hover:bg-[rgba(0,255,148,0.6)] w-full md:w-auto">
                        Notify Me
                    </Button>
                </form>

                <div className="flex justify-center space-x-6 mb-12">
                    {socialLinks.map(({href, label, Icon}, index) => (
                        <a
                            key={index}
                            href={href}
                            className="text-white hover:text-sleek-green transition-colors"
                            aria-label={label}
                        >
                            <Icon className="w-6 h-6"/>
                        </a>
                    ))}
                </div>

                <p className="text-sm mb-4">
                    We are committed to making this website accessible to all users. If you have any questions or
                    suggestions
                    regarding the accessibility of this site, please contact us at&nbsp;
                    <a href="mailto:munachiernesteze@gmail.com"
                       className="text-sleek-green hover:underline">munachiernesteze@gmail.com</a>.
                </p>
            </motion.div>

            <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                    background: [
                        `radial-gradient(circle at 20% 20%, ${sleekGreen}22 0%, ${sleekGreen}00 40%)`,
                        `radial-gradient(circle at 80% 80%, ${sleekGreen}22 0%, ${sleekGreen}00 40%)`,
                        `radial-gradient(circle at 20% 20%, ${sleekGreen}22 0%, ${sleekGreen}00 40%)`
                    ]
                }}
                transition={{duration: 10, repeat: Infinity, repeatType: "reverse"}}
            />
        </section>
    )
}