import React, { useState } from 'react'


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
       <header className="absolute inset-x-0 top-0 z-50">
                        <nav
                            aria-label="Global"
                            className="flex items-center justify-between p-6 lg:px-8"
                        >
                            <div className="flex lg:flex-1">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="logo"
                                        className="h-8 w-auto"
                                    />
                                </a>
                            </div>
                            {/* Mobile Menu Button */}
                            <div className="flex lg:hidden">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(true)}
                                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        aria-hidden="true"
                                        className="size-6"
                                    >
                                        <path
                                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="hidden lg:flex lg:gap-x-12">
                                <a href="#" className="text-sm font-semibold text-white">
                                    Product
                                </a>
                                <a href="#" className="text-sm font-semibold text-white">
                                    Features
                                </a>
                                <a href="#" className="text-sm font-semibold text-white">
                                    Marketplace
                                </a>
                                <a href="#" className="text-sm font-semibold text-white">
                                    Company
                                </a>
                            </div>
                            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                                <a href="#" className="text-sm font-semibold text-white">
                                    Log in <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </nav>

                        {/* Mobile Menu */}
                        {isOpen && (
                            <div className="lg:hidden fixed inset-0 z-50 bg-gray-900 p-6">
                                <div className="flex items-center justify-between">
                                    <a href="#" className="-m-1.5 p-1.5">
                                        <span className="sr-only">Your Company</span>
                                        <img
                                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                            alt="logo"
                                            className="h-8 w-auto"
                                        />
                                    </a>
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        className="-m-2.5 rounded-md p-2.5 text-gray-200"
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            aria-hidden="true"
                                            className="size-6"
                                        >
                                            <path
                                                d="M6 18 18 6M6 6l12 12"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="mt-6 space-y-6">
                                    <a
                                        href="#"
                                        className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
                                    >
                                        Product
                                    </a>
                                    <a
                                        href="#"
                                        className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
                                    >
                                        Features
                                    </a>
                                    <a
                                        href="#"
                                        className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
                                    >
                                        Marketplace
                                    </a>
                                    <a
                                        href="#"
                                        className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
                                    >
                                        Company
                                    </a>
                                    <a
                                        href="#"
                                        className="block rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-white/5"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        )}
                    </header>
    )
}

export default Navbar