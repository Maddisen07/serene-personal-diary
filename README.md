Serene

A private, lavender-themed daily journaling app built with React. Write entries, log your mood, track streaks, and look back on your writing through a calendar and insights page. Everything is stored in your browser, so no server or account service is needed.

Features
Dashboard: time-based greeting, live clock, stats (entries, streak, words, mood), rotating quotes, weekly activity chart and writing prompts
Journal editor: title, body, tags, mood, word count, read time and autosave
Focus mode: a distraction-free full-screen writing view
Journal page: search by text or tag, filter by mood, entries grouped by Today / This Week / This Month / Older
Favorites: mark entries with a heart
Calendar: month view with dots on days that have entries, plus a preview of the selected day
Insights: 7-day activity chart, mood distribution, 90-day heatmap and written insights
Settings: profile name, dark mode, four accent colors (lavender, blush, sage, amber), and export of all entries to .txt
Responsive: floating nav on desktop, bottom tab bar on phones
Tech stack
React 18 (hooks and Context API, no external UI libraries)
Plain CSS injected from a single GLOBAL_STYLES string
Browser localStorage for persistence
Google Fonts: Fraunces, Lora and DM Sans (loaded via CSS @import)
Getting started

You need Node.js 18 or later.

bash
# 1. Create a Vite + React project
npm create vite@latest serene -- --template react
cd serene

# 2. Install dependencies
npm install

# 3. Replace src/App.jsx with the Serene source file
#    (the file must keep its `export default function App()`)

# 4. Remove the default stylesheet import from src/main.jsx
#    delete the line:  import './index.css'

# 5. Start the dev server
npm run dev

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

bash
npm run build
npm run preview
Applying the lavender theme

If you are using the redesign, open serene-lavender-styles.js, copy its const GLOBAL_STYLES = ... block, and paste it over the existing GLOBAL_STYLES block in App.jsx. No other code changes are needed.

Project structure

Everything lives in one file, organized in labeled sections:

Section	What it contains
Constants & data	Quotes, writing prompts, mood options
Utility functions	IDs, date formatting, word count, streak calculation
Contexts	AuthProvider, JournalProvider, ThemeProvider, ToastProvider
Custom hooks	useLocalStorage, useClock, useAutosave
Global styles	All CSS, including dark mode and responsive rules
Components	EntryCard, MoodTracker, QuoteCard, StreakWidget, BarChart, PromptCards, Editor and more
Pages	DashboardPage, JournalPage, CalendarPage, AnalyticsPage, SettingsPage
App	AppContent (page switching and editor) and the root App with providers
How data is stored

All data stays in your browser's localStorage:

Key	Contents
serene_entries	All journal entries
serene_users	Registered accounts
serene_user	The signed-in user (when "Remember me" is checked or after sign-up)
serene_dark / serene_accent	Theme choices
serene_prefs	Journal preference toggles

Clearing your browser data deletes your journal. Use Settings → Export .txt to back it up. Entries are not shared between browsers or devices.

Customizing
Quotes and prompts: edit the QUOTES and PROMPTS arrays at the top of the file.
Moods: edit the MOODS array (emoji, label, chart color).
Accent colors: edit the ACCENTS object inside ThemeProvider and the matching ACCENT_LIST in SettingsPage.
Colors and spacing: change the CSS variables in the :root block of GLOBAL_STYLES.
Known limitations
Sign-in is not secure. Passwords are saved as plain text in localStorage, and signing in with an unknown email silently creates an account. This is fine for a personal, local-only app but should not be used for anything sensitive or shared. For real accounts, add a backend with hashed passwords.
"Forgot password?" is a placeholder and does nothing.
Some settings are placeholders. The Auto-save, Daily Reminder, Typing Sounds and Focus Mode Blur toggles save your choice but do not change behavior yet. Autosave is always on in the editor.
Today's mood and its intensity slider reset when you reload the page.
Data is device-local. There is no sync or cloud backup.
Ideas for next steps
Hash passwords or move to a real auth backend
Wire up the preference toggles and add real reminders
Add image attachments and rich-text formatting
Add import from the exported .txt file
Add a PIN or biometric lock for privacy