import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Innovation', path: '/projects' },
        { name: 'XerisCoin', path: '/xeriscoin' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#010414]/80 backdrop-blur-xl">
            <div className="container mx-auto px-6 h-24 flex items-center justify-between">
                <div className="flex items-center gap-16">
                    <Link to="/" className="flex items-center gap-3 group">
                        <img src="/logos/LogoDark.png" alt="Xeris Logo" className="h-10 w-auto transition-transform group-hover:scale-105" />
                    </Link>
                    <div className="hidden lg:flex gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'text-white' : ''}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <Link to="/testnet-beta" className="text-[10px] font-black uppercase tracking-[0.25em] text-[#64748b] hover:text-white transition-colors">
                        Beta Access
                    </Link>
                    <button className="btn-primary text-[10px] py-3 px-8 shadow-brand-glow uppercase tracking-widest font-black whitespace-nowrap">
                        Launch Protocol
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Header;
