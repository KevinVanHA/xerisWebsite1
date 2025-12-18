import React from 'react';
import { Target, Shield, Zap, Code } from 'lucide-react';

const Home = () => {
    return (
        <div className="relative overflow-hidden">
            {/* Precision Background Glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] bg-[#0019A5]/10 blur-[160px] rounded-full pointer-events-none -z-10"></div>

            {/* Hero Section */}
            <section className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-24">
                <div className="flex-[1.2] animate-reveal">
                    <div className="inline-flex items-center gap-3 px-3 py-2 rounded-sm bg-[#0019A5]/10 border border-[#0019A5]/30 text-[#0019A5] text-[9px] tracking-[0.4em] font-black mb-12 uppercase">
                        Institutional Protocol • L1 Architecture
                    </div>

                    <h1 className="text-6xl md:text-[5.5rem] font-display font-bold mb-10 leading-[0.9] tracking-tighter text-[#F0F2F5]">
                        Liquidity <br /> <span className="text-[#4E5BA6]">unlocked.</span>
                    </h1>

                    <p className="max-w-xl text-lg md:text-xl text-[#94a3b8] mb-14 leading-relaxed font-light first-letter:text-4xl first-letter:font-bold first-letter:text-[#0019A5]">
                        Xeris delivers the hardware-secured triple consensus blockchain optimized for high-frequency institutional RWA settlements. Engineering the global standard for digital value exchange.
                    </p>

                    <div className="flex flex-col sm:row gap-6">
                        <button className="btn-primary text-[11px] px-14 py-5 uppercase tracking-widest font-black shadow-brand-glow">Launch Network</button>
                        <button className="btn-secondary text-[11px] px-14 py-5 uppercase tracking-widest font-black">View Research</button>
                    </div>
                </div>

                {/* Minimalist Data Visualization */}
                <div className="flex-1 w-full max-w-xl animate-fade-in delay-200">
                    <div className="enterprise-card aspect-square p-px group rounded-sm shadow-2xl overflow-hidden relative">
                        <div className="w-full h-full bg-[#000B4F] flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0019A5]/20 via-transparent to-transparent"></div>
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#0019A5 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                            <div className="relative z-10 scale-110">
                                <div className="w-40 h-40 border border-white/10 flex items-center justify-center">
                                    <div className="w-32 h-32 bg-[#0019A5]/5 border border-[#0019A5]/40 flex items-center justify-center animate-[spin_30s_linear_infinite]">
                                        <div className="w-16 h-16 bg-[#0019A5] shadow-brand-glow rotate-45"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute top-12 left-12 p-6 enterprise-card bg-[#000B4F]/80 backdrop-blur-3xl border-[#0019A5]/20">
                                <div className="text-[9px] text-[#4E5BA6] mb-2 uppercase tracking-[0.3em] font-black">Up-Time Strength</div>
                                <div className="text-3xl text-[#F0F2F5] font-display font-extrabold tracking-tighter">10.2<span className="text-sm opacity-50 ml-1">K</span></div>
                            </div>

                            <div className="absolute bottom-12 right-12 p-6 enterprise-card bg-[#000B4F]/80 backdrop-blur-3xl border-[#0019A5]/20 text-right">
                                <div className="text-[9px] text-[#4E5BA6] mb-2 uppercase tracking-[0.3em] font-black">Consensus Engine</div>
                                <div className="text-3xl text-[#F0F2F5] font-display font-extrabold tracking-tighter">PHS-R</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Alliance Section */}
            <section className="container mx-auto px-6 py-32">
                <div className="enterprise-card p-12 lg:p-20 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0019A5]/5 to-transparent pointer-events-none"></div>
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 text-[#0019A5] font-black text-[10px] tracking-[0.3em] uppercase mb-6">
                                Strategic Alliance
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                                Synthesizing BioTech <br /> and Blockchain.
                            </h2>
                            <p className="text-[#94a3b8] text-lg leading-relaxed mb-10 font-light">
                                Our partnership with Activate Supplements tokenizes wellness protocols, unlocking seamless liquidity for a $50M target market cap. A bridge between high-performance hardware and human potential.
                            </p>
                            <div className="flex gap-10 border-t border-white/5 pt-10">
                                <div>
                                    <div className="text-2xl font-display font-bold text-white uppercase tracking-tighter">7%</div>
                                    <div className="text-[10px] text-[#64748b] uppercase tracking-widest font-black mt-1">Equity Stake</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-display font-bold text-white uppercase tracking-tighter">20%</div>
                                    <div className="text-[10px] text-[#64748b] uppercase tracking-widest font-black mt-1">Revenue Share</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="enterprise-card bg-[#050B2B] p-8 hover:bg-[#0A123D] transition-colors">
                                <Shield size={32} className="text-[#0019A5] mb-6" />
                                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-2">Secure</h3>
                                <p className="text-xs text-[#64748b] leading-relaxed">Hardware-secured settlement layers.</p>
                            </div>
                            <div className="enterprise-card bg-[#050B2B] p-8 hover:bg-[#0A123D] transition-colors md:translate-y-8">
                                <Zap size={32} className="text-[#0019A5] mb-6" />
                                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-2">Fluid</h3>
                                <p className="text-xs text-[#64748b] leading-relaxed">Instant liquidity pools for RWA.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Milestones Section */}
            <section className="container mx-auto px-6 py-32 border-t border-white/5">
                <div className="text-center max-w-3xl mx-auto mb-20 px-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#0019A5] mb-4">Milestones</p>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Proven Capability.</h2>
                    <p className="text-[#64748b] text-lg font-light">
                        From patent-secured innovation to stress-tested performance metrics.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Testnet Excellence",
                            desc: "Q3 2025 delivered 10,000+ TPS with 100% uptime, proving enterprise scalability.",
                            icon: <Target className="w-10 h-10 text-[#0019A5]" />
                        },
                        {
                            title: "Patent Secured",
                            desc: "US #63/887,511 confirms the breakthrough nature of our triple consensus engine.",
                            icon: <Shield className="w-10 h-10 text-[#0019A5]" />
                        },
                        {
                            title: "Alpha Ready",
                            desc: "Local alpha node released on GitHub for verified local consensus testing.",
                            icon: <Code className="w-10 h-10 text-[#0019A5]" />
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="enterprise-card p-10 hover:border-[#0019A5]/30 group transition-all">
                            <div className="mb-8 p-4 w-fit bg-[#0019A5]/10 rounded shadow-brand-glow group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-[#64748b] text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* GitHub Callout */}
            <section className="container mx-auto px-6 py-32">
                <div className="enterprise-card bg-gradient-to-br from-[#0019A5]/20 to-transparent p-12 md:p-20 text-center">
                    <Zap className="mx-auto text-[#0019A5] mb-8" size={64} />
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Deploy the Future.</h2>
                    <p className="max-w-2xl mx-auto text-lg text-[#94a3b8] mb-12 font-light leading-relaxed">
                        Join the Xeris ecosystem by downloading the local alpha node. Review the triple consensus implementation and start mining local blocks on our testnet architecture.
                    </p>
                    <a href="https://github.com/ZZachWWins/xeriscoin_testnet_localalpha_v1" target="_blank" rel="noreferrer" className="btn-primary px-16 py-6 text-sm uppercase tracking-widest font-black shadow-brand-glow">
                        View GitHub Repository
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
