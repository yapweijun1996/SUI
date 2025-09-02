# Admin Panel Template

A simple, responsive admin panel template built with vanilla HTML, CSS, and JavaScript (using jQuery). Designed for developers to clone, study, and customize for their projects.

## Features

- **Responsive Design**: Mobile-friendly with collapsible sidebar and adaptive layouts.
- **Multiple Pages**: Separate HTML files for Dashboard, Users, Settings, and Reports.
- **UI Components**: Buttons, tables, forms, modals, toasts, and charts.
- **Accessibility**: ARIA labels and keyboard navigation support.
- **Icons**: Font Awesome icons for better visual hierarchy.
- **Interactivity**: jQuery-powered sidebar toggle, modals, and form handling.

## File Structure

```
admin-panel-template/
├── index.html          # Home page with overview
├── dashboard.html      # Dashboard with stats and charts
├── users.html          # User management with table and forms
├── settings.html       # Settings form
├── reports.html        # Reports with chart
├── styles.css          # Main stylesheet with CSS variables
├── script.js           # JavaScript for interactivity
├── development.md      # Original breakdown document
└── README.md           # This file
```

## Setup

1. Clone or download the files.
2. Open any `.html` file in a web browser (no server required).
3. Customize styles in `styles.css` or add functionality in `script.js`.

## Usage

- **Navigation**: Use the sidebar to switch between pages.
- **Mobile**: Tap the hamburger menu to toggle the sidebar.
- **Forms**: Fill out forms and submit to see toast notifications.
- **Modals**: Click "Add User" to open the modal.
- **Charts**: View the simple canvas chart on the Reports page.

## Customization

- **Colors**: Modify CSS variables in `:root` for theming.
- **Layout**: Adjust flexbox/grid in CSS for different layouts.
- **Functionality**: Extend JS for dynamic data (e.g., fetch from API).
- **Components**: Add more UI elements as needed.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge).
- Mobile browsers with responsive design.

## Improvements for Study

- **Modularity**: Code is organized into functions for easy understanding.
- **Comments**: Added inline comments for learning purposes.
- **Best Practices**: Uses semantic HTML, CSS variables, and event delegation.
- **Extensibility**: Easy to add new pages or components.

## License

Free to use and modify for personal or commercial projects.