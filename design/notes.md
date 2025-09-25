# Design Wireframes & Notes

## Wireframe 1: Home/Greeting Screen (wireframe-home.png)
**Layout Description:**
- Mobile-first vertical layout
- Header with USIU branding and title
- Welcome section with personalized greeting
- Two prominent action buttons: "Run Estimator" and "Toggle Theme"
- Footer with university attribution

**Interaction Flow:**
- Page loads → automatic name prompt → personalized greeting displays
- Clean, accessible button design for main actions
- Immediate visual feedback with theme toggle

**JavaScript Behavior:**
- `prompt()` captures student name on page load
- `alert()` provides "Karibu" welcome message
- `document.getElementById("greeting").textContent` updates greeting
- `console.log()` records student name for debugging

## Wireframe 2: Estimator Input Flow (wireframe-estimator.png)
**Layout Description:**
- Same header/footer structure for consistency
- Visual focus on summary section
- Clear button hierarchy with estimator as primary action
- Pre-formatted area for results display

**Interaction Flow:**
- User clicks "Run Estimator" button
- Sequential prompts for: days per week, transport cost, snacks per day, snack price
- Immediate calculation and display of results
- All values logged to console for transparency

**JavaScript Behavior:**
- `Number()` conversion for all numeric inputs
- Arithmetic operations: multiplication, addition, percentage calculation
- `Math.round()` for practical currency display
- `document.getElementById("summary").innerText` updates display

## Wireframe 3: Summary Display (wireframe-summary.png)
**Layout Description:**
- Emphasized summary section with structured data display
- Clear typography hierarchy for readability
- Monospace font for tabular data alignment
- Visual separation between input actions and results

**Interaction Flow:**
- Results appear in structured format after estimator runs
- Theme toggle affects entire page background/text
- Reset capability through re-running estimator

**JavaScript Behavior:**
- Template string formatting for clean summary display
- Conditional styling based on theme state
- `document.body.style` manipulation for theme switching

## Design Decision Rationale

### Mobile-First Approach
- Primary device for students during orientation
- Touch-friendly button sizing (minimum 44px touch targets)
- Vertical layout prioritizes content flow
- Single-column design prevents horizontal scrolling

### Color Strategy
- CSS custom properties for consistent theming
- USIU blue accent (#3a86ff) for brand recognition
- High contrast ratios for accessibility
- Simple two-state theme system (light/dark)

### Typography Choices
- System font stack for fast loading and native feel
- Clear hierarchy with h1, h2, h3 sizing
- Monospace font for tabular data (cost breakdown)
- 16px base size for mobile readability

### User Experience Flow
1. **Immediate Engagement:** Name prompt on load creates personal connection
2. **Progressive Disclosure:** Information revealed through user actions
3. **Clear Feedback:** Console logging provides transparency
4. **Practical Results:** Focus on actionable financial planning

### Accessibility Considerations
- Semantic HTML structure for screen readers
- Sufficient color contrast for all themes
- Clear button labels and heading hierarchy
- Keyboard navigation support through standard HTML elements

### Technical Constraints Integration
- No CSS frameworks → custom utility-first approach
- Vanilla JS only → DOM manipulation through getElementById
- Static hosting → no server-side processing required
- Docker deployment → minimal asset optimization needed

## Future Enhancement Notes
- Replace prompt() with inline forms for better UX
- Add animation transitions for theme switching
- Implement local storage for preference persistence
- Enhanced responsive breakpoints for tablet/desktop
- ARIA labels for improved screen reader support