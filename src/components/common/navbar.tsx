import Link from "next/link";
import { Logo } from "../../components/Logo";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import { RightModal } from "../../components/RightModal";
import { Frame498 } from "../../components/Frame498";
import { ArrowLeft, Menu, Search, ShoppingBag, X } from "lucide-react";

export const Navbar = () => {
    const [loginOpen, setLoginOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full max-w-[1560px] mx-auto">
            {/* Mobile Navbar (< 768px) */}
            <div className="md:hidden">
                <div className="flex items-center justify-between py-3">
                    {/* Hamburger Menu */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-[#3e2a1c] hover:text-[#f2a33b] transition-colors"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Centered Logo */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <Link href="/">
                            <Logo className="h-12 w-auto" priority />
                        </Link>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center gap-3">
                        <button className="text-[#3e2a1c] hover:text-[#f2a33b] transition-colors">
                            <Search size={20} />
                        </button>
                        <button className="text-[#3e2a1c] hover:text-[#f2a33b] transition-colors">
                            <ShoppingBag size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Desktop Navbar (>= 768px) */}
            <div className="hidden md:block">
                <div className="flex flex-wrap items-center justify-between gap-4 text-base font-semibold text-[#3e2a1c] sm:text-lg">
                    <Link href="/">
                        <Logo className="h-16 w-auto sm:h-20" priority />
                    </Link>
                    <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                        <Link href="/" className="hover:text-[#f2a33b]">Home</Link>
                        <Link href="/product" className="hover:text-[#f2a33b]">Products</Link>
                        <Link href="/about" className="hover:text-[#f2a33b]">About Us</Link>
                        <Link href="/contact" className="hover:text-[#f2a33b]">Contact Us</Link>
                    </div>
                    <Button
                        variant="outline"
                        className="h-auto rounded-full border-2 border-[#f2a33b] bg-white px-5 py-2 text-sm font-semibold text-[#3e2a1c] shadow-sm transition hover:bg-[#fff2e2] hover:shadow"
                        onClick={() => setLoginOpen(true)}
                    >
                        <span className="inline-flex items-center gap-2">
                            <span>Log In</span>
                            <span aria-hidden>→</span>
                        </span>
                    </Button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-50 bg-white">
                    <div className="flex flex-col h-full">
                        {/* Mobile Menu Header */}
                        <div className="flex items-center justify-between bg-[#f5f2ed] px-4 py-3">
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-[#3e2a1c] hover:text-[#f2a33b] transition-colors"
                            >
                                <X size={24} />
                            </button>
                            <div className="absolute left-1/2 transform -translate-x-1/2">
                                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                                    <Logo className="h-12 w-auto" priority />
                                </Link>
                            </div>
                            <div className="w-6"></div>
                        </div>

                        {/* Mobile Menu Items */}
                        <div className="flex-1 px-6 py-8 space-y-6">
                            <nav className="space-y-4">
                                <Link 
                                    href="/" 
                                    className="block text-lg font-semibold text-[#3e2a1c] hover:text-[#f2a33b] transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Home
                                </Link>
                                <Link 
                                    href="/product" 
                                    className="block text-lg font-semibold text-[#3e2a1c] hover:text-[#f2a33b] transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Products
                                </Link>
                                <Link 
                                    href="/about" 
                                    className="block text-lg font-semibold text-[#3e2a1c] hover:text-[#f2a33b] transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    About Us
                                </Link>
                                <Link 
                                    href="/contact" 
                                    className="block text-lg font-semibold text-[#3e2a1c] hover:text-[#f2a33b] transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contact Us
                                </Link>
                            </nav>
                            
                            <div className="pt-6">
                                <Button
                                    variant="outline"
                                    className="w-full h-auto rounded-full border-2 border-[#f2a33b] bg-white px-5 py-3 text-sm font-semibold text-[#3e2a1c] shadow-sm transition hover:bg-[#fff2e2] hover:shadow"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setLoginOpen(true);
                                    }}
                                >
                                    <span className="inline-flex items-center gap-2 justify-center">
                                        <span>Log In</span>
                                        <span aria-hidden>→</span>
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <RightModal open={loginOpen} onClose={() => setLoginOpen(false)} widthClassName="w-1/2 max-w-[720px]">
                <div className="flex h-full flex-col">
                    <div className="relative">
                        <Frame498 className="w-full" priority />
                    </div>
                    <div className="flex-1 space-y-4 px-6 py-6 sm:px-8 sm:py-8 overflow-auto">
                        <Button onClick={() => setLoginOpen(false)} className="bg-inherit hover:bg-inherit"><ArrowLeft className="bg-transparent "  /></Button>
                        <h3 className="text-xl font-bold text-neutral-900">Start Your Fresh Milk Journey</h3>
                        <div className="space-y-3">
                          <label className="text-sm font-medium text-neutral-800">Phone Number</label>
                          <input
                            type="tel"
                            placeholder="Enter your registered mobile number"
                            className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:border-[#f2a33b] focus:outline-none"
                          />
                        </div>
                        <Button className="w-full rounded-full bg-[#f2a33b] text-neutral-900 hover:bg-[#e59221]">Send OTP</Button>
                        <p className="text-xs text-neutral-600">
                          By continuing, you agree to Milkaaru's <a className="underline" href="#">Terms</a> & <a className="underline" href="#">Privacy Policy</a>.
                        </p>
                      </div>
                    </div>
                  </RightModal>
        </div>
    )
}