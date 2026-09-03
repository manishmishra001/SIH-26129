# SETU Platform - Frontend Documentation

**SETU** (Secure Government Services Integration) is a platform that acts as a secure digital bridge allowing government departments to exchange information and coordinate services without replacing existing systems.

## 📁 Project Structure

```
setu-frontend/
├── index.html                 # Public homepage
├── citizen-login.html         # Citizen login page
├── citizen-dashboard.html     # Citizen portal dashboard
├── citizen-register.html      # Citizen registration (placeholder)
├── officer-login.html         # Officer login page
├── officer-dashboard.html     # Officer portal dashboard (placeholder)
├── admin-login.html          # Admin login page
├── admin-dashboard.html       # Admin dashboard (placeholder)
├── styles.css                 # Main stylesheet for public pages
├── main.js                    # Main JavaScript utilities
└── README.md                  # This file
```

## 🎨 Design System

### Color Palette
- **Primary Color**: `#0066cc` (Blue)
- **Secondary Color**: `#00b4d8` (Cyan)
- **Accent Color**: `#ffc300` (Gold)
- **Dark Background**: `#0a1428`
- **Light Background**: `#f8f9fa`
- **Text Dark**: `#1a1a1a`
- **Text Light**: `#666666`
- **Border Color**: `#e0e0e0`
- **Success**: `#28a745`
- **Warning**: `#ffc300`
- **Danger**: `#dc3545`

### Typography
- **Font Family**: System fonts (macOS, Windows, Linux optimized)
- **Sizes**: 
  - Headings: 2.5rem (h1), 1.8rem (h2), 1.4rem (h3), 1.1rem (h4)
  - Body: 1rem
  - Small: 0.85rem - 0.9rem

### Spacing
- **Base Unit**: 8px
- **Padding**: 20px, 30px, 40px, 60px
- **Gaps**: 15px, 20px, 30px
- **Border Radius**: 6px (small), 8px (medium), 10px (large), 12px (xl)

## 📄 Page Descriptions

### 1. **index.html** - Public Homepage
Main landing page with:
- Navigation bar with logo and menu
- Hero section with call-to-action buttons
- About section highlighting SETU features
- Features showcase (6 key benefits)
- System architecture visualization
- Contact form
- Footer with links and social media

**Features**:
- Responsive navigation with mobile hamburger menu
- Smooth scroll behavior
- Interactive network diagram showing system connections
- Contact form with validation

### 2. **citizen-login.html** - Citizen Portal Entry
Login interface for citizens with:
- Email/phone number input
- Password field with toggle visibility
- "Remember me" checkbox
- "Forgot password" link
- Alternative login methods (DigiLocker, Aadhaar OTP)
- Link to registration

**Features**:
- Form validation
- Password visibility toggle
- Security information box
- Gradient background
- Responsive design for mobile

### 3. **citizen-dashboard.html** - Citizen Main Portal
Post-login dashboard with:
- Sidebar navigation with 10 menu items
- Welcome header with user info
- Stats cards showing:
  - Active applications (3)
  - Approved applications (1)
  - Under review (2)
  - Documents (12)
- Quick action buttons
- Recent applications table
- Notifications section

**Features**:
- Sticky sidebar navigation
- Responsive layout (mobile-friendly)
- Status badges with color coding
- Interactive tables
- Application tracking

### 4. **officer-login.html** - Officer Portal Entry
Login interface for government officers with:
- Two-column layout (info + form)
- Officer ID input
- Department selection dropdown
- Password field
- Remember me option
- Warning message about authorized access

**Features**:
- Professional gradient backgrounds
- Department selector
- Security warnings
- Responsive two-column layout

### 5. **admin-login.html** - Admin Portal Entry
Restricted login for system administrators with:
- Admin badge indicator
- Administrator ID input
- Password field with toggle
- "Remember this device" option
- Security notice and warnings
- Restricted access notice

**Features**:
- Extra security indicators
- Animated gradient border
- Security warnings
- Professional admin aesthetic

## 🛠️ Technical Stack

### Frontend Technologies
- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Custom Properties (CSS Variables)
- **JavaScript (ES6+)**: 
  - Vanilla JS (no frameworks)
  - LocalStorage for session management
  - IntersectionObserver for scroll animations
  - Event delegation for performance

### External Libraries
- **Font Awesome 6.4**: Icon library via CDN
- **System Fonts**: Cross-platform font stack

### Browser Support
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Android Chrome)

## 🎯 Key Features

### 1. Responsive Design
- Mobile-first approach
- Breakpoints: 480px, 768px, 900px
- Flexible grid layouts
- Touch-friendly buttons and inputs

### 2. Accessibility
- Semantic HTML structure
- ARIA labels (where needed)
- Keyboard navigation support
- Focus visible indicators
- Color contrast compliance

### 3. Performance
- Minimal external dependencies
- Lazy-loaded animations with IntersectionObserver
- CSS Grid/Flexbox for efficient layouts
- No large image files
- Optimized font loading

### 4. Security (Frontend)
- No sensitive data in LocalStorage
- HTTPS ready
- Security notices on login pages
- Session validation

