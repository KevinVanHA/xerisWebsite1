import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#010414] border-t border-white/5 py-20 mt-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-6 h-6 bg-[#0019A5] flex items-center justify-center rounded-sm">
                                <div className="w-3 h-3 border-2 border-white border-t-0 border-l-0 rotate-45 translate-x-[-1px] translate-y-[-1px]"></div>
                            </div>
                            <span className="text-lg font-display font-black tracking-tighter text-[#F0F2F5]">XERIS</span>
                        </div>
                        <p className="text-sm text-[#64748b] leading-relaxed">
                            Architecting the hardware-secured triple consensus blockchain for institutional liquidity.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F0F2F5] mb-6">Protocol</h4>
                        <ul className="space-y-4 text-sm text-[#64748b]">
                            <li><Link to="/xeriscoin" className="hover:text-[#0019A5] transition-colors">XerisCoin ($XERIS)</Link></li>
                            <li><Link to="/data" className="hover:text-[#0019A5] transition-colors">Network Data</Link></li>
                            <li><a href="https://github.com/ZZachWWins/xeriscoin_testnet_localalpha_v1" target="_blank" rel="noreferrer" className="hover:text-[#0019A5] transition-colors">Alpha Node</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F0F2F5] mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-[#64748b]">
                            <li><Link to="/about" className="hover:text-[#0019A5] transition-colors">About Mission</Link></li>
                            <li><Link to="/projects" className="hover:text-[#0019A5] transition-colors">Innovations</Link></li>
                            <li><Link to="/contact" className="hover:text-[#0019A5] transition-colors">Partnerships</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F0F2F5] mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-[#64748b]">
                            <li><Link to="/terms" className="hover:text-[#0019A5] transition-colors">Terms of Service</Link></li>
                            <li><a href="mailto:zachary@xerisweb.com" className="hover:text-[#0019A5] transition-colors">Contact Support</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
                    <p className="text-[10px] font-bold text-[#64748b] uppercase tracking-widest">
                        © 2025 XERIS WEB CO. • PATENT-PENDING US #63/887,511
                    </p>
                    <div className="flex gap-8 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer">
                        <span className="text-[10px] font-black tracking-widest">TWITTER</span>
                        <span className="text-[10px] font-black tracking-widest">TELEGRAM</span>
                        <span className="text-[10px] font-black tracking-widest">GITHUB</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
