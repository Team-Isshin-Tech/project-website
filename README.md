# Team Isshin Tech Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive**: Works perfectly on all devices and screen sizes
- **Fast Performance**: Optimized for speed and SEO
- **Interactive**: Smooth scrolling and engaging user interactions
- **Downloadable CV**: Direct download link for the resume

## 📋 Portfolio Sections

### 1. Home
- Personal introduction and hero section
- Technology stack highlights
- Call-to-action buttons

### 2. About
- Professional bio and background
- Key statistics and achievements
- CV download section
- Recommendations from colleagues (Amra & Upuli)

### 3. Experience
- GTN Technologies internship
- MIND Mentoring Program experience
- Detailed role descriptions and technologies used

### 4. Projects
- 6 featured projects with descriptions
- Technology stacks for each project
- Interactive carousel display

### 5. Skills
- Programming Languages: JavaScript, TypeScript, Python, Java, HTML, CSS
- Frameworks & Libraries: React, Vue.js, Node.js, Express.js, Next.js, Tailwind CSS
- Tools & Technologies: Git, Docker, PostgreSQL, MongoDB, Firebase, AWS
- Soft Skills: Problem Solving, Team Collaboration, Communication, Time Management, Adaptability

### 6. Certificates
- AWS Certified Developer
- React Developer Certification
- Python Programming
- Web Development Bootcamp

### 7. Contact
- Email: baskarakurukkal.21@cse.mrt.ac.lk
- GitHub: https://github.com/Praveenasarma-Baskarakurukkal
- LinkedIn: https://www.linkedin.com/in/praveenasarma/

## 🛠️ Technologies Used

- **Framework**: Next.js 13+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom components with Radix UI
- **Smooth Scrolling**: Locomotive Scroll

## 📁 Project Structure

```
src/
├── components/
│   ├── Container.tsx          # Main layout with navigation
│   ├── Footer.tsx             # Footer component
│   ├── Preloader.tsx          # Loading screen
│   └── ui/                    # Reusable UI components
├── pages/
│   ├── _app.tsx              # App wrapper
│   └── index.tsx             # Main portfolio page
├── styles/                    # CSS modules and global styles
└── lib/
    └── utils.ts              # Utility functions

public/
├── assets/                    # Images and media files
│   ├── Praveenasarma_CV.docx # Downloadable CV
│   ├── amra.jpg              # Recommendation photo
│   ├── upuli.jpg             # Recommendation photo
│   └── project*.jpg          # Project images
└── favicon.ico               # Site favicon
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization Guide

### Updating Personal Information

1. **Name and Title**: Update in `src/pages/index.tsx`
2. **Contact Information**: Update email, GitHub, and LinkedIn links
3. **CV File**: Replace `public/Praveenasarma_CV.docx` with your CV
4. **Profile Picture**: Add your photo to `public/assets/`

### Updating Content

1. **About Section**: Modify the bio text in the About section
2. **Experience**: Update the `experience` array with your work history
3. **Projects**: Modify the `projects` array with your projects
4. **Skills**: Update the `skills` object with your technical skills
5. **Certificates**: Update the `certificates` array with your certifications
6. **Recommendations**: Update the `recommendations` array with real testimonials

### Styling

- **Colors**: Modify the primary colors in `tailwind.config.ts`
- **Fonts**: Update font imports in `src/styles/globals.css`
- **Animations**: Adjust animation parameters in the motion components

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful gradient overlays
- **Smooth Animations**: Framer Motion animations throughout
- **Interactive Cards**: Hover effects and tilt animations
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Modern Typography**: Clean, readable fonts with proper hierarchy

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Build and Deploy

1. **Build for production**:
   ```bash
   npm run build
   ```

2. **Start production server**:
   ```bash
   npm start
   ```

3. **Deploy to Vercel** (recommended):
   ```bash
   npx vercel
   ```

## 📄 License

This project is open source and available under the [MIT License](LICENSE.md).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Note**: This portfolio is based on a modern Next.js template and has been customized for Team Isshin Tech's professional background and experience.