## 📱 Responsive Breakpoints

```css
Mobile: 0 - 480px
Tablet: 481px - 768px
Desktop: 769px - 1200px
Large Desktop: 1201px+
```

## 🚀 Getting Started

### 1. Installation
No build process required! Simply serve the files:

```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using VS Code Live Server
(Install extension and right-click → Open with Live Server)
```

### 2. File Organization
```
Place all files in the same directory:
- index.html
- citizen-login.html
- citizen-dashboard.html
- officer-login.html
- admin-login.html
- styles.css
- main.js
```

### 3. Navigation Flow

```
index.html (Home)
├── citizen-login.html → citizen-dashboard.html
├── officer-login.html → officer-dashboard.html
└── admin-login.html → admin-dashboard.html
```

## 💾 Data Persistence

### LocalStorage Keys
```javascript
// User session
localStorage.setItem('currentUser', JSON.stringify({
    id: 'user123',
    type: 'citizen|officer|admin',
    loginTime: timestamp
}));

// Theme preference
localStorage.setItem('theme', 'light|dark');

// Admin session
localStorage.setItem('adminSession', JSON.stringify({...}));
```

## 🎨 Customization

### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #00b4d8;
    /* ... more colors ... */
}
```

### Adding New Pages
1. Create new HTML file following existing structure
2. Link in navigation menus
3. Import same CSS and JavaScript
4. Add route in navigation logic

### Modifying Forms
Update form groups with new inputs and add validation in JavaScript.

## 📋 Page Checklist

- [x] index.html - Complete with all sections
- [x] citizen-login.html - Fully functional
- [x] citizen-dashboard.html - Complete with tables and cards
- [x] officer-login.html - Fully styled
- [x] admin-login.html - With security warnings
- [ ] citizen-register.html - To be created
- [ ] officer-dashboard.html - To be created
- [ ] admin-dashboard.html - To be created
- [ ] Additional portal pages (consent, documents, etc.)

## 🔐 Security Notes

### Frontend Security
- All sensitive operations should be server-side
- Passwords are only validated client-side for UX
- Real authentication happens on backend
- Never store sensitive tokens in LocalStorage (use httpOnly cookies)
- HTTPS required in production

### Session Management
```javascript
// Check if user is logged in before showing protected pages
if (!SessionManager.isLoggedIn() && isProtectedPage) {
    window.location.href = 'login.html';
}
```

## 📱 Mobile Optimization

### Viewport Settings
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Touch-Friendly Elements
- Button min height: 44px
- Input padding: 12px 15px
- Touch targets: 48x48px minimum

### Mobile Breakpoints
```css
@media (max-width: 768px) {
    /* Tablet and mobile styles */
}

@media (max-width: 480px) {
    /* Small phone styles */
}
```

## 🧪 Testing Checklist

### Functionality
- [ ] All links navigate correctly
- [ ] Forms validate input
- [ ] Buttons respond to clicks
- [ ] Sidebar toggles on mobile
- [ ] Password visibility toggle works

### Responsive Design
- [ ] Tested on iPhone SE (375px)
- [ ] Tested on iPad (768px)
- [ ] Tested on desktop (1200px+)
- [ ] Tested on wide screens (1920px+)

### Browser Compatibility
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Accessibility
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA
- [ ] Form labels associated with inputs

## 📚 Component Library

### Buttons
```html
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
```

### Cards
```html
<div class="card">
    <div class="card-number">42</div>
    <div class="card-label">Card Label</div>
</div>
```

### Status Badges
```html
<span class="status-badge status-approved">Approved</span>
<span class="status-badge status-pending">Pending</span>
<span class="status-badge status-rejected">Rejected</span>
```

### Form Groups
```html
<div class="form-group">
    <label for="input">Label</label>
    <input type="text" id="input" placeholder="Placeholder">
</div>
```

## 🚀 Deployment

### Static Hosting
Works with any static hosting:
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Nginx/Apache

### Pre-deployment Checklist
- [ ] All links working
- [ ] Images optimized
- [ ] Console has no errors
- [ ] HTTPS configured
- [ ] CSP headers set
- [ ] Forms point to correct endpoints

## 🤝 Team Integration

### Frontend → Backend API Endpoints (Planned)
```javascript
// Example API calls (to be implemented)
const API_BASE = 'https://api.setu.gov.in/v1';

// Citizen login
POST /auth/citizen/login
Body: { email: string, password: string }

// Get applications
GET /citizen/:id/applications
Headers: { Authorization: 'Bearer token' }

// Submit application
POST /applications
Body: { scheme_id, documents[], consents[] }
```

### Backend Developer Notes
- Frontend is ready for API integration
- All form handlers are in place
- Session management structure defined
- Error handling framework ready

## 📞 Support

For issues or questions:
1. Check the documentation (this file)
2. Review the code comments
3. Test in different browsers
4. Check console for JavaScript errors

## 📄 License

This project is part of the Smart India Hackathon 2026.

---

**Last Updated**: August 30, 2026  
**Version**: 1.0.0  
**Status**: Frontend Complete - Ready for Backend Integration
