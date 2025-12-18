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
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-[#0019A5] flex items-center justify-center rounded-sm transition-transform group-hover:scale-110">
                            <div className="w-4 h-4 border-2 border-white border-t-0 border-l-0 rotate-45 translate-x-[-1px] translate-y-[-2px]"></div>
                        </div>
                        <span className="text-xl font-display font-extrabold tracking-tighter text-[#F0F2F5]">XERIS</span>
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
