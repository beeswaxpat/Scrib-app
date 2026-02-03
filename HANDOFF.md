# Scrib Landing Page - Project Handoff Document

## Project Overview
- **Project**: Scrib landing page / marketing funnel site
- **Location**: `C:\Users\pscol\Desktop\scrib-app\`
- **Live URL**: https://scrib-gz4q.onrender.com/
- **Hosting**: Render (static site, auto-deploys on push to main)
- **Repo**: GitHub - beeswaxpat/Scrib-app

## Tech Stack
- Pure HTML/CSS/JavaScript (no frameworks)
- Single page design (`index.html`, `styles.css`, `script.js`)
- Responsive design with mobile-first approach

## Current State (as of Feb 2026)
- **Version**: Production-ready
- **Analytics**: REMOVED - User decided to keep the site completely analytics-free (no Google Analytics, no tracking)
- **Auto-deploy**: Working via Render's native GitHub integration (not webhook)

## Key Files
```
scrib-app/
├── index.html      # Main landing page
├── styles.css      # All styling
├── script.js       # Interactivity (smooth scroll, mobile menu, etc.)
├── CLAUDE.md       # Security guidelines for Claude (DO NOT deploy - was accidentally deployed once and removed)
├── HANDOFF.md      # This file
└── assets/         # Images, icons, screenshots
```

## Design & Branding
- **App Name**: Scrib (display name), package: com.beeswaxpat.jot
- **Tagline**: "A minimalist notes app. No tracking. No cloud. Just notes."
- **Brand Owner**: Beeswax Pat
- **Copyright**: © 2026 Beeswax Pat (in footer)
- **Key Selling Points**:
  1. Privacy-first (no accounts, no cloud, no tracking)
  2. Minimalist design
  3. Offline-only (data stays on device)
  4. Free

## Related Project
- **Main App**: Flutter/Dart Android app at `C:\Users\pscol\Desktop\jot\`
- **Play Store Status**: Closed testing phase, awaiting approval for v1.6.0
- **App Features**: Notes with color coding, voice input, auto-save, export to TXT, theme customization

## Security Boundaries (from CLAUDE.md)
- Only work within `C:\Users\pscol\Desktop\scrib-app\` for this project
- Also allowed: `C:\Users\pscol\Desktop\jot\` (main app)
- DO NOT access personal folders, Documents, Downloads, etc.
- Ask before accessing anything outside project scope

## Deployment Process
1. Make changes locally
2. Commit and push to main branch
3. Render auto-deploys within ~1-2 minutes
4. Verify at https://scrib-gz4q.onrender.com/

## Recent History
- Removed Google Analytics (user wants zero tracking)
- Cleaned up CLAUDE.md that was accidentally committed
- Fixed Render auto-deploy (was requiring manual deploys)
- Site is stable and production-ready

## Notes for Future Work
- Keep the privacy-first messaging strong
- No analytics or tracking should be added
- The site is intentionally simple - no heavy frameworks needed
- Mobile responsiveness is important (check on multiple screen sizes)
