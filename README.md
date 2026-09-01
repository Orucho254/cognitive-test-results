# Cognitive Test Results Display

An interactive React application that displays cognitive test results with animated progress indicators and a clean, modern UI. All components are fully linked together.

## 🎯 Features

- **Overall Score Display**: Large, animated circular progress indicator showing overall performance
- **Individual Skill Breakdown**: Progress bars for Reaction, Memory, Verbal, and Visual skills
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient backgrounds and smooth animations
- **Interactive Elements**: Hover effects and smooth transitions
- **Fully Linked Components**: All React components work together seamlessly

## 🛠️ Tech Stack

- **React** 18.2.0 - UI library
- **CSS3** - Flexbox, Grid, Gradients, Animations
- **SVG** - Animated circular progress
- **Responsive Design** - Mobile-first approach

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Orucho254/cognitive-test-results.git
cd cognitive-test-results
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure & Component Flow

```
src/
├── index.js                    ↓ Entry point - renders App
├── App.js                      ↓ Main component with test data
├── App.css
├── index.css                   (Global styles)
└── components/
    ├── CognitiveTestResults.js ↓ Main container (links left & right panels)
    ├── CognitiveTestResults.css
    ├── ResultCard.js           ↓ Left panel - overall score
    ├── ResultCard.css
    ├── ScoreSummary.js         ↓ Right panel - skills list
    ├── ScoreSummary.css
    ├── SkillBar.js             ↓ Individual skill component (used by ScoreSummary)
    └── SkillBar.css
```

## 🔗 Component Linking Flow

```
index.js
   ↓
App.js (contains testData with score and skills array)
   ↓
CognitiveTestResults.js (main container - LINKS everything together)
   ├─→ ResultCard (receives: score, maxScore, rating, percentile)
   └─→ ScoreSummary (receives: skills array)
       └─→ SkillBar (receives: each individual skill)
           ├─→ skill.icon
           ├─→ skill.name
           ├─→ skill.score
           ├─→ skill.maxScore
           └─→ skill.color
```

## 🎨 Components Explanation

### 1. **ResultCard** (Left Panel)
Displays the overall test score with animated circular progress.

**Receives props from CognitiveTestResults:**
```javascript
<ResultCard 
  score={data.overallScore}        // 76
  maxScore={data.maxScore}         // 100
  rating={data.rating}             // "Great"
  percentile={data.percentile}     // 65
/>
```

**Features:**
- SVG-based animated circular progress ring
- Yellow score number
- Percentile ranking message
- Purple gradient background

---

### 2. **ScoreSummary** (Right Panel)
Container that displays all individual skills via SkillBar components.

**Receives props from CognitiveTestResults:**
```javascript
<ScoreSummary skills={data.skills} />
```

**Maps through skills and renders SkillBar:**
```javascript
{skills.map((skill) => (
  <SkillBar key={skill.id} skill={skill} />
))}
```

**Features:**
- Dynamic skill rendering
- Continue button with hover effects
- Responsive layout

---

### 3. **SkillBar** (Individual Skill Component)
Reusable component for each skill's progress bar.

**Receives skill object with structure:**
```javascript
{
  id: 1,
  name: 'Reaction',
  score: 80,
  maxScore: 100,
  color: '#FF6B6B',
  icon: '⚡'
}
```

**Displays:**
- Skill icon
- Skill name
- Current score / Max score
- Animated progress bar (width based on percentage)
- Custom color for each skill

---

### 4. **CognitiveTestResults** (Main Linking Component)
Central component that connects ResultCard and ScoreSummary.

```javascript
const CognitiveTestResults = ({ data }) => {
  return (
    <div className="cognitive-test-container">
      <div className="results-wrapper">
        <ResultCard {...resultProps} />
        <ScoreSummary skills={data.skills} />
      </div>
    </div>
  );
};
```

---

## 🚀 Data Flow

1. **App.js** defines test data in state
2. **App.js** passes data to **CognitiveTestResults**
3. **CognitiveTestResults** splits data:
   - Overall score → **ResultCard**
   - Skills array → **ScoreSummary**
4. **ScoreSummary** loops through skills array
5. Each skill → **SkillBar** component
6. **SkillBar** renders individual skill with animated progress bar

## 📝 Customization

### Change Test Scores
Edit `src/App.js`:
```javascript
const [testData] = useState({
  overallScore: 76,      // Change this
  maxScore: 100,
  rating: 'Great',       // Change this
  percentile: 65,        // Change this
  skills: [
    {
      id: 1,
      name: 'Reaction',
      score: 80,         // Change this
      maxScore: 100,
      color: '#FF6B6B',  // Change this color
      icon: '⚡'         // Change this emoji
    },
    // ... more skills
  ]
});
```

### Modify Colors

**Result Card Background** (ResultCard.css):
```css
background: linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%);
```

**Skill Progress Bar Colors** (App.js - skill colors):
- Reaction: `#FF6B6B` (Red)
- Memory: `#FFA500` (Orange)
- Verbal: `#20C997` (Teal)
- Visual: `#4C63FF` (Blue)

**Background Gradient** (index.css):
```css
background: linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 100%);
```

## 📱 Responsive Design

- **Desktop (> 768px)**: Two-column grid layout
- **Mobile/Tablet (≤ 768px)**: Single-column stacked layout

## ⚡ Animations

- **Score Circle**: SVG stroke animation (0.5s ease)
- **Progress Bars**: Width animation (0.6s ease)
- **Button Hover**: Transform + Shadow (0.3s ease)

## 🚀 Build for Production

```bash
npm build
```

Creates optimized production build in `build/` directory.

## 📜 License

MIT License - Feel free to use this project for your own purposes.

## 👨‍💻 Author

Created by [Orucho254](https://github.com/Orucho254)

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

## 🐛 Issues

If you find any bugs or have suggestions, please open an issue on the repository.

---

**All components are fully linked and working together! 🎉**
