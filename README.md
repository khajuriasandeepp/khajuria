# 🛡️ Project: Security Operations Dashboard (v1.0.4)
**Author:** Sandeep Khajuria // ISO 27001 Lead Auditor & Security Analyst

---

## 🖥️ System Overview
A high-performance, security-focused portfolio dashboard built with **React**, **Tailwind 4**, and **FastAPI**. This project serves as a live demonstration of automated threat-hunting capabilities, technical hardening, and adherence to Information Security Management Systems (ISMS).

> **Status:** ACTIVE_MONITORING
> **Node:** v24.14.1
> **Security Baseline:** ISO 27001:2022 Compliant

---

## 🚀 Key Features

### 1. Active Security Probe (FastAPI Backend)
A live utility that performs real-time security header audits on target domains. 
- **Functionality:** Analyzes `X-Frame-Options`, `Content-Security-Policy`, and `HSTS` headers.
- **Tech:** Python, FastAPI, Uvicorn.

### 2. Terminal-Style Bento Interface
A custom UI designed to mimic a **Security Operations Center (SOC)** dashboard.
- **Typewriter Effect:** Automated dossier readout on system boot.
- **Bento Architecture:** Modular layout optimized for high-density information display.
- **Responsive Design:** Hardened for mobile and desktop viewing.

### 3. Technical Repository Dossier
A centralized, scrollable "Mainframe" housing core automation and defense tools:
- **SharvaPrime Engine:** High-concurrency Python orchestration.
- **Network Monitor:** Anomaly detection and latency alerting.
- **Mail Shield:** Sybil attack mitigation via API-driven blacklisting.

---

## 🛠️ Technical Weaponry (Tech Stack)

| Category | Tools |
| :--- | :--- |
| **Core Languages** | Python (Expert), JavaScript (React), Bash Scripting |
| **Security & Audit** | ISO 27001:2022 LA, ISMS Implementation, Risk Assessment |
| **Systems** | Linux (10+ Years - Debian/RHEL/Arch), Docker, Git |
| **Web Infrastructure** | FastAPI, Django, Tailwind 4, Vite |

---

## 📦 Local Installation & Deployment

### Prerequisites
- Node.js (v18+)
- Python 3.10+
- Git

### Frontend Setup
```bash
git clone [https://github.com/warloccarlos/portfolio.git](https://github.com/warloccarlos/portfolio.git)
cd portfolio/frontend
npm install
npm run dev -- --force
