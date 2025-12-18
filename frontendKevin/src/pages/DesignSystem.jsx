import React from 'react';
import { Shield, Zap, Target, Code, Cpu, Globe, Lock, BarChart3, HardDrive, ArrowRight, Rocket } from 'lucide-react';

const ColorSwatch = ({ color, name, hex }) => (
    <div className="flex flex-col gap-3">
        <div className={`h-24 w-full rounded-sm border border-white/5 shadow-soft hover:scale-[1.02] transition-transform duration-300`} style={{ backgroundColor: hex }}></div>
        <div>
            <div className="text-[10px] font-black uppercase tracking-widest text-[#F0F2F5]">{name}</div>
            <div className="text-[10px] font-mono text-[#64748b]">{hex}</div>
        </div>
    </div>
);

const DesignSystem = () => {
    return (
        <div className="min-h-screen bg-[#010414] luxury-grain py-24 selection:bg-[#0019A5]/40">
            {/* Background Glows */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[#0019A5]/5 blur-[180px] rounded-full pointer-events-none -z-10"></div>
            <div className="fixed bottom-0 right-0 w-full h-[600px] bg-[#0019A5]/5 blur-[160px] pointer-events-none -z-10"></div>

            <div className="container mx-auto px-6">
                {/* Header */}
                <header className="mb-24 border-b border-white/5 pb-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                        <div>
                            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-sm bg-[#0019A5]/10 border border-[#0019A5]/30 text-[#0019A5] text-[9px] tracking-[0.4em] font-black mb-6 uppercase">
                                System Documentation
                            </div>
                            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 tracking-tighter">Xeris <span className="text-[#4E5BA6]">Design.</span></h1>
                        </div>
                        {/* Logo Demonstration */}
                        <div className="flex items-center gap-4 p-8 enterprise-card bg-[#050B2B]">
                            <img src="/logos/LogoDark.png" alt="Xeris Logo" className="h-12 w-auto" />
                        </div>
                    </div>
                    <p className="text-xl text-[#94a3b8] max-w-2xl font-light leading-relaxed">
                        The institutional-grade design system for the Xeris Protocol. Minimalist, high-performance, and engineering-focused aesthetics for global liquidity standard.
                    </p>
                </header>

                {/* Colors Section */}
                <section className="mb-32">
                    <div className="flex items-center gap-6 mb-12">
                        <h2 className="text-2xl font-display font-bold uppercase tracking-widest text-white">01. Color Palette</h2>
                        <div className="h-px flex-1 bg-white/5"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                        <ColorSwatch name="Brand Blue" hex="#0019A5" />
                        <ColorSwatch name="Brand Navy" hex="#010414" />
                        <ColorSwatch name="Brand Deep" hex="#000B4F" />
                        <ColorSwatch name="Brand Space" hex="#0A123D" />
                        <ColorSwatch name="Brand Midnight" hex="#050B2B" />
                        <ColorSwatch name="Brand Muted" hex="#4E5BA6" />
                        <ColorSwatch name="Brand Light" hex="#F0F2F5" />
                        <ColorSwatch name="Text Body" hex="#94a3b8" />
                        <ColorSwatch name="Text Muted" hex="#64748b" />
                    </div>
                </section>

                {/* Typography Section */}
                <section className="mb-32">
                    <div className="flex items-center gap-6 mb-12">
                        <h2 className="text-2xl font-display font-bold uppercase tracking-widest text-white">02. Typography</h2>
                        <div className="h-px flex-1 bg-white/5"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div className="space-y-12">
                            <div>
                                <div className="text-[10px] text-[#4E5BA6] font-black uppercase tracking-[0.3em] mb-6">Display Font: Plus Jakarta Sans</div>
                                <h1 className="text-6xl font-bold mb-4 tracking-tight">Heading Level 1</h1>
                                <h2 className="text-4xl font-bold mb-4 tracking-tight">Heading Level 2</h2>
                                <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase tracking-[0.1em]">Heading Level 3</h3>
                            </div>
                            <div>
                                <div className="text-[10px] text-[#4E5BA6] font-black uppercase tracking-[0.3em] mb-6">Sans Font: Inter</div>
                                <p className="text-lg leading-relaxed text-[#94a3b8] font-light italic">
                                    "Engineering the global standard for digital value exchange."
                                </p>
                                <p className="text-lg leading-relaxed text-[#94a3b8] font-light mt-4">
                                    This is the primary body text. It uses the Inter font family with a light weight. Xeris delivers the hardware-secured triple consensus blockchain optimized for high-frequency institutional RWA settlements.
                                </p>
                                <div className="mt-8 flex gap-8">
                                    <div className="text-[10px] text-[#64748b] font-mono select-all p-3 bg-black/40 rounded border border-white/5 uppercase tracking-widest">
                                        Standard Mono Label
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="enterprise-card p-12 bg-[#050B2B] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#0019A5]/10 blur-3xl rounded-full"></div>
                            <div className="grid grid-cols-2 gap-12 relative z-10">
                                <div>
                                    <div className="text-5xl font-display font-bold text-white mb-2 tracking-tighter">Aa</div>
                                    <div className="text-[10px] text-[#64748b] uppercase tracking-widest font-black">Display Bold</div>
                                </div>
                                <div>
                                    <div className="text-5xl font-sans font-light text-white mb-2 tracking-tighter">Aa</div>
                                    <div className="text-[10px] text-[#64748b] uppercase tracking-widest font-black">Sans Light</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-display font-black text-white mb-2 tracking-widest italic underline decoration-[#0019A5] decoration-4 underline-offset-8">ITALIC</div>
                                    <div className="text-[10px] text-[#64748b] uppercase tracking-widest font-black mt-4">Brand Accent</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-display font-bold text-[#4E5BA6] mb-2 tracking-tighter">SUBTLE</div>
                                    <div className="text-[10px] text-[#64748b] uppercase tracking-widest font-black">Brand Muted</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Brand Assets & Token */}
                <section className="mb-32">
                    <div className="flex items-center gap-6 mb-12">
                        <h2 className="text-2xl font-display font-bold uppercase tracking-widest text-white">03. Brand Assets</h2>
                        <div className="h-px flex-1 bg-white/5"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Token Branding */}
                        <div className="enterprise-card aspect-[4/3] relative overflow-hidden flex items-center justify-center p-8 bg-gradient-to-br from-[#0A123D] to-[#000B4F]">
                            <div className="w-full h-full relative border border-white/5 rounded flex items-center justify-center">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,25,165,0.1),transparent)]"></div>
                                <div className="text-[100px] font-display font-black text-[#0019A5]/10 select-none">$XERIS</div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#0019A5]/20 rounded-full animate-pulse"></div>
                                <div className="relative z-10 w-24 h-24 bg-[#0019A5] shadow-brand-glow flex items-center justify-center rounded-sm rotate-45">
                                    <div className="text-white text-3xl font-display font-black -rotate-45">X</div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8 flex flex-col justify-center">
                            <div className="text-[10px] text-[#4E5BA6] font-black uppercase tracking-[0.3em]">Visual Identity</div>
                            <h3 className="text-3xl font-bold text-white">The $XERIS Visual Language</h3>
                            <p className="text-[#94a3b8] font-light leading-relaxed">
                                Our visual language combines aggressive engineering geometry (45° rotations, sharp 2px radii) with high-end luxury textures (grain overlays, deep blurs).
                            </p>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 border border-[#0019A5]/40 flex items-center justify-center rotate-45">
                                    <div className="w-6 h-6 bg-[#0019A5] shadow-brand-glow"></div>
                                </div>
                                <div className="w-12 h-12 border border-white/10 flex items-center justify-center">
                                    <div className="w-8 h-8 border border-[#0019A5]/20 animate-spin-slow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* UI Library */}
                <section className="mb-32">
                    <div className="flex items-center gap-6 mb-12">
                        <h2 className="text-2xl font-display font-bold uppercase tracking-widest text-white">04. UI Elements</h2>
                        <div className="h-px flex-1 bg-white/5"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Action Group */}
                        <div className="enterprise-card p-12 bg-[#050B2B]">
                            <div className="text-[10px] text-[#4E5BA6] font-black uppercase tracking-[0.3em] mb-10">Actions & Navigation</div>
                            <div className="space-y-10">
                                <div className="flex flex-wrap gap-6 items-center">
                                    <button className="btn-primary uppercase tracking-widest text-[11px] font-black px-10 py-4 shadow-brand-glow">Primary Action</button>
                                    <button className="btn-secondary uppercase tracking-widest text-[11px] font-black px-10 py-4">Secondary Action</button>
                                </div>
                                <div className="flex gap-10">
                                    <a href="#" className="nav-link">Navigation Link</a>
                                    <a href="#" className="nav-link text-white underline decoration-[#0019A5] decoration-2 underline-offset-8">Active State</a>
                                </div>
                                <div className="pt-6 border-t border-white/10">
                                    <div className="flex gap-4">
                                        <div className="px-3 py-1 rounded-sm bg-[#0019A5]/10 border border-[#0019A5]/30 text-[#0019A5] text-[9px] tracking-widest font-black uppercase">Tag Label</div>
                                        <div className="px-3 py-1 rounded-sm bg-green-500/10 border border-green-500/30 text-green-500 text-[9px] tracking-widest font-black uppercase">System Live</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Layout Patterns */}
                        <div className="space-y-10">
                            <div className="text-[10px] text-[#4E5BA6] font-black uppercase tracking-[0.3em]">Container Patterns</div>
                            <div className="enterprise-card p-8 group">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-[9px] text-[#4E5BA6] uppercase tracking-[0.3em] font-black">Protocol Metric</div>
                                    <BarChart3 className="text-[#0019A5]" size={16} />
                                </div>
                                <div className="text-3xl text-[#F0F2F5] font-display font-extrabold tracking-tighter mb-4">99.99<span className="text-sm opacity-50 ml-1">%</span></div>
                                <div className="w-full h-1 bg-white/5 overflow-hidden">
                                    <div className="w-[85%] h-full bg-[#0019A5] shadow-brand-glow"></div>
                                </div>
                            </div>
                            <div className="enterprise-card p-8 bg-gradient-to-br from-[#0019A5]/20 to-transparent flex items-center justify-between group">
                                <div>
                                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Join the Network</h4>
                                    <p className="text-xs text-[#64748b]">Strategic protocol entry module.</p>
                                </div>
                                <ArrowRight className="text-[#0019A5] group-hover:translate-x-2 transition-transform" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Iconography */}
                <section className="mb-32">
                    <div className="flex items-center gap-6 mb-12">
                        <h2 className="text-2xl font-display font-bold uppercase tracking-widest text-white">05. Iconography</h2>
                        <div className="h-px flex-1 bg-white/5"></div>
                    </div>

                    <div className="enterprise-card p-12 bg-[#050B2B]">
                        <div className="grid grid-cols-4 md:grid-cols-10 gap-12 justify-items-center">
                            <Shield className="text-[#0019A5]" size={32} />
                            <Zap className="text-[#0019A5]" size={32} />
                            <Target className="text-[#0019A5]" size={32} />
                            <Code className="text-[#0019A5]" size={32} />
                            <Cpu className="text-[#0019A5]" size={32} />
                            <Globe className="text-[#0019A5]" size={32} />
                            <Lock className="text-[#0019A5]" size={32} />
                            <BarChart3 className="text-[#0019A5]" size={32} />
                            <HardDrive className="text-[#0019A5]" size={32} />
                            <Rocket className="text-[#0019A5]" size={32} />
                        </div>
                        <div className="mt-12 pt-8 border-t border-white/5 text-center text-[10px] text-[#64748b] uppercase tracking-widest font-black">
                            Using Lucide React with Brand Blue (#0019A5) Stroke
                        </div>
                    </div>
                </section>

                {/* Interaction Patterns */}
                <section className="mb-32">
                    <div className="flex items-center gap-6 mb-12">
                        <h2 className="text-2xl font-display font-bold uppercase tracking-widest text-white">06. Effects</h2>
                        <div className="h-px flex-1 bg-white/5"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center uppercase tracking-widest font-black text-[10px]">
                        <div className="space-y-6">
                            <div className="h-32 enterprise-card flex items-center justify-center bg-[#0019A5] shadow-brand-glow text-white">brand-glow</div>
                            <div className="text-[#64748b]">Primary Branding Glow</div>
                        </div>
                        <div className="space-y-6">
                            <div className="h-32 enterprise-card flex items-center justify-center shadow-premium bg-[#050B2B] border-[#0019A5]/20 text-[#0019A5]">premium-shadow</div>
                            <div className="text-[#64748b]">Depth & Elevation</div>
                        </div>
                        <div className="space-y-6">
                            <div className="h-32 enterprise-card flex items-center justify-center bg-[#010414] overflow-hidden relative">
                                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#0019A5 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                                <div className="relative text-[#0019A5]/50">Data Grid</div>
                            </div>
                            <div className="text-[#64748b]">Background Patterns</div>
                        </div>
                    </div>
                </section>

                {/* Footer info */}
                <footer className="pt-24 border-t border-white/5 flex flex-col items-center">
                    <img src="/logos/LogoDark.png" alt="Xeris Logo" className="h-10 w-auto mb-8" />
                    <div className="text-[10px] text-[#4E5BA6] font-black uppercase tracking-[0.5em] mb-4">Xeris Protocol Documentation</div>
                    <p className="text-[#64748b] text-xs max-w-lg text-center leading-relaxed">
                        This design system is strictly for the development and maintenance of the Xeris ecosystem.
                        Proprietary and Confidential. © 2025 Xeris Engineering Group.
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default DesignSystem;
