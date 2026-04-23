export default function Footer() {
    return (
        <footer className=" border-t border-gray-200 py-12 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Akasha Relic Section */}
                    <div className="space-y-4 text-white">
                        <h2 className=" bg-gradient-to-t from-[#FFFFFF] to-[#7C3AED]  bg-clip-text text-transparent text-2xl font-bold tracking-wider hover:opacity-80 transition-opacity">AKASHA RELIC</h2>
                        <div className="space-y-2 text-white">
                            <p className="flex items-center gap-2">
                                <span className=" text-white">📞</span> (405) 555-0128
                            </p>
                            <p className="flex items-center gap-2">
                                <span className=" text-white">🔗</span> prinstin@example.com
                            </p>
                            <p className="flex items-center gap-2 text-sm">
                                <span className=" text-white">🌐</span>
                                <span className="text-white">
                                    3g91 Ranchview Dr. Richardson, California 62639
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Product Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
                        <ul className="space-y-2 text-white">
                            <li className="hover:text-white cursor-pointer transition">Updates</li>
                            <li className="hover:text-white cursor-pointer transition">Security</li>
                            <li className="hover:text-white cursor-pointer transition">Mobile App</li>
                            <li className="hover:text-white cursor-pointer transition">
                                Chrome Extension
                            </li>
                            <li className="hover:text-white cursor-pointer transition">IOS Patch</li>
                        </ul>
                    </div>

                    {/* Company Service Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Company Service</h3>
                        <ul className="space-y-2 text-white">
                            <li className="hover:text-white cursor-pointer transition">About Us</li>
                            <li className="hover:text-white cursor-pointer transition">Careers</li>
                            <li className="hover:text-white cursor-pointer transition">Delivery Information</li>
                            <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
                            <li className="hover:text-white cursor-pointer transition">Terms & Conditions</li>
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
                        <ul className="space-y-2 text-white">
                            <li className="hover:text-white cursor-pointer transition">Help Center</li>
                            <li className="hover:text-white cursor-pointer transition">Talk To Support</li>
                            <li className="hover:text-white cursor-pointer transition">API Settings</li>
                            <li className="hover:text-white cursor-pointer transition">System Status</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white flex flex-col md:flex-row items-center justify-between">
                    {/* Copyright Text */}
                    <p className="text-center text-white text-sm">
                        &copy; {new Date().getFullYear()} Akasha Relic. All rights reserved.
                    </p>
                    {/* Social Media Icons */}
                    <div className="flex justify-center gap-6 mb-4">
                        {/* Facebook SVG */}
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 transition-colors duration-200"
                            aria-label="Facebook"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5 sm:w-6 sm:h-6"
                            >
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                        </a>

                        {/* Instagram SVG */}
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 transition-colors duration-200"
                            aria-label="Instagram"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5 sm:w-6 sm:h-6"
                            >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>

                        {/* X (Twitter) SVG */}
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 transition-colors duration-200"
                            aria-label="X"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5 sm:w-6 sm:h-6"
                            >
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                    </div>

                    
                </div>
            </div>
        </footer>
    );
}