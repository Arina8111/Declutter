# 🧹 DeClutter

DeClutter is a Chrome Extension that helps you summarize your browsing session using local AI. Instead of manually reading through multiple tabs, DeClutter collects your open tabs, extracts their content, and generates concise summaries powered by **Ollama**.

> Stay focused. Read less. Understand more.

---

## ✨ Features

- 📑 Summarize all open browser tabs
- 🤖 Runs locally using Ollama (no cloud AI required)
- 🔒 Privacy-friendly — your data stays on your machine
- ⚡ Fast summaries with local LLMs
- 🎨 Clean and responsive UI built with Bootstrap
- 🧩 Chrome Extension using Manifest V3

---

## 🛠️ Tech Stack

- **Chrome Extension (Manifest V3)**
- **JavaScript**
- **HTML**
- **Bootstrap**
- **Ollama**
- **Chrome Tabs API**
- **Fetch API**

---

## 🚀 How It Works

1. User clicks the extension.
2. DeClutter collects the URLs of open tabs.
3. Webpage content is extracted.
4. The content is sent to Ollama running locally.
5. Ollama generates concise summaries.
6. Summaries are displayed in a clean interface.

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/declutter.git
cd declutter
```

### 2. Install Ollama

Download and install Ollama from:

https://ollama.com

### 3. Pull a model

Example:

```bash
ollama pull llama3.2
```

or

```bash
ollama pull mistral
```

### 4. Start Ollama

```bash
set ollma_origins=*
ollama serve
```

### 5. Load the Extension

- Open Chrome
- Navigate to `chrome://extensions`
- Enable **Developer Mode**
- Click **Load unpacked**
- Select the project folder

The extension is now ready to use.

