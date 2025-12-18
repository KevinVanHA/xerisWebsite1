import React from 'react';
import { Mail, MessageSquare, Globe, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="fixed top-0 right-0 w-full max-w-4xl h-[400px] bg-[#0019A5]/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

            <section className="container mx-auto px-6 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <div>
                        <p className="text-[#0019A5] font-black text-[10px] tracking-[0.5em] uppercase mb-8">Contact</p>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight">
                            Global <br /> <span className="text-[#4E5BA6]">Partnerships.</span>
                        </h1>
                        <p className="max-w-md text-lg text-[#94a3b8] font-light leading-relaxed mb-12">
                            Connect with Xeris Web Co. to discuss AI and blockchain innovations, institutional tokenization, or strategic venture collaborations.
                        </p>

                        <div className="space-y-10">
                            <div className="flex gap-6 items-center group cursor-pointer">
                                <div className="w-12 h-12 bg-[#0019A5]/10 flex items-center justify-center rounded transition-colors group-hover:bg-[#0019A5]">
                                    <Mail size={20} className="text-[#0019A5] group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-[#64748b] uppercase tracking-widest font-black mb-1">Electronic Mail</p>
                                    <p className="text-white font-medium">zachary@xerisweb.com</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-center group cursor-pointer">
                                <div className="w-12 h-12 bg-[#0019A5]/10 flex items-center justify-center rounded transition-colors group-hover:bg-[#0019A5]">
                                    <MessageSquare size={20} className="text-[#0019A5] group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-[#64748b] uppercase tracking-widest font-black mb-1">Telegram Office</p>
                                    <p className="text-white font-medium">@xeriscoin</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-center group cursor-pointer">
                                <div className="w-12 h-12 bg-[#0019A5]/10 flex items-center justify-center rounded transition-colors group-hover:bg-[#0019A5]">
                                    <Globe size={20} className="text-[#0019A5] group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-[#64748b] uppercase tracking-widest font-black mb-1">Corporate HQ</p>
                                    <p className="text-white font-medium">Austin, Texas — Global Operations</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="enterprise-card p-10 md:p-16 bg-[#050B2B]/40 backdrop-blur-2xl">
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#64748b]">Organization Name</label>
                                    <input type="text" className="w-full bg-black/50 border border-white/5 rounded-sm p-4 text-sm text-white focus:outline-none focus:border-[#0019A5]/50 transition-colors" placeholder="e.g. Goldman Sachs" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#64748b]">Partner Email</label>
                                    <input type="email" className="w-full bg-black/50 border border-white/5 rounded-sm p-4 text-sm text-white focus:outline-none focus:border-[#0019A5]/50 transition-colors" placeholder="name@domain.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#64748b]">Subject of Inquiry</label>
                                <select className="w-full bg-black/50 border border-white/5 rounded-sm p-4 text-sm text-[#94a3b8] focus:outline-none focus:border-[#0019A5]/50 transition-colors appearance-none">
                                    <option>Protocol Integration</option>
                                    <option>RWA Tokenization Inquiry</option>
                                    <option>Investor Relations</option>
                                    <option>General Media</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#64748b]">Initial Brief</label>
                                <textarea rows="4" className="w-full bg-black/50 border border-white/5 rounded-sm p-4 text-sm text-white focus:outline-none focus:border-[#0019A5]/50 transition-colors" placeholder="Define the scope of collaboration..."></textarea>
                            </div>

                            <button type="submit" className="btn-primary w-full py-5 flex items-center justify-center gap-3 shadow-brand-glow group">
                                Submit Proposal <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
