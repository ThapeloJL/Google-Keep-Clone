# Google-Keep-Clone
A responsive note-taking app inspired by Google Keep, build using React. Notes are saved in the browser localStorage.

**Live demo :** https://notegoogleclone.netlify.app


## Project
- Navigation bar with logo and search
- Collapsible sidebar that expands on hover [Notes , Reminders , Edit Labels , Archive , Trash]
- "Take a note" input that expands into a title and text form
- Add notes , edit notes in a modal and delete notes.
- Responsive layout for laptop and phone screens

### Custom feature built without AI : Note Search 
A search bar in the navbar filters the notes by title or text as you type.
 - Case-insensitve for all search input
 - Searching only changes what is displayed. The saved notes are never modified.

### 2 AI-assisted features (built with Cursor)

**[ 1. Feature : Theme Mode Selector]**
 - Theme Mode Selector : Changes the displayed theme on the content being shown.

**[2. Feature : Reminders Feature]**
 - Reminders Feature : Add a feature functionality to add a an alert reminder as note.

**Where Cursor helped and failed**
 - Helped : Added a fully functioning theme to select between light mode and dark mode
 - Failed : Added a reminders feature but it could not save or add any reminders 

## Tech Stack
- React [v19.3.1]
- CSS
- Google Material Symbols for icons
- LocalStorage for persistence
- uid library for unique ids

## Project Structure
```
src/
├── components/
│   ├── Navbar/        # [logo, search bar]
│   ├── SearchBar/     # search input 
│   ├── Features/      # [Theme Mode,Reminder ]
│   ├── Notes/         # [create-note input]
│   ├── Modal/         # [Modal Layourt]
│   └── Form/          # [Form Layout]
├── App.js       # [owns the notes]
└── index.jsx
```

## Author 
 --Thapelo Legote , Full-Stack AI Engineer , Zaio Institute of Technology