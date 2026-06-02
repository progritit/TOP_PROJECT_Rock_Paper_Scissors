# TOP Rock Paper Scissors Project

# Solar RPS

A solarpunk-themed Rock Paper Scissors game built with HTML, CSS, and JavaScript.

This project was developed as part of The Odin Project Foundations curriculum and redesigned into a visually polished browser game focused on DOM manipulation, event handling, responsive UI design, and beginner-friendly JavaScript logic.

---

## Preview

The application showcases:

* A modern Rock Paper Scissors game interface
* A solarpunk-inspired visual theme
* Player versus AI gameplay
* Interactive Rock, Paper, and Scissors buttons
* Dynamic score tracking
* Round-based game progression
* Result messages after each round
* Final winner announcement
* Reset game functionality
* Responsive layout
* Footer with automatically updated copyright year

---

## Built With

* HTML5
* CSS3
* JavaScript
* Flexbox
* CSS Grid
* CSS variables
* AI-generated visual assets

---

## Features

### Layout & UI

* Semantic HTML structure
* Responsive web app layout
* Solarpunk-inspired game dashboard
* Glass-style central game container
* Scoreboard for Player and AI
* Round counter
* Choice display panels
* Reusable button card structure
* Styled footer matching the visual identity

### Game Logic

* Random AI move generation
* Valid move checking
* Round winner calculation
* Score update system
* Five-round game limit
* Final winner calculation
* Reset functionality
* Dynamic DOM updates

### Design

* Eco-futuristic solarpunk visual direction
* Green, teal, gold, and cyan color palette
* Large illustrated game buttons
* Background image integration
* Glowing borders and soft shadows
* Accessible button labels and visual feedback
* Responsive spacing for smaller screens

### Image Handling

* Project assets organized inside an `images/` folder
* Relative image paths for browser compatibility
* PNG assets used for the background, logo, and game buttons
* Button images placed inside interactive HTML button elements
* Image scaling handled with `object-fit: contain`

---

## Project Structure

```
TOP_PROJECT_Rock_Paper_Scissor/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── images/
    ├── rps_background.png
    ├── rps_rockbutton.png
    ├── rps_paperbutton.png
    ├── rps_scissorsbutton.png
    └── rps_splogo.png
```

---

## Design Concept

This version of the project was redesigned around a fictional eco-futuristic game interface named Solar RPS.

The objective was to create a playful browser game that combines The Odin Project JavaScript fundamentals with a more polished portfolio-style interface.

The visual identity is inspired by solarpunk aesthetics, including:

* Clean renewable energy themes
* Green futuristic environments
* Organic shapes
* Friendly game-style illustrations
* Bright optimistic colors
* Nature-inspired UI details

The goal was not to build an advanced production game engine, but to create a simple, understandable, and visually engaging project using foundational web development skills.

---

## Key Learning Outcomes

This project helped reinforce:

* JavaScript function organization
* DOM selection and manipulation
* Event listeners
* Conditional logic
* Random choice generation
* Score tracking
* Game state management
* Updating the interface dynamically
* Writing reusable CSS
* CSS Grid and Flexbox layout techniques
* Responsive design principles
* Working with image assets
* Using relative paths for web projects
* Improving a basic project into a portfolio-ready presentation

---

## Challenges Solved

### Connecting Game Logic to the UI

The original JavaScript logic handled the rules of Rock Paper Scissors, but it needed to be connected to visible page elements.

### Solution

* Added DOM selectors for scores, choices, messages, buttons, and reset controls
* Used event listeners on each move button
* Updated the page after every round
* Displayed the player choice, computer choice, round result, and current score

---

### Managing Round Progression

The game needed to stop after a fixed number of rounds.

### Solution

* Added a `MAX_ROUNDS` constant
* Tracked the current round with a variable
* Disabled move buttons when the game ended
* Displayed a final game result message

---

### Creating a Beginner-Friendly Visual Interface

The target design was inspired by a highly detailed solarpunk UI reference, but the implementation needed to stay realistic for a Foundations-level project.

### Solution

* Used simple HTML sections instead of complex components
* Created reusable CSS classes for cards, buttons, panels, and footers
* Used CSS gradients, borders, and shadows to approximate the visual style
* Kept the structure readable and maintainable

---

### Image Transparency Issues

Some generated button assets included a fake checkerboard background instead of real transparency.

### Solution

* Identified that the checkerboard was baked into the image pixels
* Prepared prompts to regenerate or edit the images with true PNG alpha transparency
* Kept the HTML and CSS ready to work with properly transparent PNG assets

---

### Relative Path Compatibility

Local absolute image paths are not suitable for browser projects or GitHub Pages deployment.

### Solution

* Used relative paths such as:

    <img src="./images/rps_rockbutton.png" alt="Rock">

* Organized all visual assets inside the project `images/` folder

* Kept filenames simple and portable

---

### Automatic Copyright Year

The footer needed to show the current year automatically.

### Solution

* Added a footer element with a dedicated year span

* Used JavaScript to get the current year:

  new Date().getFullYear();

* Updated the footer dynamically when the page loads

---

## AI-Assisted Workflow

This project was developed using a modern AI-assisted workflow.

### Tools Used

#### ChatGPT

Assisted with:

* HTML structure planning
* CSS layout and styling
* JavaScript integration
* DOM manipulation guidance
* Responsive design improvements
* Debugging image and path issues
* README drafting
* Portfolio presentation refinement

#### Google Gemini

Assisted with:

* Solarpunk visual concept generation
* Background image creation
* Rock, Paper, and Scissors asset generation
* Logo image generation
* Visual direction exploration
* Transparency correction prompts

### Development Approach

AI tools were used as collaborative assistants throughout the project, while implementation decisions, code integration, debugging, customization, and final design direction were handled manually.

This workflow reflects a modern learning process where AI helps accelerate ideation and problem-solving, while the developer remains responsible for understanding and applying the code.

---

## Future Improvements

Potential future enhancements:

* Improve mobile responsiveness further
* Add sound effects
* Add button click animations
* Add animated choice reveal
* Add AI thinking delay before showing the computer choice
* Add match history
* Add best-of-three or best-of-five mode selector
* Add keyboard controls
* Improve accessibility with ARIA live regions
* Optimize image sizes with WebP versions
* Deploy with GitHub Pages
* Add a custom favicon

---

## Author

Clebson Costa

Frontend development student focused on:

* Clean UI implementation
* Responsive layouts
* JavaScript fundamentals
* Modern frontend practices
* Portfolio-quality projects

---

## Acknowledgements

* The Odin Project
* ChatGPT for development support and debugging assistance
* Google Gemini for solarpunk visual generation and creative inspiration
* The open web development community

---

## License

This project is open-source and available for educational and portfolio purposes.
