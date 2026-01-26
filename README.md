# Synapse Hub 🧠

**Synapse Hub** is a lightweight desktop application built with Tauri, React, and TypeScript. It acts as a centralized dashboard (WebView wrapper) for the world’s leading Artificial Intelligence platforms, allowing you to switch between tools like ChatGPT, Claude, Gemini, and MidJourney instantly without cluttering your web browser.
[home](/images-readme/home.png)

## ✨ Features

* **All-in-One Dashboard:** Access ChatGPT, Claude, Gemini, MidJourney, and more from a single interface.
* **High Performance:** Leveraging the power of **Tauri**, the app has a tiny footprint and consumes significantly less RAM than traditional browsers.
* **One-Click Navigation:** Dedicated "Home" functionality to instantly switch between different AI models.
* **Integrated Search:** Quickly find and launch specific AI tools through the built-in search bar.
* **Native Feel:** A dark-themed, modern UI built with **Tailwind CSS** for a premium desktop experience.

## 🛠️ Tech Stack

* **Frontend:** [React.js](https://react.dev/)
* **Desktop Framework:** [Tauri](https://tauri.app/) (Rust-based)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)

---

## 🚀 Getting Started

### Prerequisites

To build this project, you need to have the following installed:
1.  **Node.js** (LTS)
2.  **Rust Toolchain:** [Install Rust](https://www.rust-lang.org/tools/install)
3.  **System Dependencies:** Follow the [Tauri Setup Guide](https://tauri.app/v1/guides/getting-started/prerequisites) for your specific OS (Windows, macOS, or Linux).

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone [https://github.com/your-username/synapse-hub.git](https://github.com/your-username/synapse-hub.git)
   cd synapse-hub
   ```
2. **Install Node dependencies**
   ```bash
   npm install
   ```
3. **Run in Development mode**
   ```bash
   npm run tauri dev
   ```
4. **Build the Application To generate a production executable (.exe, .app, or .deb):**
   ```bash
   npm run tauri build
   ```

## 📂 Project Structure

```text
.
├── src/                # React frontend source code
│   ├── components/     # UI components (AI Cards, SearchBar, etc.)
│   ├── config/         # Custom logic and state management
│   ├── App.tsx         # Main application and WebView logic
│   └── main.tsx        # React entry point
├── src-tauri/          # Rust backend and Tauri configuration
│   ├── src/            # Rust logic (Window management, Native APIs)
│   ├── icons/          # Desktop application icons
│   └── tauri.conf.json # Build settings and window permissions
├── public/             # Static assets (logos, splash screens)
├── tailwind.config.js  # Tailwind CSS styling configuration
└── package.json        # Project dependencies and scripts
```
## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create.

1. **Fork** the Project
2. **Create** your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your Changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the Branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---
**Developed with ❤️ by Gabriel Santos**
