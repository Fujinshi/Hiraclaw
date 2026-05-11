
# 🐉 Hiraclaw — Ethical Hacking & Cybersecurity Edition

<div align="center">

**OpenClaude has been modified by [@Fujinshi](https://github.com/Fujinshi) into an ethical hacking AI — specialized for authorized security testing, CTF challenges, and cybersecurity education.**

[![PR Checks](https://github.com/Fujinshi/hiraclaw/actions/workflows/pr-checks.yml/badge.svg?branch=main)](https://github.com/Fujinshi/hiraclaw/actions/workflows/pr-checks.yml)
[![Release](https://img.shields.io/github/v/tag/Fujinshi/hiraclaw?label=release&color=0ea5e9)](https://github.com/Fujinshi/hiraclaw/tags)
[![Discussions](https://img.shields.io/badge/discussions-open-7c3aed)](https://github.com/Fujinshi/hiraclaw/discussions)
[![Security Policy](https://img.shields.io/badge/security-policy-0f766e)](SECURITY.md)
[![License](https://img.shields.io/badge/license-MIT-2563eb)](LICENSE)
[![Telegram](https://img.shields.io/badge/Contact-@hirakox-0088cc)](https://t.me/hirakox)

**A modified OpenClaude — rebuilt for ethical hacking, penetration testing, and security research.**

</div>

---

## 👨‍💻 About This Fork

**Hiraclaw** is a customized version of [OpenClaude](https://github.com/Gitlawb/openclaude) — an open-source coding-agent CLI — **modified by Fujinshi** ([Telegram: @hirakox](https://t.me/hirakox)) to serve as an **AI for ethical hacking, authorized penetration testing, and cybersecurity education.**

> ⚠️ **DISCLAIMER**: This tool is designed for **LEGITIMATE SECURITY TESTING** and **EDUCATIONAL PURPOSES ONLY**. You must have **written authorization** before testing any system you do not own. Unauthorized access is illegal under UU ITE Indonesia, CFAA, and other applicable laws. **Use at your own risk.**

### 🛠️ Key Modifications from OpenClaude

| Modification | Description |
|--------------|-------------|
| **Ethical Hacking System Prompt** | Pre-configured for CTF, bug bounty, pentesting |
| **Multi-Key Auto-Rotation** | Gemini API keys rotate automatically on rate limit |
| **Custom Public API Support** | Built-in for GLM-4, Phi-2, and other free APIs |
| **Termux / Android Optimized** | Full support with Ubuntu proot |
| **Indonesian Language Support** | Native responses in Bahasa Indonesia |
| **Legal Disclaimer Enforcement** | Mandatory authorization checks and warnings |

---

## ✨ Features

- ✅ **One CLI** for cloud and local model providers
- ✅ **Ethical Hacking Mode** — CTF, pentesting, bug bounty ready
- ✅ **Multi-Key Auto-Rotation** — never get rate-limited (Gemini/OpenAI)
- ✅ **Save provider profiles** with `/provider`
- ✅ **Supports**: OpenAI-compatible APIs, Gemini, GitHub Models, Ollama, Atomic Chat, custom public APIs
- ✅ **Terminal-first workflow**: prompts, tools, agents, MCP, slash commands, streaming
- ✅ **Android/Termux** — full installation guide included
- ✅ **Bahasa Indonesia** — respond naturally in Indonesian

---

## 🚀 Quick Start

### Install

```bash
npm install -g @fujinshi/hiraclaw
```

If ripgrep not found, install ripgrep system-wide and confirm rg --version works.

Start

```bash
hiraclaw
```

Inside Hiraclaw:

· /provider — guided provider setup
· /onboard-github — GitHub Models onboarding

Fastest Ethical Hacking Setup (OpenRouter Free)

```bash
export CLAUDE_CODE_USE_OPENAI=1
export OPENAI_API_KEY=your_openrouter_key
export OPENAI_BASE_URL=https://openrouter.ai/api/v1
export OPENAI_MODEL=qwen/qwen3.6-plus-preview:free
export HIRACLAW_ETHICAL_MODE=true

hiraclaw
```

Fastest Local Ollama Setup

```bash
export CLAUDE_CODE_USE_OPENAI=1
export OPENAI_BASE_URL=http://localhost:11434/v1
export OPENAI_MODEL=qwen2.5-coder:7b

hiraclaw
```

Gemini Multi-Key Auto-Rotation

```bash
export GEMINI_API_KEYS="AIzaSyA..."
export CLAUDE_CODE_USE_GEMINI=1
export HIRACLAW_ETHICAL_MODE=true

hiraclaw
```

---

📚 Setup Guides

Platform Guide
Android (Termux) ANDROID_INSTALL.md
Windows docs/quick-start-windows.md
macOS / Linux docs/quick-start-mac-linux.md
Advanced Setup docs/advanced-setup.md

---

🔧 Supported Providers

Provider Setup Path Best For
OpenAI-compatible /provider or env vars OpenRouter, DeepSeek, Groq, Mistral
Hicap /provider Custom API integration
Gemini (Multi-Key) env vars Auto-rotate on rate limit
GitHub Models /onboard-github Free GitHub Copilot models
Ollama /provider or ollama launch Local offline testing
Atomic Chat /provider Local Apple Silicon models

---

🛡️ Ethical Hacking Mode

When HIRACLAW_ETHICAL_MODE=true is set:

✅ Permitted Activities

· Penetration testing on systems you own
· CTF platforms (HackTheBox, TryHackMe, PicoCTF, OverTheWire)
· Bug bounty programs (within scope)
· Security research in isolated VMs/containers
· Exploit development for education (lab only)
· Reverse engineering for learning
· Malware analysis in sandboxed environments

❌ Rejected Requests

· Targeting systems without written authorization
· Malware/RAT creation for malicious purposes
· DDoS attacks
· Phishing campaigns
· Credential theft
· Detection evasion for malicious intent

⚠️ Mandatory Disclaimers

Every security tool or technique response includes:

· ⚠️ This is for educational/authorized testing only
· 📝 Ensure written permission before testing any system
· 🏛️ Comply with all applicable laws in your jurisdiction

---

🤖 Agent Routing for Security Workflows

Add to ~/.hiraclaw.json:

```json
{
  "agentModels": {
    "recon-scanner": {
      "base_url": "https://api.openrouter.ai/api/v1",
      "api_key": "your-key",
      "model": "google/gemini-2.0-flash-exp:free"
    },
    "exploit-lab": {
      "base_url": "http://localhost:11434/v1",
      "api_key": "",
      "model": "qwen2.5-coder:7b"
    }
  },
  "agentRouting": {
    "Reconnaissance": "recon-scanner",
    "Exploitation": "exploit-lab",
    "Reporting": "gpt-4o",
    "default": "recon-scanner"
  }
}
```

---

📱 Android / Termux Installation

Full guide: ANDROID_INSTALL.md

```bash
# Install Termux from F-Droid
pkg update && pkg upgrade
pkg install nodejs-lts git proot-distro

# Clone and setup
git clone https://github.com/Fujinshi/hiraclaw.git
cd hiraclaw
npm install
npm link

# Install Ubuntu and Bun
proot-distro install ubuntu
proot-distro login ubuntu
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc

# Build and run
cd /data/data/com.termux/files/home/hiraclaw
bun run build
node dist/cli.mjs
```

---

🔗 Headless gRPC Server

Run Hiraclaw as a gRPC service:

```bash
npm run dev:grpc              # Server on localhost:50051
npm run dev:grpc:cli          # Test client
```

---

🧪 Source Build & Local Development

```bash
bun install
bun run build
node dist/cli.mjs
```

Development commands:

· bun run dev — watch mode
· bun test — run tests
· bun run test:coverage — coverage report
· bun run smoke — smoke tests
· bun run security:pr-scan — security scan

---

📁 Repository Structure

```
hiraclaw/
├── src/               # Core CLI/runtime
├── scripts/           # Build and maintenance scripts
├── docs/              # Documentation
├── python/            # Python helpers
├── vscode-extension/  # VS Code extension
├── bin/               # CLI launcher entrypoints
└── .github/           # CI/CD automation
```

---

💬 Community & Support

Platform Link
Telegram @hirakox — Direct support
GitHub Issues Report bugs
Discussions Q&A and ideas

---

🤝 Contributing

Contributions are welcome! For larger changes, open an issue first.

```bash
bun run build
bun run test:coverage
bun run smoke
```

---

⚠️ Legal & Disclaimer

Hiraclaw is a modified version of OpenClaude, which originated from the Claude Code codebase.

· Hiraclaw is NOT affiliated with, endorsed by, or sponsored by Anthropic
· "Claude" and "Claude Code" are trademarks of Anthropic PBC
· This tool is for educational purposes and authorized testing only
· Users are solely responsible for complying with all applicable laws
· The author (Fujinshi / @hirakox) assumes no liability for misuse

See LICENSE for details.

---

⭐ Star History

https://api.star-history.com/chart?repos=fujinshi/hiraclaw&type=date&legend=top-left

---

📄 License

MIT License

---

<div align="center">

Built with 🛡️ for ethical security education

Fujinshi — @hirakox on Telegram

</div>

