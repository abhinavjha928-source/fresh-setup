/* ================================================================
   FRESH SETUP — main.js  (Phase 3 · Complete Rewrite)
   105 apps · 11 categories · Search · Filter · Accessibility
   ================================================================ */
'use strict';

// ================================================================
//  SOFTWARE DATABASE
//  Fields: id, category, name, icon, tag, desc, url
//  Flags:  popular (boolean), recommended (boolean)
// ================================================================
const SOFTWARE = [

  /* ── BROWSERS (7) ─────────────────────────────────────────── */
  {
    id: 'chrome', category: 'browser', name: 'Google Chrome',
    icon: '🌐', tag: 'Browser', popular: true,
    desc: 'The world\'s most-used browser. Fast V8 engine, rich extension library and tight Google services integration.',
    url: 'https://www.google.com/chrome/'
  },
  {
    id: 'firefox', category: 'browser', name: 'Mozilla Firefox',
    icon: '🦊', tag: 'Browser', popular: true, recommended: true,
    desc: 'Open-source, privacy-first browser from Mozilla. Excellent extension support and no corporate telemetry by default.',
    url: 'https://www.mozilla.org/en-US/firefox/'
  },
  {
    id: 'brave', category: 'browser', name: 'Brave',
    icon: '🦁', tag: 'Browser', recommended: true,
    desc: 'Privacy-focused Chromium browser with built-in ad blocking, tracker protection and optional BAT rewards.',
    url: 'https://brave.com/'
  },
  {
    id: 'edge', category: 'browser', name: 'Microsoft Edge',
    icon: '🔷', tag: 'Browser',
    desc: 'Chromium-based browser built into Windows with deep Microsoft 365 integration and excellent PDF tools.',
    url: 'https://www.microsoft.com/en-us/edge'
  },
  {
    id: 'opera-gx', category: 'browser', name: 'Opera GX',
    icon: '🎮', tag: 'Gaming Browser',
    desc: 'The only browser built for gamers — RAM/CPU limiters, Discord & Twitch sidebars and RGB themes.',
    url: 'https://www.opera.com/gx'
  },
  {
    id: 'vivaldi', category: 'browser', name: 'Vivaldi',
    icon: '🎻', tag: 'Browser',
    desc: 'Highly customisable browser with tab stacking, tiling, built-in email client and a powerful command palette.',
    url: 'https://vivaldi.com/'
  },
  {
    id: 'tor-browser', category: 'browser', name: 'Tor Browser',
    icon: '🧅', tag: 'Privacy Browser',
    desc: 'Route traffic through the Tor network for maximum anonymity. Essential for privacy-conscious browsing.',
    url: 'https://www.torproject.org/download/'
  },

  /* ── DEVELOPER (14) ────────────────────────────────────────── */
  {
    id: 'vscode', category: 'developer', name: 'VS Code',
    icon: '💻', tag: 'Editor', popular: true, recommended: true,
    desc: 'Microsoft\'s free, open-source code editor. Built-in Git, IntelliSense, debugging and 50 000+ extensions.',
    url: 'https://code.visualstudio.com/'
  },
  {
    id: 'git', category: 'developer', name: 'Git',
    icon: '🔀', tag: 'Version Control', popular: true,
    desc: 'The industry-standard distributed version control system. Track changes, branch and collaborate at scale.',
    url: 'https://git-scm.com/'
  },
  {
    id: 'nodejs', category: 'developer', name: 'Node.js',
    icon: '🟩', tag: 'Runtime', popular: true,
    desc: 'JavaScript runtime built on Chrome\'s V8 engine. Power server-side apps, APIs and modern frontend toolchains.',
    url: 'https://nodejs.org/'
  },
  {
    id: 'python', category: 'developer', name: 'Python',
    icon: '🐍', tag: 'Language', popular: true,
    desc: 'Versatile, beginner-friendly language for AI/ML, web backends, automation, data science and scripting.',
    url: 'https://www.python.org/'
  },
  {
    id: 'docker', category: 'developer', name: 'Docker',
    icon: '🐳', tag: 'Containers', recommended: true,
    desc: 'Package and run apps in lightweight containers — consistent environments from dev to production.',
    url: 'https://www.docker.com/'
  },
  {
    id: 'postman', category: 'developer', name: 'Postman',
    icon: '📬', tag: 'API Client', recommended: true,
    desc: 'Design, test and document REST, GraphQL and WebSocket APIs visually. The go-to API development platform.',
    url: 'https://www.postman.com/'
  },
  {
    id: 'windows-terminal', category: 'developer', name: 'Windows Terminal',
    icon: '🖥️', tag: 'Terminal',
    desc: 'Modern terminal with GPU-accelerated rendering, tabs, panes, full Unicode and custom themes.',
    url: 'https://aka.ms/terminal'
  },
  {
    id: 'wsl2', category: 'developer', name: 'WSL 2',
    icon: '🐧', tag: 'Linux Layer',
    desc: 'Run a genuine Linux kernel inside Windows. Access Bash, native dev tools and Docker without dual-booting.',
    url: 'https://learn.microsoft.com/en-us/windows/wsl/'
  },
  {
    id: 'github-desktop', category: 'developer', name: 'GitHub Desktop',
    icon: '🐙', tag: 'Git GUI',
    desc: 'Official GitHub client — visualise diffs, manage branches, create PRs and resolve conflicts with ease.',
    url: 'https://desktop.github.com/'
  },
  {
    id: 'jetbrains-toolbox', category: 'developer', name: 'JetBrains Toolbox',
    icon: '🧰', tag: 'IDE Manager',
    desc: 'Install and manage all JetBrains IDEs (IntelliJ, PyCharm, WebStorm…) from a single lightweight app.',
    url: 'https://www.jetbrains.com/toolbox-app/'
  },
  {
    id: 'notepadpp', category: 'developer', name: 'Notepad++',
    icon: '📝', tag: 'Text Editor',
    desc: 'Lightweight, fast text and source-code editor with syntax highlighting for over 80 languages.',
    url: 'https://notepad-plus-plus.org/'
  },
  {
    id: 'figma', category: 'developer', name: 'Figma',
    icon: '🎨', tag: 'Design Tool', popular: true,
    desc: 'Collaborative interface design tool used by teams worldwide. Prototyping, components and Dev Mode included.',
    url: 'https://www.figma.com/'
  },
  {
    id: 'insomnia', category: 'developer', name: 'Insomnia',
    icon: '😴', tag: 'API Client',
    desc: 'Open-source API client for REST, GraphQL, gRPC and SOAP — clean UI with powerful collection management.',
    url: 'https://insomnia.rest/'
  },
  {
    id: 'neovim', category: 'developer', name: 'Neovim',
    icon: '⬛', tag: 'Editor',
    desc: 'Hyperextensible Vim-based text editor. Lightning-fast, LSP-powered and fully scriptable with Lua.',
    url: 'https://neovim.io/'
  },

  /* ── GAMING (10) ───────────────────────────────────────────── */
  {
    id: 'steam', category: 'gaming', name: 'Steam',
    icon: '🎮', tag: 'Launcher', popular: true, recommended: true,
    desc: 'The world\'s largest PC gaming platform with 50 000+ titles, cloud saves and community features.',
    url: 'https://store.steampowered.com/'
  },
  {
    id: 'discord', category: 'gaming', name: 'Discord',
    icon: '💬', tag: 'Community', popular: true, recommended: true,
    desc: 'Voice, video and text for gaming communities. Servers, bots, Nitro perks and Go Live screen sharing.',
    url: 'https://discord.com/'
  },
  {
    id: 'epic-games', category: 'gaming', name: 'Epic Games Launcher',
    icon: '🔵', tag: 'Launcher',
    desc: 'Fortnite, free weekly games and Unreal-powered titles. One library for all your Epic purchases.',
    url: 'https://store.epicgames.com/'
  },
  {
    id: 'msi-afterburner', category: 'gaming', name: 'MSI Afterburner',
    icon: '🔥', tag: 'GPU Utility', recommended: true,
    desc: 'GPU overclocking, fan curve control and an in-game FPS/temp overlay. The must-have for any PC gamer.',
    url: 'https://www.msi.com/Landing/afterburner/graphics-cards'
  },
  {
    id: 'vortex', category: 'gaming', name: 'Vortex Mod Manager',
    icon: '🌀', tag: 'Mod Manager',
    desc: 'The official Nexus Mods client — install, update and manage mods for hundreds of games effortlessly.',
    url: 'https://www.nexusmods.com/about/vortex/'
  },
  {
    id: 'ds4windows', category: 'gaming', name: 'DS4Windows',
    icon: '🕹️', tag: 'Controller',
    desc: 'Use PlayStation DualShock 4 or DualSense controllers on PC with full rumble and touchpad support.',
    url: 'https://ds4-windows.com/'
  },
  {
    id: 'gog-galaxy', category: 'gaming', name: 'GOG Galaxy',
    icon: '🪐', tag: 'Launcher',
    desc: 'DRM-free games marketplace. Unify all your game libraries (Steam, Epic, Origin) in one hub.',
    url: 'https://www.gog.com/galaxy'
  },
  {
    id: 'playnite', category: 'gaming', name: 'Playnite',
    icon: '🎲', tag: 'Library Manager',
    desc: 'Open-source game library manager. Aggregate Steam, Epic, GOG and more into a single beautiful launcher.',
    url: 'https://playnite.link/'
  },
  {
    id: 'geforce-experience', category: 'gaming', name: 'GeForce Experience',
    icon: '🟢', tag: 'NVIDIA Utility',
    desc: 'Keep NVIDIA drivers up to date, optimise game settings and capture gameplay with ShadowPlay.',
    url: 'https://www.nvidia.com/en-us/geforce/geforce-experience/'
  },
  {
    id: 'parsec', category: 'gaming', name: 'Parsec',
    icon: '🔌', tag: 'Remote Play',
    desc: 'Low-latency remote desktop built for gaming. Stream your PC to any device or co-op with a friend remotely.',
    url: 'https://parsec.app/'
  },

  /* ── CREATOR (12) ──────────────────────────────────────────── */
  {
    id: 'obs', category: 'creator', name: 'OBS Studio',
    icon: '📹', tag: 'Streaming', popular: true, recommended: true,
    desc: 'Free and open-source recording and live-streaming software. The industry standard for content creators.',
    url: 'https://obsproject.com/'
  },
  {
    id: 'davinci-resolve', category: 'creator', name: 'DaVinci Resolve',
    icon: '🎬', tag: 'Video Editor', recommended: true,
    desc: 'Hollywood-grade video editing, colour grading, audio post and VFX — all free. Used on blockbuster films.',
    url: 'https://www.blackmagicdesign.com/products/davinciresolve'
  },
  {
    id: 'blender', category: 'creator', name: 'Blender',
    icon: '🍊', tag: '3D & VFX', recommended: true,
    desc: 'Free, open-source 3D creation suite covering modelling, rigging, animation, rendering, VFX and compositing.',
    url: 'https://www.blender.org/'
  },
  {
    id: 'gimp', category: 'creator', name: 'GIMP',
    icon: '🖼️', tag: 'Photo Editor',
    desc: 'GNU Image Manipulation Program — a powerful free alternative to Photoshop for photo editing and compositing.',
    url: 'https://www.gimp.org/'
  },
  {
    id: 'inkscape', category: 'creator', name: 'Inkscape',
    icon: '✒️', tag: 'Vector Design',
    desc: 'Professional-quality free vector editor. Design logos, icons, illustrations and scalable SVG artwork.',
    url: 'https://inkscape.org/'
  },
  {
    id: 'audacity', category: 'creator', name: 'Audacity',
    icon: '🎙️', tag: 'Audio Editor',
    desc: 'Multi-track audio editor and recorder. Record, edit, clean up and export audio in every major format.',
    url: 'https://www.audacityteam.org/'
  },
  {
    id: 'handbrake', category: 'creator', name: 'HandBrake',
    icon: '⚙️', tag: 'Video Converter',
    desc: 'Open-source video transcoder — convert and compress video to MP4, MKV, WebM and many more formats.',
    url: 'https://handbrake.fr/'
  },
  {
    id: 'krita', category: 'creator', name: 'Krita',
    icon: '🖌️', tag: 'Digital Painting',
    desc: 'Professional free digital painting app. Perfect for concept art, illustration, comics and texture painting.',
    url: 'https://krita.org/en/'
  },
  {
    id: 'sharex', category: 'creator', name: 'ShareX',
    icon: '📸', tag: 'Screenshot', recommended: true,
    desc: 'Powerful free screen capture and recording tool with annotation, OCR, colour picker and instant sharing.',
    url: 'https://getsharex.com/'
  },
  {
    id: 'kdenlive', category: 'creator', name: 'Kdenlive',
    icon: '🎞️', tag: 'Video Editor',
    desc: 'Free, open-source non-linear video editor with multi-track timeline, transitions and effects library.',
    url: 'https://kdenlive.org/en/'
  },
  {
    id: 'vlc', category: 'creator', name: 'VLC',
    icon: '🔶', tag: 'Media Player', popular: true,
    desc: 'Free, open-source media player that flawlessly plays virtually every video and audio format.',
    url: 'https://www.videolan.org/vlc/'
  },
  {
    id: 'ffmpeg', category: 'creator', name: 'FFmpeg',
    icon: '🎬', tag: 'Video CLI',
    desc: 'The most powerful command-line toolkit for encoding, transcoding, streaming and processing media.',
    url: 'https://ffmpeg.org/'
  },

  /* ── AI TOOLS (10) ─────────────────────────────────────────── */
  {
    id: 'chatgpt', category: 'ai-tools', name: 'ChatGPT',
    icon: '🤖', tag: 'AI Assistant', popular: true, recommended: true,
    desc: 'OpenAI\'s flagship conversational AI. Write, code, research, brainstorm and automate — all in natural language.',
    url: 'https://chat.openai.com/'
  },
  {
    id: 'claude', category: 'ai-tools', name: 'Claude',
    icon: '✨', tag: 'AI Assistant', recommended: true,
    desc: 'Anthropic\'s AI assistant. Excellent for long-context analysis, nuanced writing and thoughtful reasoning.',
    url: 'https://claude.ai/'
  },
  {
    id: 'gemini', category: 'ai-tools', name: 'Gemini',
    icon: '♊', tag: 'AI Assistant', popular: true,
    desc: 'Google\'s multimodal AI. Understands text, images and code with deep Search and Workspace integration.',
    url: 'https://gemini.google.com/'
  },
  {
    id: 'perplexity', category: 'ai-tools', name: 'Perplexity AI',
    icon: '🔍', tag: 'AI Search', recommended: true,
    desc: 'AI-powered search that gives cited, direct answers — not just a page of links. Research at warp speed.',
    url: 'https://www.perplexity.ai/'
  },
  {
    id: 'midjourney', category: 'ai-tools', name: 'Midjourney',
    icon: '🎨', tag: 'AI Image', popular: true,
    desc: 'Generate stunning, artistic and photorealistic images from text prompts. The leading AI image model.',
    url: 'https://www.midjourney.com/'
  },
  {
    id: 'github-copilot', category: 'ai-tools', name: 'GitHub Copilot',
    icon: '👾', tag: 'AI Coding', recommended: true,
    desc: 'AI pair programmer that suggests entire functions, fixes bugs and writes tests inside your editor.',
    url: 'https://github.com/features/copilot'
  },
  {
    id: 'ollama', category: 'ai-tools', name: 'Ollama',
    icon: '🦙', tag: 'Local LLM',
    desc: 'Run Llama, Mistral, Gemma and other LLMs locally on your own hardware — 100% private, zero cloud.',
    url: 'https://ollama.com/'
  },
  {
    id: 'elevenlabs', category: 'ai-tools', name: 'ElevenLabs',
    icon: '🔊', tag: 'AI Voice',
    desc: 'Realistic AI voice generation and cloning. Create voiceovers, podcasts and narrations in 30+ languages.',
    url: 'https://elevenlabs.io/'
  },
  {
    id: 'runway', category: 'ai-tools', name: 'Runway',
    icon: '🎥', tag: 'AI Video',
    desc: 'AI-powered video creation and editing. Generate, edit and transform video with text-to-video models.',
    url: 'https://runwayml.com/'
  },
  {
    id: 'stability-ai', category: 'ai-tools', name: 'Stable Diffusion',
    icon: '🌊', tag: 'AI Image',
    desc: 'Open-weight AI image model you can run locally. Unlimited, private image generation with full control.',
    url: 'https://stability.ai/'
  },

  /* ── PRODUCTIVITY (10) ─────────────────────────────────────── */
  {
    id: 'notion', category: 'productivity', name: 'Notion',
    icon: '📓', tag: 'Workspace', popular: true, recommended: true,
    desc: 'All-in-one workspace for notes, wikis, to-dos, databases and project management. Free for personal use.',
    url: 'https://www.notion.so/'
  },
  {
    id: 'obsidian', category: 'productivity', name: 'Obsidian',
    icon: '🪨', tag: 'Knowledge Base', recommended: true,
    desc: 'Local-first markdown editor with backlinks, graph view and plugin ecosystem for building a second brain.',
    url: 'https://obsidian.md/'
  },
  {
    id: 'slack', category: 'productivity', name: 'Slack',
    icon: '💼', tag: 'Team Chat', popular: true,
    desc: 'Organised team messaging with channels, threads, Huddles and 2 500+ app integrations for any workflow.',
    url: 'https://slack.com/'
  },
  {
    id: 'zoom', category: 'productivity', name: 'Zoom',
    icon: '📷', tag: 'Video Calls', popular: true,
    desc: 'Industry-leading video conferencing. Meetings, webinars, breakout rooms and AI meeting summaries.',
    url: 'https://zoom.us/'
  },
  {
    id: 'todoist', category: 'productivity', name: 'Todoist',
    icon: '✅', tag: 'Task Manager',
    desc: 'Clean task manager with natural language input, priority levels, recurring tasks and project views.',
    url: 'https://todoist.com/'
  },
  {
    id: 'bitwarden', category: 'productivity', name: 'Bitwarden',
    icon: '🔐', tag: 'Password Manager', recommended: true,
    desc: 'Free, open-source password manager. Sync across all devices securely. Self-host option available.',
    url: 'https://bitwarden.com/'
  },
  {
    id: 'thunderbird', category: 'productivity', name: 'Thunderbird',
    icon: '⛈️', tag: 'Email Client',
    desc: 'Free, open-source email client from Mozilla with calendar, contacts and powerful filtering rules.',
    url: 'https://www.thunderbird.net/'
  },
  {
    id: 'anydesk', category: 'productivity', name: 'AnyDesk',
    icon: '🖥️', tag: 'Remote Desktop',
    desc: 'Fast, secure remote desktop software. Access any computer worldwide with sub-millisecond latency.',
    url: 'https://anydesk.com/'
  },
  {
    id: 'rainmeter', category: 'productivity', name: 'Rainmeter',
    icon: '🌧️', tag: 'Desktop',
    desc: 'Customise your Windows desktop with skins showing system stats, clocks, calendars and media controls.',
    url: 'https://www.rainmeter.net/'
  },
  {
    id: 'logi-options', category: 'productivity', name: 'Logi Options+',
    icon: '🖱️', tag: 'Peripheral',
    desc: 'Configure Logitech mice and keyboards, remap buttons, set per-app flows and manage multi-device pairing.',
    url: 'https://www.logitech.com/en-us/software/logi-options-plus.html'
  },

  /* ── STUDENT (8) ───────────────────────────────────────────── */
  {
    id: 'anki', category: 'student', name: 'Anki',
    icon: '🃏', tag: 'Flashcards', recommended: true,
    desc: 'Spaced-repetition flashcard app with proven science behind it. Learn anything and actually remember it.',
    url: 'https://apps.ankiweb.net/'
  },
  {
    id: 'zotero', category: 'student', name: 'Zotero',
    icon: '📖', tag: 'Citations',
    desc: 'Free, open-source reference manager. Collect, organise, cite and share research with one click.',
    url: 'https://www.zotero.org/'
  },
  {
    id: 'libreoffice', category: 'student', name: 'LibreOffice',
    icon: '📄', tag: 'Office Suite', popular: true,
    desc: 'Free, full-featured alternative to Microsoft Office — Writer, Calc, Impress, Draw and more.',
    url: 'https://www.libreoffice.org/'
  },
  {
    id: 'calibre', category: 'student', name: 'Calibre',
    icon: '📚', tag: 'E-book Manager',
    desc: 'Manage your entire e-book library. Convert formats, edit metadata and sync to your Kindle or Kobo.',
    url: 'https://calibre-ebook.com/'
  },
  {
    id: 'geogebra', category: 'student', name: 'GeoGebra',
    icon: '📐', tag: 'Maths',
    desc: 'Interactive maths software for geometry, algebra, calculus and statistics. Free for students and teachers.',
    url: 'https://www.geogebra.org/'
  },
  {
    id: 'mendeley', category: 'student', name: 'Mendeley',
    icon: '🔬', tag: 'Research',
    desc: 'Reference manager and academic social network. Organise papers, collaborate and generate citations.',
    url: 'https://www.mendeley.com/'
  },
  {
    id: 'grammarly', category: 'student', name: 'Grammarly',
    icon: '✍️', tag: 'Writing Assistant', popular: true,
    desc: 'AI writing assistant that checks grammar, style, tone and clarity. Works across every app you write in.',
    url: 'https://www.grammarly.com/'
  },
  {
    id: 'khan-academy', category: 'student', name: 'Khan Academy',
    icon: '🏫', tag: 'Learning Platform',
    desc: 'Free world-class education in maths, science, computing, history and more. Learn at your own pace.',
    url: 'https://www.khanacademy.org/'
  },

  /* ── PRIVACY (8) ───────────────────────────────────────────── */
  {
    id: 'protonvpn', category: 'privacy', name: 'ProtonVPN',
    icon: '🛡️', tag: 'VPN', recommended: true,
    desc: 'Swiss-based no-logs VPN from the creators of ProtonMail. Free tier available, open-source clients.',
    url: 'https://protonvpn.com/'
  },
  {
    id: 'signal', category: 'privacy', name: 'Signal',
    icon: '🔒', tag: 'Messenger', recommended: true,
    desc: 'End-to-end encrypted messaging and calls. No ads, no data collection. The gold standard for private comms.',
    url: 'https://signal.org/'
  },
  {
    id: 'mullvad', category: 'privacy', name: 'Mullvad VPN',
    icon: '🦔', tag: 'VPN',
    desc: 'No-logs Swedish VPN that accepts anonymous payment. Flat €5/month, no accounts required.',
    url: 'https://mullvad.net/en'
  },
  {
    id: 'veracrypt', category: 'privacy', name: 'VeraCrypt',
    icon: '🔐', tag: 'Encryption',
    desc: 'Free, open-source on-the-fly disk encryption. Encrypt entire drives or create hidden encrypted volumes.',
    url: 'https://www.veracrypt.fr/en/Home.html'
  },
  {
    id: 'keepassxc', category: 'privacy', name: 'KeePassXC',
    icon: '🗝️', tag: 'Password Manager',
    desc: 'Offline, open-source password manager. Your vault stays on your device — no cloud, no subscription.',
    url: 'https://keepassxc.org/'
  },
  {
    id: 'ublock-origin', category: 'privacy', name: 'uBlock Origin',
    icon: '🚫', tag: 'Ad Blocker', popular: true,
    desc: 'The most effective browser ad and tracker blocker. Wide-spectrum, low memory use, open-source.',
    url: 'https://ublockorigin.com/'
  },
  {
    id: 'cryptomator', category: 'privacy', name: 'Cryptomator',
    icon: '☁️', tag: 'Cloud Encryption',
    desc: 'Encrypt your cloud files client-side before they reach Dropbox, Google Drive or OneDrive.',
    url: 'https://cryptomator.org/'
  },
  {
    id: 'malwarebytes', category: 'privacy', name: 'Malwarebytes',
    icon: '🦠', tag: 'Anti-Malware',
    desc: 'Detect and remove malware, ransomware, adware and PUPs that traditional antivirus misses.',
    url: 'https://www.malwarebytes.com/'
  },

  /* ── POWER USER (9) ─────────────────────────────────────────── */
  {
    id: 'powertoys', category: 'power-user', name: 'PowerToys',
    icon: '🔧', tag: 'Utilities', popular: true, recommended: true,
    desc: 'Microsoft\'s power-user toolkit — FancyZones, Run launcher, Bulk Rename, Color Picker, Peek and more.',
    url: 'https://learn.microsoft.com/en-us/windows/powertoys/'
  },
  {
    id: '7zip', category: 'power-user', name: '7-Zip',
    icon: '🗜️', tag: 'Archiver', popular: true,
    desc: 'Free, open-source file archiver with best-in-class compression ratios for 7z, ZIP, RAR and more.',
    url: 'https://www.7-zip.org/'
  },
  {
    id: 'everything', category: 'power-user', name: 'Everything',
    icon: '🔎', tag: 'File Search', recommended: true,
    desc: 'Instant file search across your entire Windows drive. Finds anything in milliseconds.',
    url: 'https://www.voidtools.com/'
  },
  {
    id: 'autohotkey', category: 'power-user', name: 'AutoHotkey',
    icon: '⌨️', tag: 'Automation',
    desc: 'Automate repetitive tasks, remap keys and build custom hotkeys and macros with simple scripting.',
    url: 'https://www.autohotkey.com/'
  },
  {
    id: 'wireshark', category: 'power-user', name: 'Wireshark',
    icon: '🦈', tag: 'Network Analyser',
    desc: 'World\'s leading network protocol analyser. Capture and inspect live traffic at the packet level.',
    url: 'https://www.wireshark.org/'
  },
  {
    id: 'ventoy', category: 'power-user', name: 'Ventoy',
    icon: '💾', tag: 'Bootable USB',
    desc: 'Create a bootable USB that holds multiple ISO files — drag and drop ISOs and boot from any of them.',
    url: 'https://www.ventoy.net/'
  },
  {
    id: 'rufus', category: 'power-user', name: 'Rufus',
    icon: '🔴', tag: 'USB Tool',
    desc: 'Tiny, fast utility to create bootable USB drives from ISOs — perfect for Windows and Linux installs.',
    url: 'https://rufus.ie/en/'
  },
  {
    id: 'crystaldiskinfo', category: 'power-user', name: 'CrystalDiskInfo',
    icon: '💿', tag: 'Drive Health',
    desc: 'Monitor hard drive and SSD health via S.M.A.R.T. data. Get early warnings before a drive fails.',
    url: 'https://crystalmark.info/en/software/crystaldiskinfo/'
  },
  {
    id: 'sysinternals', category: 'power-user', name: 'Sysinternals Suite',
    icon: '🛠️', tag: 'System Tools',
    desc: 'Microsoft\'s collection of advanced Windows utilities — Process Explorer, Autoruns, TCPView and 70+ more.',
    url: 'https://learn.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite'
  },

  /* ── MEDIA (9) ─────────────────────────────────────────────── */
  {
    id: 'spotify', category: 'media', name: 'Spotify',
    icon: '🎵', tag: 'Music', popular: true,
    desc: 'Stream 100 million songs and 5 million podcasts. Discover new music with personalised recommendations.',
    url: 'https://www.spotify.com/'
  },
  {
    id: 'musicbee', category: 'media', name: 'MusicBee',
    icon: '🐝', tag: 'Music Player', recommended: true,
    desc: 'Feature-rich local music player with library management, equaliser, last.fm scrobbling and gapless playback.',
    url: 'https://getmusicbee.com/'
  },
  {
    id: 'foobar2000', category: 'media', name: 'foobar2000',
    icon: '🎧', tag: 'Music Player',
    desc: 'Advanced, ultra-lightweight audio player for audiophiles. Supports FLAC, WASAPI, DSP and custom UI.',
    url: 'https://www.foobar2000.org/'
  },
  {
    id: 'plex', category: 'media', name: 'Plex',
    icon: '📺', tag: 'Media Server', recommended: true,
    desc: 'Turn your PC into a personal streaming server. Stream your movies, music and photos to any device.',
    url: 'https://www.plex.tv/'
  },
  {
    id: 'kodi', category: 'media', name: 'Kodi',
    icon: '🎬', tag: 'Media Centre',
    desc: 'Open-source home theatre software. Organise and play your entire media collection on any screen.',
    url: 'https://kodi.tv/'
  },
  {
    id: 'mpv', category: 'media', name: 'mpv',
    icon: '▶️', tag: 'Video Player',
    desc: 'Minimal, scriptable, GPU-accelerated video player. Supports nearly every format with zero bloat.',
    url: 'https://mpv.io/'
  },
  {
    id: 'jellyfin', category: 'media', name: 'Jellyfin',
    icon: '🪼', tag: 'Media Server',
    desc: 'Free, open-source media server. No subscriptions, no tracking — self-host your personal Netflix.',
    url: 'https://jellyfin.org/'
  },
  {
    id: 'potplayer', category: 'media', name: 'PotPlayer',
    icon: '🎞️', tag: 'Video Player',
    desc: 'Powerful, feature-packed video player with hardware decoding, 3D support and 360° video playback.',
    url: 'https://potplayer.daum.net/'
  },
  {
    id: 'stremio', category: 'media', name: 'Stremio',
    icon: '📡', tag: 'Media Hub',
    desc: 'Unified media hub to watch content from Netflix, YouTube and community add-ons in one clean interface.',
    url: 'https://www.stremio.com/'
  },

  /* ── SYSTEM (8) ────────────────────────────────────────────── */
  {
    id: 'cpu-z', category: 'system', name: 'CPU-Z',
    icon: '⚙️', tag: 'Hardware Info', popular: true,
    desc: 'Detailed real-time info on your CPU, motherboard, RAM and GPU. The first thing to install on a new PC.',
    url: 'https://www.cpuid.com/softwares/cpu-z.html'
  },
  {
    id: 'gpu-z', category: 'system', name: 'GPU-Z',
    icon: '🖥️', tag: 'GPU Info',
    desc: 'In-depth GPU specifications and real-time sensor readings for clock speeds, temps and memory bandwidth.',
    url: 'https://www.techpowerup.com/gpuz/'
  },
  {
    id: 'hwinfo', category: 'system', name: 'HWiNFO',
    icon: '📊', tag: 'System Monitor', recommended: true,
    desc: 'Comprehensive hardware monitoring — temperatures, voltages, fan speeds and power for every component.',
    url: 'https://www.hwinfo.com/'
  },
  {
    id: 'windirstat', category: 'system', name: 'WinDirStat',
    icon: '📁', tag: 'Disk Analyser',
    desc: 'Visual disk usage analyser. See exactly what files are eating your storage with an interactive treemap.',
    url: 'https://windirstat.net/'
  },
  {
    id: 'revo-uninstaller', category: 'system', name: 'Revo Uninstaller',
    icon: '🗑️', tag: 'Uninstaller',
    desc: 'Remove stubborn programs completely — cleans leftover registry entries and files after uninstalling.',
    url: 'https://www.revouninstaller.com/'
  },
  {
    id: 'ccleaner', category: 'system', name: 'CCleaner',
    icon: '🧹', tag: 'System Cleaner',
    desc: 'Clean junk files, clear browser caches and fix registry issues to keep your PC running smoothly.',
    url: 'https://www.ccleaner.com/'
  },
  {
    id: 'bulk-rename', category: 'system', name: 'Bulk Rename Utility',
    icon: '✏️', tag: 'File Utility',
    desc: 'Rename thousands of files instantly using regex, counters, date stamps and 50+ renaming methods.',
    url: 'https://www.bulkrenameutility.co.uk/'
  },
  {
    id: 'treesize', category: 'system', name: 'TreeSize Free',
    icon: '🌳', tag: 'Disk Analyser',
    desc: 'Scan your drives and visualise space usage in a collapsible tree. Find and delete large files fast.',
    url: 'https://www.jam-software.com/treesize_free'
  },

  /* ── EXTRA · DEVELOPER ─────────────────────────────────────── */
  {
    id: 'cursor', category: 'developer', name: 'Cursor',
    icon: '🔮', tag: 'AI Editor', recommended: true, popular: true,
    desc: 'The AI-first code editor built on VS Code. Chat with your codebase, generate entire files and auto-fix bugs.',
    url: 'https://cursor.com/'
  },
  {
    id: 'github-cli', category: 'developer', name: 'GitHub CLI',
    icon: '⌨️', tag: 'CLI Tool',
    desc: 'Use GitHub from the terminal — create PRs, manage issues, clone repos and run workflows without the browser.',
    url: 'https://cli.github.com/'
  },

  /* ── EXTRA · GAMING ────────────────────────────────────────── */
  {
    id: 'ubisoft-connect', category: 'gaming', name: 'Ubisoft Connect',
    icon: '🔵', tag: 'Launcher',
    desc: 'Ubisoft\'s official PC launcher for Assassin\'s Creed, Far Cry, Rainbow Six and all Ubisoft titles.',
    url: 'https://www.ubisoft.com/en-us/ubisoft-connect'
  },
  {
    id: 'xbox-app', category: 'gaming', name: 'Xbox App',
    icon: '🟢', tag: 'Launcher',
    desc: 'Play Xbox Game Pass titles on PC, browse your library and connect with friends on Xbox Live.',
    url: 'https://www.xbox.com/en-US/apps/xbox-app-for-pc'
  },

  /* ── EXTRA · BROWSER ───────────────────────────────────────── */
  {
    id: 'librewolf', category: 'browser', name: 'LibreWolf',
    icon: '🐺', tag: 'Privacy Browser',
    desc: 'A hardened Firefox fork with enhanced privacy settings, uBlock Origin pre-installed and telemetry removed.',
    url: 'https://librewolf.net/'
  },

  /* ── EXTRA · MEDIA ─────────────────────────────────────────── */
  {
    id: 'winamp', category: 'media', name: 'Winamp',
    icon: '📻', tag: 'Music Player',
    desc: 'The legendary media player is back — redesigned for modern music streaming and local library playback.',
    url: 'https://www.winamp.com/'
  },
  {
    id: 'losslesscut', category: 'media', name: 'LosslessCut',
    icon: '✂️', tag: 'Video Trimmer', recommended: true,
    desc: 'Losslessly cut, merge and trim video and audio files without re-encoding. Fast, free and open-source.',
    url: 'https://mifi.no/losslesscut/'
  },

  /* ── EXTRA · PRODUCTIVITY ──────────────────────────────────── */
  {
    id: 'logseq', category: 'productivity', name: 'Logseq',
    icon: '📔', tag: 'Knowledge Base',
    desc: 'Open-source, privacy-first knowledge management with outliner-based notes, journals and graph view.',
    url: 'https://logseq.com/'
  },
  {
    id: 'linear', category: 'productivity', name: 'Linear',
    icon: '📐', tag: 'Project Management', recommended: true,
    desc: 'The issue tracker built for high-performance teams. Fast, keyboard-driven and beautifully minimal.',
    url: 'https://linear.app/'
  },

  /* ── EXTRA · PRIVACY ───────────────────────────────────────── */
  {
    id: 'tailscale', category: 'privacy', name: 'Tailscale',
    icon: '🔗', tag: 'Mesh VPN',
    desc: 'Zero-config mesh VPN built on WireGuard. Connect all your devices securely in a private network.',
    url: 'https://tailscale.com/'
  },
  {
    id: 'warp', category: 'privacy', name: 'Cloudflare WARP',
    icon: '☁️', tag: 'DNS + VPN',
    desc: 'Free VPN and DNS resolver from Cloudflare. Faster, private browsing via the 1.1.1.1 network.',
    url: 'https://one.one.one.one/'
  },

  /* ── EXTRA · SYSTEM ────────────────────────────────────────── */
  {
    id: 'system-informer', category: 'system', name: 'System Informer',
    icon: '🔬', tag: 'Process Manager',
    desc: 'Advanced open-source task manager with real-time monitoring, VirusTotal scanning and kernel-level detail.',
    url: 'https://systeminformer.sourceforge.io/'
  }

];

