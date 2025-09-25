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
└── README.md                 # This file
```


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


### USIU Brand Integration
- USIU blue accent color (#3a86ff)
- "Karibu" welcome messaging
- Local context (Thika Road, KSh currency)
- University attribution in footer


## 🏫 USIU Integration

This application incorporates specific USIU context:
- **Location Context:** Thika Road transport considerations
- **Currency:** Kenyan Shilling (KSh) pricing
- **Cultural Elements:** "Karibu" welcome messaging
- **Campus Lifestyle:** Realistic cost estimates for student budgets
- **University Branding:** Official color scheme and attribution

## 📄 License

This is an educational project developed for USIU coursework. All code is provided as-is for learning purposes.

---

**Version:** 1.0  
**Last Updated:** September 2025  
**Developed for:** USIU Student Affairs  

**Technology:** HTML5 + CSS3 + Vanilla JavaScript + Docker
