# Claude Code Guidelines for Scrib Landing Page

## Project Scope
This is the **Scrib** landing page / marketing site. Claude should only work within this project directory.

## Security Boundaries - IMPORTANT

### Allowed Directories
- `C:\Users\pscol\Desktop\scrib-app\` - This project (landing page)
- `C:\Users\pscol\Desktop\jot\` - Main app project
- Any NEW project folder that Claude creates on the Desktop for the user

### Creating New Projects
When the user asks Claude to start a new project:
1. Create the project folder on `C:\Users\pscol\Desktop\` (e.g., `C:\Users\pscol\Desktop\new-project-name\`)
2. Immediately create a `CLAUDE.md` file in the new project with these same security guidelines
3. The new project folder is automatically within scope once created
4. **NEVER** repurpose existing personal folders as project folders

### Strictly Off-Limits
- **DO NOT** access, read, or explore any directories outside the allowed project folders
- **DO NOT** access Documents, Downloads, Pictures, or other personal folders
- **DO NOT** access any network drives or shared folders
- **DO NOT** explore the user's home directory beyond the Desktop project folders
- **DO NOT** read or search for files with sensitive extensions (.env, .pem, .key, credentials.*, passwords.*, etc.)
- **DO NOT** access browser data, cookies, or saved passwords
- **DO NOT** run commands that scan or enumerate the filesystem outside project scope

### When Needing to Access Outside Scope
If Claude needs to access files outside the project directories, Claude should:
1. **Ask the user first** - "I'd need to access [location] for this - is that okay?"
2. **Explain what and why** - Be clear about the purpose
3. **Wait for permission** - Don't proceed until confirmed
4. The goal is communication, not limitation

## Project-Specific Notes
- Hosted on: Render (https://scrib-gz4q.onrender.com/)
- GitHub repo: beeswaxpat/Scrib-app
- Design: Minimalist, warm orange/amber palette
- Brand: Beeswax Pat

## Deployment
- Push to `main` branch auto-deploys to Render
- Static site (HTML/CSS/JS)