// ================================================================
//  CONSTANTS — category config (order = render order)
// ================================================================
const CATEGORIES = [
  { id: 'browser',      label: 'Browsers',       icon: '🌐' },
  { id: 'developer',    label: 'Developer',       icon: '🛠️' },
  { id: 'gaming',       label: 'Gaming',          icon: '🎮' },
  { id: 'creator',      label: 'Creator',         icon: '🎨' },
  { id: 'ai-tools',     label: 'AI Tools',        icon: '🤖' },
  { id: 'productivity', label: 'Productivity',    icon: '📋' },
  { id: 'student',      label: 'Student',         icon: '📚' },
  { id: 'privacy',      label: 'Privacy',         icon: '🔒' },
  { id: 'power-user',   label: 'Power User',      icon: '⚡' },
  { id: 'media',        label: 'Media',           icon: '🎵' },
  { id: 'system',       label: 'System',          icon: '🖥️' }
];

// ================================================================
//  HELPERS
// ================================================================
function extIcon() {
  return `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>`;
}

function buildCard(app, { showBadges = true } = {}) {
  const el = document.createElement('article');
  el.className = 'card' +
    (app.popular     ? ' card--popular'     : '') +
    (app.recommended ? ' card--recommended' : '');
  el.dataset.id       = app.id;
  el.dataset.category = app.category;
  el.setAttribute('aria-label', app.name);

  const badges = [];
  if (showBadges && app.popular)     badges.push('<span class="badge-popular">🔥 Popular</span>');
  if (showBadges && app.recommended) badges.push('<span class="badge-recommended">⭐ Pick</span>');

  el.innerHTML = `
    <div class="card-top">
      <div class="card-icon-wrap" aria-hidden="true">${app.icon}</div>
      <div class="card-badges">
        <span class="card-tag">${app.tag}</span>
        ${badges.join('')}
      </div>
    </div>
    <h3 class="card-name">${app.name}</h3>
    <p class="card-desc">${app.desc}</p>
    <a
      href="${app.url}"
      target="_blank"
      rel="noopener noreferrer"
      class="card-btn"
      id="btn-${app.id}"
      aria-label="Visit official website for ${app.name} (opens in new tab)"
    >
      Official Website ${extIcon()}
    </a>`;

  return el;
}

