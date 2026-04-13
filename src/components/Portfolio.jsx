import React, { useState, useEffect } from 'react';
import { Shield, Terminal, Activity, Search, ExternalLink, Cpu, Database, Server, Lock, Code2, AlertTriangle, Radio, Fingerprint } from 'lucide-react';

const Portfolio = () => {
  const [scanResult, setScanResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [typedText, setTypedText] = useState('');
  
  const fullSummary = "Specializing in the intersection of technical hardening and governance. 10+ years of Linux experience used to build automated threat-detection tools and secure infrastructure. Accessing secure nodes... System ready.";

  // Typewriter Effect Logic
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullSummary.slice(0, i));
      i++;
      if (i > fullSummary.length) clearInterval(interval);
    }, 40); // Speed of typing
    return () => clearInterval(interval);
  }, []);

  const runScan = async (domain) => {
    const runScan = async (domain) => {
  if (!domain) return;
  setLoading(true);
  try {
    // 1. Update the URL to your live PythonAnywhere link
    const res = await fetch(`https://khajuriasandeepp.pythonanywhere.com/api/scan?domain=${domain}`);
    
    if (!res.ok) throw new Error('API_REJECTED');

    const data = await res.json();
    setScanResult(data);
  } catch (err) {
    // 2. Update the error message to reflect your live environment
    setScanResult({ 
      error: "NODE_OFFLINE", 
      message: "Remote Security Node (PythonAnywhere) is not responding. Check CORS or Server Status." 
    });
  }
  setLoading(false);
};

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
      link: "http://warloccarlos.pythonanywhere.com/"
    },
    {
      title: "PyExpense Ledger",
      tag: "DATA_INTEGRITY",
      description: "Secure financial ledger emphasizing ACID compliance and non-repudiation of records.",
      tech: "Django / SQLite",
      link: "http://pyexpense.pythonanywhere.com/"
    }
  ];

  return (
    <div className="bg-[#010409] text-slate-300 min-h-screen font-mono p-4 md:p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: IDENTITY & TYPING MISSION */}
        <aside className="lg:col-span-5 space-y-6">
          <div className="bg-[#0d1117] border border-slate-800 rounded-xl shadow-2xl overflow-hidden">
            {/* Terminal Header Bar */}
            <div className="bg-slate-900 px-4 py-2 flex items-center gap-2 border-b border-slate-800">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
              </div>
              <span className="text-[10px] text-slate-500 ml-2 font-bold tracking-widest">DOSSIER_ACCESS.EXE</span>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-3 mb-6 text-red-600">
                <Fingerprint size={32} />
                <div className="h-[1px] flex-grow bg-red-900/30"></div>
              </div>
              
              <h1 className="text-4xl font-black text-white tracking-tighter uppercase leading-none">
                Sandeep&nbsp;<span className="text-red-600">Khajuria</span>
              </h1>
              
              <div className="mt-8 min-h-[120px] bg-black/40 p-4 rounded border border-slate-800/50">
                <p className="text-[10px] text-blue-500 font-bold mb-2 tracking-widest flex items-center gap-2">
                  <Terminal size={12} /> C:\USERS\SANDEEPP_K {">"} _
                </p>
                <p className="text-sm leading-relaxed text-slate-400">
                  {typedText}
                  <span className="inline-block w-2 h-4 bg-blue-500 ml-1 animate-pulse"></span>
                </p>
              </div>
            </div>
          </div>

          {/* NEW: SYSTEM ROLES DIV */}
          <div className="bg-[#0d1117] border border-slate-800 p-6 rounded-xl relative overflow-hidden">
            <h3 className="text-white text-[8px] font-bold uppercase mb-4 tracking-widest text-slate-500 flex items-center gap-2">
              <Lock size={14} /> Active_System_Roles
            </h3>
            <div className="space-y-2">
              {[
                { role: "Cyber Security Professional", desc: "Threat Hunting & Infrastructure Hardening" },
                { role: "Full-Stack Web Developer", desc: "High-Performance Secure Application Design" },
                { role: "Cyber Security Trainer", desc: "Mentoring & Technical Skill Transmission" }
              ].map((item, idx) => (
                <div key={idx} className="bg-black/40 border-l-2 border-blue-600 p-2 hover:bg-blue-600/5 transition group">
                  <p className="text-[11px] font-bold text-white group-hover:text-blue-400 transition">{item.role}</p>
                  <p className="text-[9px] text-slate-500 mt-1 uppercase tracking-tighter">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* TECH STACK BENTO */}
          <div className="bg-[#0d1117] border border-slate-800 p-6 rounded-xl">
            <h3 className="text-white text-[10px] font-bold uppercase mb-4 flex items-center gap-2">
              <Cpu size={14} className="text-blue-500" /> Weaponry & Tools
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {["Pen Testing", "Kali Linux/Linux (10y+)", "Flask", "React", "ISO 27001", "Python", "Bash", "Application Security","Network Security", "Training"].map(tool => (
                <div key={tool} className="bg-black/40 border border-slate-800 p-2 text-[10px] rounded hover:border-blue-500/50 transition cursor-default">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* RIGHT COLUMN: REPOS & UTILITIES */}
        <main className="lg:col-span-7 space-y-6">
          
          {/* LIVE TOOL: PROBE */}
          <section className="bg-black border border-green-900/30 p-6 rounded-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-green-500 text-xs font-bold flex items-center gap-2">
                <Radio size={14} className="animate-pulse" /> ACTIVE_SCANNER_v1.0
              </h2>
            </div>
            <div className="flex gap-2">
              <input 
                id="target-domain"
                type="text" 
                placeholder="PROBE_DOMAIN.COM" 
                className="bg-zinc-900 border border-zinc-800 px-4 py-2 text-xs flex-grow focus:border-green-500 outline-none text-green-400 font-bold rounded"
              />
              <button 
                onClick={() => runScan(document.getElementById('target-domain').value)}
                className="bg-green-600 text-black text-[10px] font-black px-6 hover:bg-green-400 transition rounded"
              >
                {loading ? "SCANNING..." : "EXECUTE"}
              </button>
            </div>
            {scanResult && (
              <div className="mt-4 bg-[#050505] p-4 border border-green-900/50 rounded text-[10px] text-green-500 overflow-x-auto">
                <pre>{JSON.stringify(scanResult, null, 2)}</pre>
              </div>
            )}
          </section>

          {/* GITHUB REPOSITORY STACK */}
          <section className="bg-[#0d1117] border border-slate-800 rounded-xl overflow-hidden">
            <div className="bg-slate-800/50 p-3 border-b border-slate-700 flex items-center gap-2">
              <Code2 size={14} className="text-blue-500" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Repository_Mainframe</span>
            </div>
            <div className=" overflow-y-auto scrollbar-hide">
              {projects.map((p, i) => (
                <div key={i} className="group p-6 border-b border-slate-800 hover:bg-blue-600/5 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-[9px] text-blue-500 font-bold tracking-tighter uppercase">{p.tag}</span>
                      <h4 className="text-white font-bold text-lg group-hover:text-blue-400 transition">{p.title}</h4>
                    </div>
                    <a href={p.link} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-white"><ExternalLink size={16} /></a>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">{p.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-600 font-bold italic">{p.tech}</span>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                      <div className="w-1 h-1 bg-blue-500 rounded-full opacity-50"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      <footer className="mt-12 text-center border-t border-slate-900 py-10 opacity-20">
         <p className="text-[9px] tracking-[0.5em] text-white uppercase">S. Khajuria // Authorized Access Only</p>
      </footer>
    </div>
  );
};

export default Portfolio;