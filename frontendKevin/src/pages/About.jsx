import React from 'react';
import { Rocket, ShieldCheck, TrendingUp, Users } from 'lucide-react';

const About = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="fixed top-0 left-1/4 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-[#0019A5]/5 blur-[140px] rounded-full pointer-events-none -z-10"></div>

            {/* About Hero */}
            <section className="container mx-auto px-6 py-32 text-center">
                <div className="inline-flex items-center gap-2 text-[#0019A5] font-black text-[10px] tracking-[0.4em] uppercase mb-8">
                    The Mission
                </div>
                <h1 className="text-5xl md:text-8xl font-display font-bold mb-10 leading-[1] text-[#F0F2F5]">
                    Pioneering <br /> <span className="text-[#0019A5]">Secure Utility.</span>
                </h1>
                <p className="max-w-3xl mx-auto text-xl text-[#94a3b8] font-light leading-relaxed">
                    Led by Zachary Winkle, Xeris Web Co. is architecting the future of decentralized finance from Texas to the global stage. We turn bold ideas into unbreakable hardware-secured realities.
                </p>
            </section>

            {/* Core Values / Features */}
            <section className="container mx-auto px-6 py-32 border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="enterprise-card p-12 hover:bg-[#050B2B] transition-colors">
                        <Rocket className="text-[#0019A5] mb-8" size={40} />
                        <h3 className="text-xl font-bold text-white mb-6">Innovation First</h3>
                        <p className="text-[#64748b] leading-relaxed font-light">
                            Proprietary tools and algorithms built from the ground up. We reject off-the-shelf crutches in favor of pure code excellence.
                        </p>
                    </div>
                    <div className="enterprise-card p-12 hover:bg-[#050B2B] transition-colors">
                        <ShieldCheck className="text-[#0019A5] mb-8" size={40} />
                        <h3 className="text-xl font-bold text-white mb-6">Unmatched Security</h3>
                        <p className="text-[#64748b] leading-relaxed font-light">
                            Our patent-pending triple consensus blockchain ensures your assets are fortified with the highest level of cryptographic integrity.
                        </p>
                    </div>
                    <div className="enterprise-card p-12 hover:bg-[#050B2B] transition-colors">
                        <TrendingUp className="text-[#0019A5] mb-8" size={40} />
                        <h3 className="text-xl font-bold text-white mb-6">Proven Growth</h3>
                        <p className="text-[#64748b] leading-relaxed font-light">
                            SEO mastery and custom AI integrations driving real-world results without relying on a single dime of paid advertising.
                        </p>
                    </div>
                </div>
            </section>

            {/* Strategic Partnership Deep Dive */}
            <section className="container mx-auto px-6 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
                    <div className="lg:col-span-2">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Fueling Strategic <br /> Growth.</h2>
                        <p className="text-[#94a3b8] text-lg leading-relaxed font-light mb-8">
                            Collaborations like our alliance with Activate Supplements underscore the global market demand for Xeris Layer-1 technology.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1 w-2 h-2 bg-[#0019A5] rounded-full shrink-0"></div>
                                <p className="text-sm text-[#F0F2F5] font-medium leading-relaxed">Direct equity stakes signaling deep investor confidence.</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 w-2 h-2 bg-[#0019A5] rounded-full shrink-0"></div>
                                <p className="text-sm text-[#F0F2F5] font-medium leading-relaxed">Integration into wellness protocols for instant tokenized liquidity.</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 w-2 h-2 bg-[#0019A5] rounded-full shrink-0"></div>
                                <p className="text-sm text-[#F0F2F5] font-medium leading-relaxed">Kill fees as institutional safeguards of technical integrity.</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <div className="enterprise-card overflow-hidden bg-[#0A123D]">
                            <div className="p-12 border-b border-white/5 flex items-center justify-between flex-wrap gap-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white flex items-center justify-center rounded">
                                        <span className="text-black font-black text-xs uppercase">ACTIVATE</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">Activate Supplements</h4>
                                        <p className="text-[#64748b] text-[10px] uppercase tracking-widest">Biotech Partner</p>
                                    </div>
                                </div>
                                <div className="p-3 px-6 bg-[#0019A5]/10 border border-[#0019A5]/30 rounded text-[#0019A5] text-[10px] font-black uppercase tracking-widest">
                                    Live Integration
                                </div>
                            </div>
                            <div className="p-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div>
                                    <h5 className="text-[#F0F2F5] font-bold text-sm mb-4">Equity Catalyst</h5>
                                    <p className="text-xs text-[#64748b] leading-relaxed">
                                        7% immediate stake in Activate, establishing a financial bridge between tech innovation and established market demand.
                                    </p>
                                </div>
                                <div>
                                    <h5 className="text-[#F0F2F5] font-bold text-sm mb-4">Revenue Synergy</h5>
                                    <p className="text-xs text-[#64748b] leading-relaxed">
                                        20% of Super Human Program yields, leveraging XerisCoin's low-fee transactions for wellness distributions.
                                    </p>
                                </div>
                                <div className="md:col-span-2 border-t border-white/5 pt-10">
                                    <p className="text-sm italic text-[#94a3b8] leading-relaxed">
                                        "This partnership validates the edge of XerisCoin: 10K+ TPS testnet, treasury-backed security, and a direct path to $50M market cap."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="container mx-auto px-6 py-40 text-center">
                <h2 className="text-3xl font-display font-medium text-[#F0F2F5] mb-12 uppercase tracking-[0.2em]">Join the ecosystem</h2>
                <button className="btn-primary px-16 py-6 text-sm uppercase tracking-widest font-black shadow-brand-glow">
                    Partner With Us
                </button>
            </section>
        </div>
    );
};

export default About;