// ================================================================
//  RENDER — category grids
// ================================================================
function renderCategoryGrids() {
  CATEGORIES.forEach(cat => {
    const grid = document.getElementById(`grid-${cat.id}`);
    if (!grid) return;
    const apps = SOFTWARE.filter(a => a.category === cat.id);
    const frag = document.createDocumentFragment();
    apps.forEach(app => frag.appendChild(buildCard(app)));
    grid.appendChild(frag);
  });
}

// ================================================================
//  RENDER — popular section
// ================================================================
function renderPopular() {
  const grid = document.getElementById('grid-popular');
  if (!grid) return;
  const apps = SOFTWARE.filter(a => a.popular);
  const frag = document.createDocumentFragment();
  apps.forEach(app => frag.appendChild(buildCard(app)));
  grid.appendChild(frag);
}

// ================================================================
//  RENDER — recommended section
// ================================================================
function renderRecommended() {
  const grid = document.getElementById('grid-recommended');
  if (!grid) return;
  const apps = SOFTWARE.filter(a => a.recommended);
  const frag = document.createDocumentFragment();
  apps.forEach(app => frag.appendChild(buildCard(app)));
  grid.appendChild(frag);
}

// ================================================================
//  SEARCH & FILTER
// ================================================================
let currentFilter = 'all';
let currentQuery  = '';

