#!/bin/bash
# Quick Start Setup for Maya Reynolds Therapist Website

echo "🚀 Setting up Maya Reynolds Therapist Website..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎉 Setup complete!"
    echo ""
    echo "Next steps:"
    echo "  1. Run development server: npm run dev"
    echo "  2. Open http://localhost:3000 in your browser"
    echo "  3. Edit files in app/components/ to customize"
    echo ""
    echo "📖 Documentation:"
    echo "  - README.md - Project overview and setup"
    echo "  - DELIVERY.md - Feature summary and next steps"
    echo "  - DESIGN_TOKENS.md - Color palette and theme guide"
    echo ""
    echo "📂 Key files to customize:"
    echo "  - app/components/layout/Header.jsx - Navigation and branding"
    echo "  - app/components/layout/Hero.jsx - Main headline"
    echo "  - app/components/layout/About.jsx - Therapist bio"
    echo "  - app/components/layout/Office.jsx - Office description"
    echo "  - app/components/layout/Footer.jsx - Contact info"
    echo "  - tailwind.config.js - Colors and theme"
    echo ""
else
    echo "❌ Failed to install dependencies"
    exit 1
fi
