
import React, { useState } from 'react';
import { Shield, Terminal, Activity, Search, ExternalLink, Cpu, Database, Server, Lock, Code2, AlertTriangle, Radio, Fingerprint } from 'lucide-react';

const Portfolio = () => {
  const [scanResult, setScanResult] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const fullSummary = "Cybersecurity and DevSecOps professional with 11+ years in application security, VAPT and delivery engineering. Certified ISO 27001 Lead Auditor with extensive Linux experience. I investigate real-world access and data exposure risks, help teams fix findings, and integrate SAST into release workflows.";

  // Project Data
  const projects = [
    {
      title: "SharvaPrime Engine",
      tag: "CORE_AUTOMATION",
      description: "Python framework for high-concurrency background processing and system-level task orchestration.",
      tech: "Python / Concurrency",
      link: "https://github.com/warloccarlos/SharvaPrime"
    },
    {
      title: "Network Monitor",
      tag: "INFRA_DEFENSE",
      description: "Real-time service health tracking utility with latency anomaly detection and automated alerting.",
      tech: "Python / Networking",
      link: "https://github.com/warloccarlos/python_monitor"
    },
    {
      title: "Disposable Mail Shield",
      tag: "APP_HARDENING",
      description: "API-driven database used to mitigate Sybil attacks by blacklisting temporary email providers.",
      tech: "Python / SecOps",
      link: "https://epapi.pythonanywhere.com/"
    },
    {
      title: "PyExpense Ledger",
      tag: "DATA_INTEGRITY",
      description: "Flask and SQLite financial record application. Explore the implementation and its data handling approach.",
      tech: "Flask / SQLite",
      link: "https://pyexpense.pythonanywhere.com/"
    }
  ];

  // Logic: Security Probe
  const runScan = async (domain) => {
    const target = domain.trim().toLowerCase();
    if (!/^(?=.{1,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/.test(target)) {
      setScanResult({ error: 'Enter a valid domain, such as example.com.' });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`https://khajuriasandeepp.pythonanywhere.com/api/scan?domain=${encodeURIComponent(target)}`);
      if (!res.ok) throw new Error('CORS_OR_NETWORK_ERR');
      const data = await res.json();
      setScanResult(data);
    } catch {
      setScanResult({ 
        error: "NODE_OFFLINE", 
        message: "The demonstration service is currently unavailable." 
      });
    }
    setLoading(false);
  };

  return (
    <div className="bg-[#010409] text-slate-300 min-h-screen font-mono p-4 md:p-8 selection:bg-blue-500/30">
      <a className="sr-only focus:not-sr-only focus:text-white" href="#main-content">Skip to content</a>
      <header className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
        <a href="#main-content" className="text-white text-xl font-bold tracking-tight">Sandeep<span className="text-red-500">.</span></a>
        <nav aria-label="Main navigation" className="flex flex-wrap gap-5 text-xs text-slate-300">
          <a href="#experience" className="hover:text-white">Experience</a><a href="#projects" className="hover:text-white">Projects</a><a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>
      <section id="main-content" className="max-w-6xl mx-auto mb-8 rounded-xl border border-slate-700 bg-[#101c27] p-6 md:p-10">
        <p className="text-xs font-bold tracking-widest text-blue-400 uppercase">Application security · DevSecOps · ISO 27001</p>
        <h2 className="mt-3 mb-4 text-3xl md:text-5xl font-bold text-white leading-tight">Security judgment, backed by engineering experience.</h2>
        <p className="max-w-3xl text-sm md:text-base text-slate-300 leading-relaxed">I’m Sandeep Khajuria. For over 11 years I’ve assessed applications, investigated real-world exposure, worked with developers on fixes, and improved how teams build and release software. I’m a certified ISO 27001 Lead Auditor and have used Linux extensively throughout my work.</p>
        <div className="flex flex-wrap gap-3 mt-6">
          <a className="bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold text-sm px-5 py-3 rounded" href="mailto:sandykhajuria@gmail.com?subject=Opportunity%20for%20Sandeep%20Khajuria">Email me</a>
          <a className="border border-slate-600 hover:border-blue-400 text-white font-bold text-sm px-5 py-3 rounded" href={`${import.meta.env.BASE_URL}Sandeep_Khajuria_Resume.pdf`} download>Download resume</a>
          <a className="border border-slate-600 hover:border-blue-400 text-white font-bold text-sm px-5 py-3 rounded" href="https://github.com/warloccarlos" target="_blank" rel="noopener noreferrer">GitHub profile</a>
        </div>
      </section>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: IDENTITY & ROLES */}
        <aside className="lg:col-span-5 space-y-6">
          {/* Profile Terminal */}
          <div className="bg-[#0d1117] border border-slate-800 rounded-xl shadow-2xl overflow-hidden">
            <div className="bg-slate-900 px-4 py-2 flex items-center gap-2 border-b border-slate-800">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
              </div>
              <span className="text-[10px] text-slate-500 ml-2 font-bold tracking-widest">USER_AUTH.EXE</span>
            </div>
            <div className="p-8">
              <Fingerprint size={32} className="text-red-600" />
              <h1 className="text-4xl font-black text-white tracking-tighter uppercase leading-none" style={{ fontFamily: "'CyberFont', sans-serif" }}>
                Sandeep&nbsp;<span className="text-red-600">Khajuria</span>
              </h1>
              <div className="mt-8 min-h-[140px] bg-black/40 p-4 rounded border border-slate-800/50 relative">
                <p className="text-[10px] text-blue-500 font-bold mb-2 tracking-widest flex items-center gap-2">
                  <Terminal size={12} /> SYSTEM_ROOT{">"} _
                </p>
                <p className="text-sm leading-relaxed text-slate-400">
                  {fullSummary}
                </p>
              </div>
            </div>
          </div>

          {/* Active Roles */}
          <div className="bg-[#0d1117] border border-slate-800 p-4 rounded-xl">
            <h5 className="text-slate-300 text-2xl font-bold uppercase mb-4 tracking-widest flex items-center gap-1">
              Experience at a glance
            </h5>
            <div className="space-y-1">
              {[
                { role: "Senior Manager, DevOps · HCL", sub: "GitHub, MS TFS, deployment pipelines and SAST" },
                { role: "Senior Manager, AppSec · HCL", sub: "Security reviews, remediation and training" },
                { role: "Manager, AppSec · Concentrix", sub: "VAPT and prerelease security assessment" }
              ].map((r, i) => (
                <div key={i} className="bg-black/40 border-l-2 border-blue-600 p-1 hover:bg-blue-600/5 transition">
                  <p className="text-[11px] font-bold text-white group-hover:text-blue-400 transition">{r.role}</p>
                  <p className="text-[9px] text-slate-600 uppercase tracking-tighter">{r.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Weaponry & Tools */}
          <div className="bg-[#0d1117] border border-slate-800 p-6 rounded-xl">
            <h3 className="text-white text-[10px] font-bold uppercase mb-4 flex items-center gap-2">
              <Cpu size={14} className="text-blue-500" /> Focus and tools
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {["Pen Testing", "API Security", "DevSecOps", "ISO 27001 Lead Auditor", "GitHub / MS TFS", "Linux", "Python / Bash", "SAST / DAST"].map(tool => (
                <div key={tool} className="bg-black/40 border border-slate-800 p-2 text-[10px] rounded hover:border-blue-500/50 transition cursor-default">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* RIGHT COLUMN: TOOLS & REPOS */}
        <main className="lg:col-span-7 space-y-6">
          
          {/* Security Probe */}
          <section className="bg-black border border-green-900/30 p-6 rounded-xl shadow-inner">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-green-500 text-xs font-bold flex items-center gap-2">
                <Radio size={14} className="animate-pulse" /> Optional domain check demo
              </h2>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">A technical demonstration, not a penetration test or security certification. Use only a domain you own or are authorized to assess.</p>
            <div className="flex gap-2">
              <input 
                id="target-url"
                type="text" 
                aria-label="Authorized domain" placeholder="example.com"
                className="bg-zinc-900 border border-zinc-800 px-4 py-2 text-xs flex-grow focus:border-green-500 outline-none text-green-400 font-bold rounded"
              />
              <button 
                onClick={() => runScan(document.getElementById('target-url').value)}
                className="bg-green-600 text-black text-[10px] font-black px-6 rounded hover:bg-green-400 transition"
              >
                {loading ? "CHECKING..." : "RUN CHECK"}
              </button>
            </div>
            {scanResult && (
              <div className="mt-4 bg-[#050505] p-4 border border-green-900/50 rounded text-[10px] text-green-500 overflow-x-auto">
                <pre>{JSON.stringify(scanResult, null, 2)}</pre>
              </div>
            )}
          </section>

          {/* Decrypting Repository Stack */}
          <section id="projects" className="bg-[#0d1117] border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-slate-900 px-4 py-2 border-b border-slate-700 flex items-center gap-2">
              <Code2 size={14} className="text-blue-500" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Selected projects</span>
            </div>
            <div className="overflow-y-auto scrollbar-hide bg-black">
              {projects.map((p, i) => (
  <div 
    key={i} 
    className="group p-6 border-b border-slate-900"
  >
    <div className="flex justify-between items-start mb-2">
      <div>
        <span className="text-[8px] text-blue-500 font-bold uppercase tracking-widest mb-1 block">
          [ PROJECT ]
        </span>
        
        {/* UPDATED TITLE WITH DECRYPTING LOGIC */}
        <h4 className="text-white font-bold text-lg group-hover:text-blue-400 transition font-mono">
          {p.title}
        </h4>
      </div>
      
      <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.title}`} className="text-slate-400 hover:text-white p-2 bg-slate-900 rounded transition">
        <ExternalLink size={16} />
      </a>
    </div>

    {/* The rest of your card content (Description, Tech, etc.) stays the same */}
    <p className="text-xs text-slate-500 leading-relaxed mb-4">{p.description}</p>
    <div className="flex items-center justify-between">
       <span className="text-[10px] text-slate-600 font-bold flex items-center gap-1"><Cpu size={10} /> {p.tech}</span>
       <div className="h-[1px] flex-grow mx-4 bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
       <div className="text-[8px] text-slate-800 font-mono">PTR_0x{i}AF</div>
    </div>
  </div>
))}
            </div>
          </section>
        </main>
      </div>

      <section id="experience" className="max-w-6xl mx-auto mt-8 bg-[#0d1117] border border-slate-800 rounded-xl p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Security work in practice</h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm leading-relaxed">
          <div><h3 className="text-blue-400 font-bold mb-2">Find meaningful exposure</h3><p>Identified a data leak through a rogue employee role and reported failures in IP restrictions, API rate limiting and authentication for internal networks.</p></div>
          <div><h3 className="text-blue-400 font-bold mb-2">Work through the fix</h3><p>Helped development teams address Java application vulnerabilities and reviewed remediation of security findings.</p></div>
          <div><h3 className="text-blue-400 font-bold mb-2">Build security into delivery</h3><p>Automated GitHub and MS TFS workflows for Python, .NET and Node.js applications and integrated SAST scanning into build and release processes.</p></div>
        </div>
      </section>
      <footer id="contact" className="max-w-6xl mx-auto mt-12 border-t border-slate-800 py-10">
         <h2 className="text-white text-2xl font-bold mb-3">Let’s talk about your opportunity.</h2>
         <p className="text-slate-400 text-sm mb-4">Cybersecurity, application security and DevSecOps leadership.</p>
         <a href="mailto:sandykhajuria@gmail.com" className="text-blue-400 hover:text-blue-300">sandykhajuria@gmail.com</a>
      </footer>
    </div>
  );
};

export default Portfolio;
