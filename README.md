# Modern Calculator

A sleek, responsive calculator with a beautiful UI and clean code architecture. Built with vanilla JavaScript using modular design principles.

## Features

### 🧮 Core Functionality
- **Basic Operations**: Addition, subtraction, multiplication, division
- **Real-time Updates**: Live calculation display with expression history
- **Edge Case Handling**: Division by zero protection and error management
- **Number Formatting**: Automatic comma separation for large numbers

### 🎨 User Interface
- **Dual Themes**: Light and dark mode with smooth transitions
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Visual Feedback**: Button animations and operator highlighting
- **Modern Styling**: Glass morphism effects and smooth animations

### ⌨️ Input Methods
- **Mouse/Touch**: Full button interaction with visual feedback
- **Keyboard Support**: Complete keyboard navigation and shortcuts
- **Accessibility**: Proper focus management and ARIA labels

### 🔧 Technical Features
- **Modular Architecture**: Clean separation of concerns
- **Error Handling**: Comprehensive error management and recovery
- **State Management**: Robust calculator state handling
- **Performance**: Optimized animations and efficient calculations

## File Structure

```
CAL/
├── index.html              # Main HTML structure
├── styles.css              # Complete styling with themes
├── js/
│   ├── main.js             # Application entry point
│   ├── calculator.js       # Main calculator orchestrator
│   ├── operations.js       # Mathematical operations logic
│   ├── state.js           # State management
│   ├── display.js         # UI display management
│   └── events.js          # Event handling and user input
```

## Usage

### Basic Operations
1. **Numbers**: Click number buttons or use keyboard (0-9)
2. **Operators**: Click operator buttons or use keyboard (+, -, *, /)
3. **Calculate**: Click equals button or press Enter
4. **Clear**: Click C button or press Escape

### Advanced Functions
- **Decimal**: Click . button or press period key
- **Percentage**: Click % button or press % key
- **Sign Toggle**: Click +/- button
- **Theme Switch**: Click the microphone icon in top-left

### Keyboard Shortcuts
| Key | Function |
|-----|----------|
| 0-9 | Number input |
| +, -, *, / | Operators |
| Enter, = | Calculate |
| Escape, C | Clear |
| . | Decimal point |
| % | Percentage |
| Backspace | Delete last digit |

## Code Architecture

### 🏗️ Modular Design
Each module has a specific responsibility:

- **operations.js**: Pure mathematical functions
- **state.js**: Calculator state management
- **display.js**: UI updates and formatting
- **events.js**: User interaction handling
- **calculator.js**: Main orchestrator class

### 🔄 Data Flow
1. User input → Event Handler
2. Event Handler → Calculator methods
3. Calculator → Operations/State updates
4. State changes → Display updates

### 🛡️ Error Handling
- Division by zero protection
- Invalid input validation
- Graceful error recovery
- User-friendly error messages

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## Development

### Local Development
1. Clone or download the project
2. Open `index.html` in a web browser
3. No build process required - uses native ES6 modules

### Debugging
The calculator exposes useful debugging methods in the browser console:
```javascript
calculator.getState()    // View current state
calculator.getHistory()  // View calculation history
calculator.clear()       // Programmatically clear
```

## Customization

### Themes
Modify the CSS custom properties in `styles.css` to create new themes:
```css
:root {
    --primary-color: #your-color;
    --background: #your-background;
}
```

### Operations
Add new mathematical operations in `operations.js`:
```javascript
this.operations = {
    // existing operations...
    '^': (a, b) => Math.pow(a, b),  // Power operation
};
```

## Performance Features

- **Efficient DOM Updates**: Minimal reflows and repaints
- **Optimized Animations**: Hardware-accelerated transforms
- **Memory Management**: Proper cleanup and state management
- **Lazy Loading**: Modules loaded only when needed

## Accessibility

- Keyboard navigation support
- Clear visual feedback
- Error state announcements
- High contrast mode compatibility

## License

This project is open source and available under the MIT License.

---

Built with ❤️ using vanilla JavaScript, HTML5, and CSS3.
