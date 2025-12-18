import React from 'react';
import { Globe, BarChart3, Rocket, Handshake, Code } from 'lucide-react';

const XerisCoin = () => {
    return (
        <div className="relative overflow-hidden selection:bg-[#0019A5]/40">
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[#0019A5]/5 blur-[180px] rounded-full pointer-events-none -z-10"></div>

            {/* Token Hero */}
            <section className="container mx-auto px-6 py-32 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-3 px-3 py-2 rounded-sm bg-[#0019A5]/10 border border-[#0019A5]/30 text-[#0019A5] text-[9px] tracking-[0.4em] font-black mb-10 uppercase">
                            Native Utility Token • $XERIS
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-10 leading-[1.05] tracking-tight">
                            Fueling the <br /> <span className="text-[#0019A5]">RWA Economy.</span>
                        </h1>
                        <p className="max-w-xl text-lg md:text-xl text-[#94a3b8] mb-12 leading-relaxed font-light">
                            XerisCoin ($XERIS) is the patent-pending engine of our Layer 1 blockchain, engineered for sub-second finality and hardware-level consensus security.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <a href="https://pump.fun/9ezFthWrDUpSSeMdpLW6SDD9TJigHdc4AuQ5QN5bpump" target="_blank" rel="noreferrer" className="btn-primary text-[10px] px-12 py-5 uppercase tracking-widest font-black shadow-brand-glow text-center">
                                Acquire on pump.fun
                            </a>
                            <a href="https://t.me/xeriscoin" target="_blank" rel="noreferrer" className="btn-secondary text-[10px] px-12 py-5 uppercase tracking-widest font-black text-center">
                                Join Protocol Telegram
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-lg">
                        <div className="enterprise-card aspect-[4/3] relative overflow-hidden flex items-center justify-center p-8 bg-gradient-to-br from-[#0A123D] to-[#000B4F]">
                            <div className="w-full h-full relative border border-white/5 rounded flex items-center justify-center">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,25,165,0.1),transparent)]"></div>
                                <div className="text-[120px] font-display font-black text-[#0019A5]/10 select-none">$XERIS</div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#0019A5]/20 rounded-full animate-pulse"></div>
                                <div className="relative z-10 w-24 h-24 bg-[#0019A5] shadow-brand-glow flex items-center justify-center rounded-sm rotate-45">
                                    <div className="text-white text-3xl font-display font-black -rotate-45">X</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Protocol Specs */}
            <section className="container mx-auto px-6 py-32 border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "L1 Architecture", icon: <Globe size={24} />, desc: "Hybrid consensus for superior throughput and institutional security." },
                        { title: "RWA Pipeline", icon: <BarChart3 size={24} />, desc: "Secured LOIs for real estate fractionalization and biotech protocols." },
                        { title: "Activate Synergy", icon: <Handshake size={24} />, desc: "Direct utility within the Super Human wellness tokenization program." },
                        { title: "USD Backing", icon: <Shield size={24} />, desc: "1:1 USD treasury backing for early liquidity and mainnet redemptions." }
                    ].map((item, idx) => (
                        <div key={idx} className="enterprise-card p-10 hover:bg-[#050B2B] transition-colors">
                            <div className="text-[#0019A5] mb-6">{item.icon}</div>
                            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">{item.title}</h4>
                            <p className="text-xs text-[#64748b] leading-relaxed font-light">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Treasury & Mechanics */}
            <section className="container mx-auto px-6 py-32">
                <div className="enterprise-card p-12 lg:p-24 bg-gradient-to-br from-[#050B2B] to-[#010414] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <Rocket size={400} />
                    </div>
                    <div className="relative z-10 max-w-3xl">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-10 leading-tight">Institutional <br /> Treasury Controls.</h2>
                        <p className="text-[#94a3b8] text-lg leading-relaxed font-light mb-12">
                            Xeris maintains a strictly managed treasury to ensure network stability. Pre-mainnet acquisitions carry a 1:1 USD valuation guarantee, redeemable at a 5:1 ratio for native $XERIS tokens upon protocol maturation.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-white/10 pt-12">
                            <div>
                                <h5 className="text-[#0019A5] text-[10px] font-black uppercase tracking-widest mb-4">Protocol Launch</h5>
                                <p className="text-sm text-[#F0F2F5] font-medium leading-relaxed">
                                    Fair launch access via established liquidity pools to ensure decentralized initial distribution.
                                </p>
                            </div>
                            <div>
                                <h5 className="text-[#0019A5] text-[10px] font-black uppercase tracking-widest mb-4">Redemption Engine</h5>
                                <p className="text-sm text-[#F0F2F5] font-medium leading-relaxed">
                                    Hardware-verified smart contracts manage the 5:1 treasury redemption cycles for institutional partners.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 flex flex-wrap gap-8 items-center">
                            <a href="https://github.com/ZZachWWins/xeriscoin_testnet_localalpha_v1" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-bold text-white hover:text-[#0019A5] transition-colors">
                                <Code size={20} /> Download Alpha Node
                            </a>
                            <div className="text-[10px] text-[#64748b] font-mono select-all p-3 bg-black/40 rounded border border-white/5">
                                9ezFthWrDUpSSeMdpLW6SDD9TJigHdc4AuQ5QN5bpump
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const Shield = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
);

export default XerisCoin;
