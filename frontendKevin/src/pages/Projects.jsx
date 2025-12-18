import React from 'react';
import { Search, Brain, Mail, Rocket, Smartphone } from 'lucide-react';

const Projects = () => {
    const innovations = [
        {
            title: "Elite SEO Mastery",
            desc: "Propelling 6+ client sites to #1 on Google rankings through pure organic custom algorithms—no paid plugins or third-party ad spend.",
            icon: <Search size={32} className="text-[#0019A5]" />,
            accent: "bg-[#0019A5]/10"
        },
        {
            title: "NumPy-Based LLM",
            desc: "A groundbreaking large language model engineered entirely with NumPy. Pure Python code for lean, framework-free intelligent automation.",
            icon: <Brain size={32} className="text-[#0019A5]" />,
            accent: "bg-[#0019A5]/10"
        },
        {
            title: "Mass Emailer Tool",
            desc: "Custom-built mass distribution engine styled with Apple-level precision. Zero cost or third-party dependencies using open-source SMTP.",
            icon: <Mail size={32} className="text-[#0019A5]" />,
            accent: "bg-[#0019A5]/10"
        },
        {
            title: "Triple Consensus Protocol",
            desc: "Revolutionary L1 blockchain using PoW, PoH, and PoS for unmatched security and efficiency in tokenized RWA ecosystems.",
            icon: <Rocket size={32} className="text-[#0019A5]" />,
            accent: "bg-[#0019A5]/20"
        },
        {
            title: "Xeris dApp Ecosystem",
            desc: "Mobile-integrated decentralized application rewarding users for milestone achievements, connected directly to our blockchain.",
            icon: <Smartphone size={32} className="text-[#0019A5]" />,
            accent: "bg-[#0019A5]/10"
        }
    ];

    return (
        <div className="relative overflow-hidden">
            <div className="fixed bottom-0 right-0 w-full max-w-6xl h-[600px] bg-[#0019A5]/5 blur-[160px] rounded-full pointer-events-none -z-10"></div>

            {/* Hero */}
            <section className="container mx-auto px-6 py-32">
                <div className="max-w-4xl">
                    <p className="text-[#0019A5] font-black text-[10px] tracking-[0.5em] uppercase mb-8">Innovations</p>
                    <h1 className="text-5xl md:text-[5rem] font-display font-bold text-white mb-10 leading-[0.9] tracking-tight">
                        Engineering <br /> <span className="text-[#4E5BA6]">Exceptional.</span>
                    </h1>
                    <p className="text-xl text-[#94a3b8] font-light leading-relaxed max-w-2xl">
                        Our lab turns theoretical breakthroughs into hardware-secured realities. From pure-Python AI to triple consensus blockchain protocols.
                    </p>
                </div>
            </section>

            {/* Grid */}
            <section className="container mx-auto px-6 pb-40">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {innovations.map((item, idx) => (
                        <div key={idx} className={`enterprise-card p-12 hover:border-[#0019A5]/40 transition-all cursor-default group ${idx === 3 ? 'lg:col-span-2 bg-[#050B2B]' : ''}`}>
                            <div className={`p-5 w-fit rounded-sm mb-10 ${item.accent} group-hover:scale-110 transition-transform shadow-brand-glow`}>
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">{item.title}</h3>
                            <p className="text-[#64748b] leading-relaxed font-light">{item.desc}</p>
                            {idx === 3 && (
                                <div className="mt-12 p-6 bg-[#F0F2F5]/5 rounded-sm border border-white/5">
                                    <p className="text-[10px] text-[#0019A5] font-black uppercase tracking-widest mb-3">Live Integration</p>
                                    <h4 className="text-sm font-bold text-white mb-2">Activate Supplements Integration</h4>
                                    <p className="text-xs text-[#64748b]">Leveraging XerisCoin for tokenized supply chains—fueling liquidity and hit targets for our $50M cap goals.</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Gallery Placeholder - Professionalised */}
            <section className="container mx-auto px-6 py-40 border-t border-white/5">
                <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0019A5] mb-4">Verification</p>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Live Testnet Demos.</h2>
                    </div>
                    <p className="max-w-md text-[#64748b] text-sm leading-relaxed mb-1">
                        Real-time captures from our Q3 2025 testnet environments—verifying the stability and speed of the Xeris protocol.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="enterprise-card aspect-video relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-60"></div>
                        <div className="absolute inset-0 bg-[#0019A5]/10 animate-pulse"></div>
                        <div className="absolute bottom-8 left-8 z-20">
                            <div className="text-[10px] font-black text-[#0019A5] uppercase tracking-widest mb-2">Block Explorer</div>
                            <h4 className="text-white font-bold">Live Transaction Validation</h4>
                        </div>
                        {/* Media would go here */}
                    </div>
                    <div className="enterprise-card aspect-video relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-60"></div>
                        <div className="absolute inset-0 bg-[#0019A5]/10 animate-pulse"></div>
                        <div className="absolute bottom-8 left-8 z-20">
                            <div className="text-[10px] font-black text-[#0019A5] uppercase tracking-widest mb-2">iOS Terminal</div>
                            <h4 className="text-white font-bold">Mobile Wallet Connectivity</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