function applyFilterAndSearch() {
  const q = currentQuery.toLowerCase().trim();

  // Handle popular / recommended special sections visibility
  const popularSection    = document.getElementById('popular');
  const recommendedSection= document.getElementById('recommended');

  const shouldShowSpecial = currentFilter === 'all';

  if (popularSection) {
    popularSection.classList.toggle('hidden', !shouldShowSpecial);
    if (shouldShowSpecial) {
      requestAnimationFrame(() => popularSection.classList.add('visible'));
    }
  }
  if (recommendedSection) {
    recommendedSection.classList.toggle('hidden', !shouldShowSpecial);
    if (shouldShowSpecial) {
      requestAnimationFrame(() => recommendedSection.classList.add('visible'));
    }
  }

  // Category sections
  const sections = document.querySelectorAll('.category-section');
  let totalVisible = 0;

  sections.forEach(section => {
    const cat = section.dataset.category;
    const catMatch = currentFilter === 'all' || currentFilter === cat;
    const cards = section.querySelectorAll('.card');
    let sectionVisible = 0;

    cards.forEach(card => {
      const name = card.querySelector('.card-name')?.textContent.toLowerCase() ?? '';
      const desc = card.querySelector('.card-desc')?.textContent.toLowerCase() ?? '';
      const tag  = card.querySelector('.card-tag')?.textContent.toLowerCase()  ?? '';
      const textMatch = !q || name.includes(q) || desc.includes(q) || tag.includes(q);

      const show = catMatch && textMatch;
      card.classList.toggle('hidden', !show);
      if (show) { sectionVisible++; totalVisible++; }
    });

    section.classList.toggle('hidden', sectionVisible === 0);
    if (sectionVisible > 0) {
      requestAnimationFrame(() => section.classList.add('visible'));
    }
  });

  // No-results
  const noResults = document.getElementById('noResults');
  const noQuery   = document.getElementById('noResultsQuery');
  if (noResults) {
    noResults.classList.toggle('hidden', totalVisible > 0 || shouldShowSpecial);
    if (noQuery) noQuery.textContent = currentQuery;
  }

  // Update live stat count
  const statEl = document.getElementById('statCount');
  if (statEl) {
    const base = q
      ? SOFTWARE.filter(a => {
          const n = a.name.toLowerCase();
          const d = a.desc.toLowerCase();
          const t = a.tag.toLowerCase();
          const catOk = currentFilter === 'all' || currentFilter === a.category;
          return catOk && (n.includes(q) || d.includes(q) || t.includes(q));
        }).length
      : SOFTWARE.length;
    statEl.textContent = base;
  }
}

