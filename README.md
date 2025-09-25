# USIU First-Year Companion (v1)

A lightweight, static microsite designed to welcome new USIU students during Orientation Week. This MVP provides personalized greetings, campus cost estimation, and basic theming functionality using vanilla JavaScript.

## 🎯 Project Overview

**Target Audience:** New USIU students during Orientation Week  
**Technology Stack:** HTML5, CSS3, Vanilla JavaScript, Docker + Nginx  
**Constraints:** No external libraries, static hosting only  

## ✨ Features

### 1. Personalized Welcome Experience
- Prompts for student's first name on page load
- Displays "Karibu" (welcome) message with personal greeting
- Logs all interactions to browser console for debugging

### 2. Campus Cost & Commute Estimator
- **Transport Calculator:** Weekly transport costs based on campus days and trip costs
- **Snack Budget Planner:** Estimates weekly snack expenses
- **Savings Recommendations:** Shows 10% savings potential with practical tips
- **Local Context:** Designed for Thika Road commuters and campus food pricing

### 3. Day/Night Theme Toggle
- Simple background and text color switching
- Manual theme toggle with user feedback
- Optional auto-theme based on time of day (commented out by default)

## 🚀 Quick Start

### Running Locally (No Docker)
1. Clone or download this repository
2. Navigate to the `public/` folder
3. Open `index.html` in your web browser
4. The application will prompt for your name and be ready to use

### Running with Docker

#### Prerequisites
- Docker installed on your system
- Terminal/Command Prompt access

#### Build and Run
```bash
# Navigate to project root directory
cd usiu-first-year-companion

# Build the Docker image
docker build -t usiu-first-year:v1 .

# Run the container
docker run -p 8080:80 usiu-first-year:v1

# Open in browser
# Navigate to http://localhost:8080
```

#### Alternative Docker Commands
```bash
# Run in detached mode (background)
docker run -d -p 8080:80 --name usiu-companion usiu-first-year:v1

# Stop the container
docker stop usiu-companion

# Remove the container
docker rm usiu-companion
```

## 📁 Project Structure

```
usiu-first-year-companion/
├── design/                     # Design documentation
│   ├── notes.md               # Design decisions and rationale
│   ├── wireframe-home.txt     # Home screen wireframe
│   ├── wireframe-estimator.txt# Estimator flow wireframe
│   └── wireframe-summary.txt  # Summary display wireframe
├── public/                    # Web application files
│   ├── index.html            # Main HTML structure
│   ├── styles.css            # CSS styling and responsive design
│   └── script.js             # JavaScript functionality
├── Dockerfile                # Docker container configuration
├── .dockerignore             # Docker build exclusions
├── NEEDS-BRIEF.md            # Project requirements document
└── README.md                 # This file
```

## 🧪 Testing Checklist

### Browser Testing
- [ ] Page loads without console errors
- [ ] Name prompt appears on page load
- [ ] Personalized greeting displays correctly
- [ ] "Run Estimator" button triggers calculation flow
- [ ] All 4 prompts appear in sequence (days, transport, snacks, snack price)
- [ ] Summary updates with correct calculations
- [ ] "Toggle Theme" switches background and text colors
- [ ] All interactions logged to browser console

### Docker Testing
- [ ] Docker image builds successfully
- [ ] Container runs without errors
- [ ] Application accessible at `http://localhost:8080`
- [ ] All functionality works in containerized environment

### Calculation Validation
Test with sample data:
- Days per week: 3
- Transport cost per trip: KSh 120
- Snacks per day: 2  
- Snack price: KSh 80

Expected Results:
- Weekly Transport: KSh 720 (3 days × 120 × 2 trips)
- Weekly Snacks: KSh 480 (3 days × 2 snacks × 80)
- Weekly Total: KSh 1200
- With 10% savings: KSh 1080

## 🎨 Design Philosophy

### Mobile-First Approach
- Optimized for smartphone usage during orientation
- Touch-friendly button sizing (minimum 44px)
- Single-column layout prevents horizontal scrolling
- Responsive design adapts to different screen sizes

### Accessibility Features
- Semantic HTML structure for screen readers
- High contrast color ratios for visibility
- Keyboard navigation support
- Focus indicators for interactive elements
- Print-friendly styles

### USIU Brand Integration
- USIU blue accent color (#3a86ff)
- "Karibu" welcome messaging
- Local context (Thika Road, KSh currency)
- University attribution in footer

## 🔧 Technical Implementation

### JavaScript Features Used
- Variables and data types (`const`, `let`, `Number()`)
- Arithmetic operators (`+`, `-`, `*`, `/`, `%`)
- Browser APIs (`prompt()`, `alert()`, `console.log()`)
- DOM manipulation (`getElementById()`, `textContent`, `innerText`)
- Event handling (`addEventListener()`)
- Style manipulation (`document.body.style`)
- Date/time operations (`new Date()`)

### CSS Features
- CSS Custom Properties (variables) for consistent theming
- Flexbox for layout structure
- Media queries for responsive design
- Transition animations for smooth interactions
- Accessibility-focused styling (focus indicators, reduced motion)

## 🚧 Known Limitations

### Current Constraints
1. **Input Method:** Uses browser `prompt()` dialogs instead of forms
2. **Data Persistence:** No storage of user preferences or calculations
3. **Offline Support:** Requires internet connection for initial load
4. **Browser Compatibility:** Modern browsers only (ES6+ features)
5. **Single Session:** No user account or multi-session support

### Planned Improvements (v2)
1. Replace prompts with inline form inputs
2. Add local storage for user preferences
3. Implement progressive web app (PWA) features
4. Add more sophisticated cost categories
5. Integration with USIU student information systems
6. Multi-language support (English/Swahili)
7. Enhanced accessibility features

## 🔍 Debugging

### Console Logging
All user interactions are logged to the browser console:
- Student name input
- Calculation steps and results
- Theme toggle actions
- Function execution status

### Common Issues
1. **Prompts not appearing:** Check if browser blocks popups
2. **Calculations incorrect:** Verify numeric inputs (non-numeric inputs are rejected)
3. **Theme not switching:** Check browser console for JavaScript errors
4. **Docker not accessible:** Ensure port 8080 is not in use by other applications

## 📝 Academic Context

**Course:** Introductory JavaScript Development  
**Duration:** 1 week practical assignment  
**Learning Objectives:**
- Basic JavaScript syntax and operators
- DOM manipulation techniques
- Event handling implementation
- Containerization with Docker
- Static web application deployment

**Assessment Criteria:**
- Needs analysis and requirements gathering
- User interface design and wireframing
- HTML5 semantic structure implementation
- CSS responsive design principles
- JavaScript functionality and debugging
- Docker containerization
- Documentation quality

## 🏫 USIU Integration

This application incorporates specific USIU context:
- **Location Context:** Thika Road transport considerations
- **Currency:** Kenyan Shilling (KSh) pricing
- **Cultural Elements:** "Karibu" welcome messaging
- **Campus Lifestyle:** Realistic cost estimates for student budgets
- **University Branding:** Official color scheme and attribution

## 📞 Support

For technical issues or questions:
1. Check browser console for error messages
2. Verify all files are in correct directory structure
3. Ensure Docker is running (for containerized deployment)
4. Review this README for troubleshooting steps

## 📄 License

This is an educational project developed for USIU coursework. All code is provided as-is for learning purposes.

---

**Version:** 1.0  
**Last Updated:** September 2025  
**Developed for:** USIU Student Affairs  
**Technology:** HTML5 + CSS3 + Vanilla JavaScript + Docker