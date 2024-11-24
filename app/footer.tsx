import Link from "next/link";

function Footer() {
    return (
        <footer className="border-t border-[#1E2028] py-8 bg-[#0A0B0D]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-[#A1A1AA] text-sm">&copy; 2024 A11y Labs. All rights reserved.</p>
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
    )
}

export default Footer
