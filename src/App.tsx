import { motion } from 'framer-motion';
import { Cpu, Globe, Rocket, Shield, ArrowRight, Zap, Bot, Database } from 'lucide-react';

function App() {
  return (
    <div className="bg-grid min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-md border-b border-white/10">
        <div className="text-2xl font-bold tracking-tighter">
          MARCOM<span className="text-gradient">NATION</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-muted-text">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#deliveries" className="hover:text-white transition">Deliveries</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
        <button className="premium-btn text-sm py-2 px-6">Command Growth</button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 flex flex-col items-center text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-accent-cyan mb-8">
            <Zap size={14} /> AI-NATIVE BRAND INTELLIGENCE
          </div>
          <h1 className="text-6xl md:text-8xl mb-8 leading-[1.1]">
            Orchestrating Growth Through <span className="text-gradient">AI Intelligence</span>
          </h1>
          <p className="text-xl text-muted-text mb-12 max-w-2xl mx-auto">
            We bridge the gap between technical precision and strategic vision.
            Scaling startup speed into enterprise impact using our proprietary AI ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="premium-btn flex items-center gap-2">
              Explore Our Tech <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
              View Deliveries
            </button>
          </div>
        </motion.div>

        {/* Decorative AI Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[800px] bg-accent-indigo/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[400px] h-[400px] bg-accent-cyan/10 rounded-full blur-[80px] pointer-events-none" />
      </section>

      {/* Stats / Proof Section */}
      <section id="deliveries" className="py-20 px-8 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: 'AI Agents Deployed', value: '150+', icon: Bot },
            { label: 'Global Brands Driven', value: '45+', icon: Globe },
            { label: 'Efficiency Increase', value: '60%', icon: Rocket },
            { label: 'Secure Architectures', value: '100%', icon: Shield },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4 text-accent-cyan">
                <stat.icon size={24} />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-muted-text font-mono uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl mb-6">Expertise at <span className="text-gradient">Command</span></h2>
            <p className="text-muted-text max-w-xl">
              Services are just the surface. Core technology is where we excel, enabling seamless delivery across every vertical.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Intelligent Ecosystems',
                desc: 'Custom LLM integrations and autonomous AI agents designed for specific business logic.',
                icon: Cpu,
                tech: ['React', 'Python', 'OpenAI', 'LangChain']
              },
              {
                title: 'Algorithmic Branding',
                desc: 'Using AI-driven sentiment analysis to shape visual identities that resonate globally.',
                icon: Bot,
                tech: ['Midjourney', 'Stable Diffusion', 'BrandGPT']
              },
              {
                title: 'Scalable Infrastructures',
                desc: 'Future-proof web and mobile platforms built with AI-ready backends for massive scale.',
                icon: Database,
                tech: ['Next.js', 'Node.js', 'AWS', 'PostgreSQL']
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan mb-6">
                  <service.icon size={24} />
                </div>
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-muted-text mb-8 flex-grow">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tech.map(t => (
                    <span key={t} className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 border border-white/10 uppercase">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies / Concreteness Section */}
      <section id="deliveries" className="py-32 px-8 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl mb-6">Proven <span className="text-gradient">Impact</span></h2>
              <p className="text-muted-text">
                Concrete results delivered for global leaders. We don't just build; we optimize for scale and intelligence.
              </p>
            </div>
            <button className="text-sm font-mono text-accent-cyan flex items-center gap-2 group">
              VIEW ALL CASE STUDIES <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                brand: 'Flipkart',
                title: 'AI-Driven Logistics Optimization',
                results: '30% Increase in Delivery Precision',
                desc: 'Re-engineering the core logistics engine using proprietary AI agents to predict demand spikes and optimize route efficiency across 200 sites.',
                image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
              },
              {
                brand: 'Ford',
                title: 'Predictive Brand Sentiment Analysis',
                results: '45% Higher Engagement on Core Campaigns',
                desc: 'Implementing an algorithmic branding system that analyzed millions of social signals to craft a unified global visual identity for new EV launches.',
                image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800'
              },
              {
                brand: 'Vivo',
                title: 'Scalable Omni-Channel Ecosystem',
                results: '2.5M+ Concurrent User Support',
                desc: 'Building a high-performance web infrastructure with an integrated AI chatbot that handles 90% of recursive customer inquiries autonomously.',
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800'
              },
              {
                brand: 'Global Strategy',
                title: 'Intelligent Enterprise Automation',
                results: '60% Reduction in Operational Lag',
                desc: 'Deploying a suite of secure AI agents to automate internal workflows, bridging the gap between legacy data and modern intelligence systems.',
                image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
              }
            ].map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                  <img src={study.image} alt={study.brand} className="object-cover w-full h-full group-hover:scale-110 transition duration-700 opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-color to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="text-xs font-mono text-accent-cyan mb-2">{study.brand}</div>
                    <div className="text-2xl font-bold">{study.title}</div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="text-sm text-accent-indigo font-bold tracking-tight uppercase">{study.results}</div>
                  <p className="text-muted-text text-sm leading-relaxed">
                    {study.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-1 text-accent-cyan inline-block mb-8"
            >
              <div className="bg-bg-color px-4 py-2 rounded-lg text-sm font-mono leading-none">
                ESTABLISHED 2018 | AI-READY
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-6xl mb-8 leading-tight">
              Merging startup <span className="text-gradient">speed</span> with enterprise <span className="text-gradient">scale</span>.
            </h2>
            <p className="text-muted-text text-lg mb-8">
              Marcomnation is not just an agency; we are a technical partner for brands that demand intelligence.
              Our mission is to democratize high-level AI capabilities, making them the standard delivery for every client, every project, every time.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <div className="text-accent-cyan font-bold mb-2">INTELLIGENT FIRST</div>
                <div className="text-sm text-muted-text">AI isn't an add-on; it's our foundational architecture.</div>
              </div>
              <div>
                <div className="text-accent-cyan font-bold mb-2">GLOBAL REACH</div>
                <div className="text-sm text-muted-text">Strategizing and executing impact across 15+ countries.</div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-square rounded-full border border-white/5 p-12 relative animate-pulse">
              <div className="absolute inset-0 bg-accent-cyan/5 rounded-full blur-3xl" />
              <div className="w-full h-full rounded-full border border-accent-cyan/20 flex items-center justify-center p-20">
                <Cpu size={120} className="text-accent-cyan opacity-50" />
              </div>
            </div>
            {/* Floating Tech Badges */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-10 right-0 glass-card p-4 text-xs font-mono"
            >
              NEURAL_ENGINE_ACTIVE
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-20 left-0 glass-card p-4 text-xs font-mono"
            >
              DELIVERY_PRECISION_99%
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-sm">
            <div className="text-2xl font-bold tracking-tighter mb-6">
              MARCOM<span className="text-gradient">NATION</span>
            </div>
            <p className="text-muted-text text-sm">
              We are the tech-first growth engine for the next generation of global brands.
              Available for new commands 2026.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div>
              <h4 className="text-sm uppercase tracking-widest text-muted-text mb-6">Network</h4>
              <ul className="flex flex-col gap-4 text-sm">
                <li><a href="#" className="hover:text-accent-cyan transition">Instagram</a></li>
                <li><a href="#" className="hover:text-accent-cyan transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-accent-cyan transition">Behance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-widest text-muted-text mb-6">Inquiries</h4>
              <ul className="flex flex-col gap-4 text-sm">
                <li><a href="mailto:hello@marcomnation.com" className="hover:text-accent-cyan transition">hello@marcomnation.com</a></li>
                <li><button className="text-accent-cyan font-bold">Start Sequence</button></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
