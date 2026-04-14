
import React, { useState, useEffect } from 'react';
import { Shield, Terminal, Activity, Search, ExternalLink, Cpu, Database, Server, Lock, Code2, AlertTriangle, Radio, Fingerprint } from 'lucide-react';

const DecryptText = ({ text, isVisible }) => {
  const [display, setDisplay] = useState('');
  const chars = '!@#$%^&*()_+NIC-762/<>?';

  useEffect(() => {
    if (!isVisible) return;
    
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplay(
        text.split('')
          .map((char, index) => {
            if (index < iterations) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iterations >= text.length) clearInterval(interval);
      iterations += 1/2; // Adjust speed of decryption here
    }, 30);

    return () => clearInterval(interval);
  }, [isVisible, text]);

  return <span>{display || '********'}</span>;
};

const Portfolio = () => {
  const [scanResult, setScanResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [visibleRepos, setVisibleRepos] = useState([]);
  
  const fullSummary = "Cybersecurity specialist and 10+ year Linux veteran. Bridging the gap between technical automation and global compliance. Specializing in building hardened Python frameworks and secure React interfaces. ISMS Audit Lead. System Ready.";

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
      link: "http://warloccarlos.pythonanywhere.com/"
    },
    {
      title: "PyExpense Ledger",
      tag: "DATA_INTEGRITY",
      description: "Secure financial ledger emphasizing ACID compliance and non-repudiation of records.",
      tech: "Flask / SQLite",
      link: "http://pyexpense.pythonanywhere.com/"
    }
  ];

  // Logic: Typewriter & Repo Reveal
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullSummary.slice(0, i));
      i++;
      if (i > fullSummary.length) {
        clearInterval(typingInterval);
        // Reveal Repos after typing finishes
        projects.forEach((_, idx) => {
          setTimeout(() => {
            setVisibleRepos(prev => [...prev, idx]);
          }, idx * 200);
        });
      }
    }, 30);
    return () => clearInterval(typingInterval);
  }, []);

  // Logic: Security Probe
  const runScan = async (domain) => {
    if (!domain) return;
    setLoading(true);
    try {
      const res = await fetch(`https://khajuriasandeepp.pythonanywhere.com/api/scan?domain=${domain}`);
      if (!res.ok) throw new Error('CORS_OR_NETWORK_ERR');
      const data = await res.json();
      setScanResult(data);
    } catch (err) {
      setScanResult({ 
        error: "NODE_OFFLINE", 
        message: "Remote Security Node unreachable. Verify CORS permissions." 
      });
    }
    setLoading(false);
  };

  return (
    <div className="bg-[#010409] text-slate-300 min-h-screen font-mono p-4 md:p-8 selection:bg-blue-500/30">
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
              <h1 className="text-4xl font-black text-white tracking-tighter uppercase leading-none">
                Sandeep&nbsp;<span className="text-red-600">Khajuria</span>
              </h1>
              <div className="mt-8 min-h-[140px] bg-black/40 p-4 rounded border border-slate-800/50 relative">
                <p className="text-[10px] text-blue-500 font-bold mb-2 tracking-widest flex items-center gap-2">
                  <Terminal size={12} /> SYSTEM_ROOT{">"} _
                </p>
                <p className="text-sm leading-relaxed text-slate-400">
                  {typedText}
                  <span className="inline-block w-2 h-4 bg-blue-500 ml-1 animate-pulse"></span>
                </p>
              </div>
            </div>
          </div>

          {/* Active Roles */}
          <div className="bg-[#0d1117] border border-slate-800 p-4 rounded-xl">
            <h5 className="text-slate-300 text-2xl font-bold uppercase mb-4 tracking-widest flex items-center gap-1">
              Active_System_Permissions
            </h5>
            <div className="space-y-1">
              {[
                { role: "Cyber Security Professional", sub: "Threat Hunting & Hardening" },
                { role: "Web Developer", sub: "Secure App Architecture" },
                { role: "Cyber Security Trainer", sub: "Technical Mentorship" }
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
              <Cpu size={14} className="text-blue-500" /> Weaponry_v2.0
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {["Pen Testing", "App Security", "DevSecOps", "ISO 27001", "Web Development", "Kali Linux", "Scripting", "Trainer"].map(tool => (
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
                <Radio size={14} className="animate-pulse" /> LIVE_PROBE_MODULE
              </h2>
            </div>
            <div className="flex gap-2">
              <input 
                id="target-url"
                type="text" 
                placeholder="DOMAIN_FOR_AUDIT.COM" 
                className="bg-zinc-900 border border-zinc-800 px-4 py-2 text-xs flex-grow focus:border-green-500 outline-none text-green-400 font-bold rounded"
              />
              <button 
                onClick={() => runScan(document.getElementById('target-url').value)}
                className="bg-green-600 text-black text-[10px] font-black px-6 rounded hover:bg-green-400 transition"
              >
                {loading ? "PROBING..." : "EXECUTE"}
              </button>
            </div>
            {scanResult && (
              <div className="mt-4 bg-[#050505] p-4 border border-green-900/50 rounded text-[10px] text-green-500 overflow-x-auto">
                <pre>{JSON.stringify(scanResult, null, 2)}</pre>
              </div>
            )}
          </section>

          {/* Decrypting Repository Stack */}
          <section className="bg-[#0d1117] border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-slate-900 px-4 py-2 border-b border-slate-700 flex items-center gap-2">
              <Code2 size={14} className="text-blue-500" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Repository_Mainframe</span>
            </div>
            <div className="overflow-y-auto scrollbar-hide bg-black">
              {projects.map((p, i) => (
  <div 
    key={i} 
    className={`group p-6 border-b border-slate-900 transition-all duration-1000 transform 
      ${visibleRepos.includes(i) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
  >
    <div className="flex justify-between items-start mb-2">
      <div>
        <span className="text-[8px] text-blue-500 font-bold uppercase tracking-widest mb-1 block">
          {visibleRepos.includes(i) ? '[ DECRYPTED ]' : '[ ENCRYPTED_BLOCK ]'}
        </span>
        
        {/* UPDATED TITLE WITH DECRYPTING LOGIC */}
        <h4 className="text-white font-bold text-lg group-hover:text-blue-400 transition font-mono">
          <DecryptText text={p.title} isVisible={visibleRepos.includes(i)} />
        </h4>
      </div>
      
      <a href={p.link} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-white p-2 bg-slate-900 rounded transition">
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

      <footer className="mt-12 text-center border-t border-slate-900 py-10 opacity-20">
         <p className="text-[9px] tracking-[0.5em] text-white uppercase">S. Khajuria // Authorized_Personnel_Only</p>
      </footer>
    </div>
  );
};

export default Portfolio;