// ================================================================
//  SEARCH SETUP
// ================================================================
function setupSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;
  let timer;

  input.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      currentQuery = input.value;
      applyFilterAndSearch();
    }, 160);
  });

  // Clear on Escape
  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      input.value = '';
      currentQuery = '';
      applyFilterAndSearch();
      input.blur();
    }
  });

  // Ctrl+K / Cmd+K
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      input.focus();
      input.select();
    }
  });
}

// ================================================================
//  FILTER PILLS
// ================================================================
function setupPills() {
  const container = document.getElementById('filterPills');
  if (!container) return;

  container.addEventListener('click', e => {
    const pill = e.target.closest('.pill');
    if (!pill) return;

    container.querySelectorAll('.pill').forEach(p => p.classList.remove('pill-active'));
    pill.classList.add('pill-active');
    currentFilter = pill.dataset.filter;
    applyFilterAndSearch();

    // Scroll to first visible section on category select
    if (currentFilter !== 'all') {
      const target = document.getElementById(currentFilter);
      if (target) {
        setTimeout(() => {
          const top = target.getBoundingClientRect().top + window.scrollY - 90;
          window.scrollTo({ top, behavior: 'smooth' });
        }, 60);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

// ================================================================
//  NAVBAR
// ================================================================
function setupNavbar() {
  const navbar    = document.getElementById('navbar');
  const menuBtn   = document.getElementById('menuBtn');
  const mobileMenu= document.getElementById('mobileMenu');

  // Scroll class
  const onScroll = () => navbar?.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile toggle
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      menuBtn.classList.toggle('open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
      // Trap scroll behind menu
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // Close on link click
    mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuBtn.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if (
        mobileMenu.classList.contains('open') &&
        !mobileMenu.contains(e.target) &&
        !menuBtn.contains(e.target)
      ) {
        mobileMenu.classList.remove('open');
        menuBtn.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // Active nav link on section enter
  const sections  = document.querySelectorAll('[id]');
  const navLinks  = document.querySelectorAll('.nav-link');

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach(link => {
        const matches = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('active', matches);
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  sections.forEach(s => io.observe(s));
}

// ================================================================
//  MOUSE GLOW (uses rAF loop — smooth, no JS thrashing)
// ================================================================
function setupMouseGlow() {
  const glow = document.getElementById('mouseGlow');

  // Skip on touch devices
  if (!glow || window.matchMedia('(pointer: coarse)').matches) {
    if (glow) glow.remove();
    return;
  }

  let mx = window.innerWidth  / 2;
  let my = window.innerHeight / 2;
  let gx = mx, gy = my;
  let rafId;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
  }, { passive: true });

  // Pause when tab is hidden to save resources
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(rafId);
    } else {
      tick();
    }
  });

  function tick() {
    // Lerp — snappy but smooth
    gx += (mx - gx) * 0.1;
    gy += (my - gy) * 0.1;
    glow.style.transform = `translate(${gx - 250}px, ${gy - 250}px)`;
    rafId = requestAnimationFrame(tick);
  }
  tick();
}

// ================================================================
//  FADE-IN ON SCROLL
// ================================================================
function setupFadeIn() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => io.observe(el));
}

// ================================================================
//  SUBTLE CARD TILT (desktop only · passive listeners)
// ================================================================
function setupCardTilt() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  let lastCard = null;

  document.addEventListener('mousemove', e => {
    const card = e.target.closest?.('.card');

    // Reset previous card
    if (lastCard && lastCard !== card) {
      lastCard.style.transform = '';
      lastCard = null;
    }

    if (!card) return;
    const r  = card.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width  / 2) / (r.width  / 2);
    const dy = (e.clientY - r.top  - r.height / 2) / (r.height / 2);
    card.style.transform = `translateY(-3px) rotateX(${-dy * 2.5}deg) rotateY(${dx * 2.5}deg)`;
    card.style.willChange = 'transform';
    lastCard = card;
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    if (lastCard) {
      lastCard.style.transform = '';
      lastCard.style.willChange = '';
      lastCard = null;
    }
  }, { passive: true });
}

// ================================================================
//  KEYBOARD NAV — arrow keys through filter pills
// ================================================================
function setupPillKeyboard() {
  const container = document.getElementById('filterPills');
  if (!container) return;

  container.addEventListener('keydown', e => {
    const pills = [...container.querySelectorAll('.pill')];
    const idx   = pills.indexOf(document.activeElement);
    if (idx === -1) return;

    let next = -1;
    if (e.key === 'ArrowRight') next = (idx + 1) % pills.length;
    if (e.key === 'ArrowLeft')  next = (idx - 1 + pills.length) % pills.length;
    if (next !== -1) { e.preventDefault(); pills[next].focus(); }
  });
}

// ================================================================
//  INIT
// ================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderPopular();
  renderRecommended();
  renderCategoryGrids();

  setupSearch();
  setupPills();
  setupPillKeyboard();
  setupNavbar();
  setupMouseGlow();
  setupFadeIn();
  setupCardTilt();

  // Update stat count to real number
  const statEl = document.getElementById('statCount');
  if (statEl) statEl.textContent = SOFTWARE.length;
});
