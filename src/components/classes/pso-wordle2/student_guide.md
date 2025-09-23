# 🎯 Wordle Assignment: Student Problem-Solving Guide

## 📚 Overview
This guide will teach you **HOW TO THINK** about solving the Wordle assignment, not give you the answers. You'll learn to understand the codebase, break down problems, and develop solutions step by step.

---

## 🔍 Part 1: Understanding the Codebase

### 1.1 Start by Exploring the Files

**Open these files in order and understand their purpose:**

1. **`index.html`** - The game's structure
   - Look for elements with IDs like `game-board`, `keyboard`, `modal`
   - Notice how the board is made of rows and tiles
   - Find where the keyboard keys are defined

2. **`styles.css`** - The visual design
   - Don't worry about understanding CSS deeply
   - Notice the class names like `.tile`, `.correct`, `.present`, `.absent`
   - These classes will be important for your JavaScript

3. **`words.js`** - The word database
   - Open this file and look at the top
   - You'll see functions like `getRandomWord()` and `isValidWord()`
   - These are your tools for word management

4. **`game-starter.js`** - Your helper functions
   - **THIS IS THE MOST IMPORTANT FILE TO UNDERSTAND**
   - Read through every function and comment
   - Try to understand what each helper function does

### 1.2 Understanding Helper Functions in `game-starter.js`

**Read each function and ask yourself:**
- What does this function take as input?
- What does it return or do?
- When would I need to use this?

**Key functions you'll use:**
- `getTile(row, col)` - Gets a specific tile element
- `updateTileDisplay(tile, letter)` - Shows a letter in a tile
- `setTileState(tile, state)` - Colors a tile (correct/present/absent)
- `resetBoard()` - Clears the game board
- `showModal(won, word, guesses)` - Shows win/lose message
- `hideModal()` - Hides the modal
- `updateKeyboardKey(letter, state)` - Colors keyboard keys
- `celebrateRow(rowIndex)` - Celebration animation

**Pro Tip:** Open the browser console (F12) and try calling these functions manually to see what they do!

---

## 🧠 Part 2: Problem-Solving Approach

### 2.1 Start Simple, Build Complexity

**Don't try to solve everything at once!** Here's the recommended order:

1. **First:** Get basic letter input working
2. **Then:** Add backspace functionality  
3. **Next:** Handle enter key (even without word validation)
4. **After:** Add word validation
5. **Finally:** Add the complex letter checking logic

### 2.2 Use Console.log for Everything

**Add debug statements everywhere:**
```javascript
function handleKeyPress(key) {
    console.log('Key pressed:', key);
    console.log('Current guess:', currentGuess);
    console.log('Current row:', currentRow);
    // Your code here...
}
```

**This helps you understand:**
- What values your variables have
- When functions are being called
- Where things might be going wrong

### 2.3 Test Incrementally

**After each small change:**
1. Save your file
2. Refresh the browser
3. Test that specific feature
4. Check the console for errors
5. Only move to the next feature when current one works

---

## 🎮 Part 3: Function-by-Function Strategy

### 3.1 `initializeGame()` - Start Here (10 points)

**What this function needs to do:**
- Reset all the game variables to starting values
- Pick a new random word
- Clear the board
- Hide any messages

**How to figure it out:**
1. Look at the global variables at the top of `game-starter.js`
2. What values should they have at game start?
3. Look at the helper functions - which ones "reset" or "clear" things?
4. Look at `words.js` - what function gets a random word?

**Testing strategy:**
- Add `console.log('Target word:', currentWord)` to see if you're getting a word
- Check if the board clears when you call this function

### 3.2 `handleKeyPress(key)` - The Input Handler (15 points)

**Break this into three parts:**

**Part A: Letter Keys**
- How do you check if a key is a letter? (Hint: look at the existing regex patterns in other files)
- What should happen when someone types a letter?
- How do you prevent adding letters when the row is full?
- Which helper function shows a letter in a tile?

**Part B: Enter Key**  
- When should enter work? (When guess is complete)
- What function should you call when enter is pressed?
- How do you check if a guess is complete?

**Part C: Backspace Key**
- When should backspace work? (When there are letters to remove)
- How do you remove the last letter from the display?
- How do you remove the last letter from your guess string?

**Testing each part:**
```javascript
// Test letters
console.log('Adding letter:', key);
console.log('Guess after adding:', currentGuess);

// Test enter
console.log('Enter pressed, guess complete:', currentGuess.length === WORD_LENGTH);

// Test backspace  
console.log('Removing letter, guess before:', currentGuess);
```

### 3.3 `submitGuess()` - The Main Logic (20 points)

**This is the most complex function. Break it down:**

**Step 1: Validation**
- Is the guess 5 letters long?
- Is it a real word? (Use the helper from `words.js`)
- Show error messages if validation fails

**Step 2: Check Each Letter**
- Loop through each position (0 to 4)
- Call `checkLetter()` for each position
- Store the results in an array

**Step 3: Update Display**
- Use the results array to color each tile
- Update the keyboard colors
- Check if the guess was completely correct

**Step 4: Game State**
- Did they win? Did they lose?
- Move to the next row if continuing

**Testing approach:**
```javascript
console.log('Submitting guess:', currentGuess);
console.log('Target word:', currentWord);
console.log('Is valid word:', WordleWords.isValidWord(currentGuess));
```

### 3.4 `checkLetter(guessLetter, position, targetWord)` - The Tricky One (10 points)

**This is the hardest function. Here's how to think about it:**

**Start with the simple cases:**
1. **Correct position:** Letter matches exactly at this position
2. **Not in word:** Letter doesn't exist anywhere in target word
3. **Wrong position:** Letter exists somewhere else in target word

**The duplicate letter problem:**
- What if the target word is "APPLE" and you guess "LLAMA"?
- The first L should be yellow (wrong position)
- The second L should be gray (no more L's available)

**How to approach duplicates:**
1. First, understand the simple version without duplicates
2. Test with words that have no duplicate letters
3. Then research how real Wordle handles duplicates
4. Implement the more complex logic

**Testing strategy:**
```javascript
// Test simple cases first
console.log('Checking:', guessLetter, 'at position', position, 'in', targetWord);
console.log('Exact match?', targetWord[position] === guessLetter);
console.log('In word somewhere?', targetWord.includes(guessLetter));
```

### 3.5 `updateGameState(isCorrect)` - Game Over Logic (5 points)

**Two scenarios to handle:**
1. **Player won:** They guessed the word correctly
2. **Player lost:** They used all 6 guesses without success

**How to figure it out:**
- What variables track if the game is over?
- What variables track if they won?
- How many guesses do players get? (Look for MAX_GUESSES)
- Which helper function shows the end game message?

---

## 🚀 Part 4: Advanced Features

### 4.1 `updateKeyboardColors(guess, results)` - Visual Feedback (10 points)

**Understanding the priority system:**
- Green (correct) beats everything
- Yellow (present) beats gray (absent)  
- Gray (absent) doesn't override anything

**How to approach:**
1. Loop through each letter in the guess
2. Find the keyboard key for that letter
3. Check what color it currently is
4. Only change it if the new color has higher priority

**Research tip:** Look at how `updateKeyboardKey()` works in the starter code

### 4.2 `processRowReveal(rowIndex, results)` - Celebration (5 points)

**Simple logic:**
- Check if ALL letters in the results array are 'correct'
- If so, trigger a celebration animation

**JavaScript tip:** Look up the `Array.every()` method

### 4.3 `showEndGameModal(won, targetWord)` - End Game (10 points)

**What to display:**
- Different messages for wins vs losses
- For wins: show how many guesses it took
- For losses: reveal the correct word
- Update game statistics

**Helper functions to use:**
- `updateStats(won)` - Updates win/loss statistics  
- `showModal(won, word, guesses)` - Actually displays the modal

### 4.4 `validateInput(key, currentGuess)` - Input Validation (5 points)

**Return true/false for:**
- Is the game already over? (Don't allow input)
- For letters: Is there room in the current guess?
- For enter: Is the guess complete?
- For backspace: Are there letters to remove?

---

## 🐛 Part 5: Debugging Strategies

### 5.1 Common Issues and How to Find Them

**"Nothing happens when I type"**
- Check: Is your `handleKeyPress` function being called?
- Check: Are you updating `currentGuess` correctly?
- Check: Are you calling `updateTileDisplay`?

**"Letters don't show up on screen"**
- Check: Is `getTile(row, col)` returning the right element?
- Check: Are you using the correct row and column numbers?
- Check: Look at the browser console for JavaScript errors

**"Word validation doesn't work"**
- Check: Are you calling `WordleWords.isValidWord()` correctly?
- Check: Is your guess the right length?
- Check: Are you converting to the right case (upper/lower)?

**"Colors are wrong"**
- Check: Is your `checkLetter` function returning the right values?
- Check: Are you calling `setTileState` with the right parameters?
- Check: Look at what states are available ('correct', 'present', 'absent')

### 5.2 Browser Developer Tools

**Console Tab:**
- See your `console.log` statements
- View JavaScript errors (red text)
- Test functions manually: `initializeGame()`

**Elements Tab:**
- Inspect the HTML structure
- See what classes are applied to tiles
- Check if your JavaScript is changing the DOM

**Network Tab:**
- Make sure all files are loading correctly

### 5.3 Systematic Testing

**Create a test plan:**
1. Can I type letters?
2. Does backspace work?
3. Does enter work with incomplete words?
4. Does enter work with invalid words?
5. Does enter work with valid words?
6. Do colors show up correctly?
7. Does the game end when I win?
8. Does the game end when I lose?

---

## 💡 Part 6: Learning Resources

### 6.1 JavaScript Concepts You'll Need

**Strings:**
- `string.length` - Get string length
- `string[index]` - Get character at position
- `string.slice(0, -1)` - Remove last character
- `string.includes(char)` - Check if string contains character
- `string.toUpperCase()` - Convert to uppercase

**Arrays:**
- `array[index]` - Get/set element at position
- `array.length` - Get array length
- `array.every(callback)` - Check if all elements match condition
- `for (let i = 0; i < array.length; i++)` - Loop through array

**DOM Manipulation:**
- `document.querySelector(selector)` - Find HTML element
- `element.textContent = text` - Set element text
- `element.classList.add(className)` - Add CSS class
- `element.classList.remove(className)` - Remove CSS class

**Conditionals:**
- `if (condition) { }` - Basic if statement
- `if (condition) { } else { }` - If-else
- `condition ? valueIfTrue : valueIfFalse` - Ternary operator

### 6.2 Wordle-Specific Logic

**Understanding the Game Rules:**
1. Players get 6 guesses
2. Each guess must be a valid 5-letter word
3. Green = correct letter in correct position
4. Yellow = correct letter in wrong position  
5. Gray = letter not in the word
6. Each letter in the target word can only "satisfy" one guess letter

**Research Real Wordle:**
- Play the actual game online
- Pay attention to how duplicate letters are handled
- Notice the keyboard color updates

---

## 🎯 Part 7: Step-by-Step Implementation Plan

### Week 1: Basic Input
1. Implement `initializeGame()` 
2. Get letter typing working in `handleKeyPress()`
3. Get backspace working
4. Test thoroughly before moving on

### Week 2: Core Game Logic  
1. Implement basic `submitGuess()` (without letter checking)
2. Add word validation
3. Implement simple `checkLetter()` (ignore duplicates for now)
4. Get colors showing up on tiles

### Week 3: Advanced Features
1. Fix duplicate letter handling in `checkLetter()`
2. Implement keyboard color updates
3. Add win/lose conditions
4. Implement end game modal

### Week 4: Polish and Testing
1. Add input validation
2. Test all edge cases
3. Clean up console.log statements
4. Final testing and debugging

---

## ❓ Part 8: When You're Stuck

### 8.1 Questions to Ask Yourself
1. What exactly is not working?
2. What did I expect to happen?
3. What actually happened?
4. What was the last thing that worked?
5. What did I change since then?

### 8.2 Debugging Process
1. **Isolate the problem:** Test one small piece at a time
2. **Add logging:** Use console.log to see what's happening
3. **Check the basics:** Are variables what you expect them to be?
4. **Read error messages:** The browser console often tells you exactly what's wrong
5. **Take breaks:** Sometimes stepping away helps you see the solution

### 8.3 Getting Help
**Before asking for help, prepare:**
- What specific function are you working on?
- What did you try?
- What error messages do you see?
- Can you reproduce the problem consistently?

**Good question:** "I'm working on handleKeyPress(). When I type a letter, nothing appears on screen. I added console.log and I can see the letter is being captured, but getTile() seems to return null. Here's my code..."

**Poor question:** "My code doesn't work. Can you fix it?"

---

## 🏆 Part 9: Success Strategies

### 9.1 Mindset
- **Start small:** Get one tiny piece working at a time
- **Expect bugs:** They're part of the learning process
- **Read carefully:** The comments and hints contain valuable information
- **Test constantly:** Don't write 50 lines and then test

### 9.2 Code Organization
- Keep your functions focused on one task
- Use meaningful variable names
- Add comments explaining your logic
- Remove console.log statements when features are working

### 9.3 Time Management
- Don't try to do everything in one sitting
- Take breaks when frustrated
- Start with easier functions and build confidence
- Save complex features (like duplicate letter handling) for last

---

## 📝 Final Notes

Remember: The goal isn't just to make the game work, but to **understand how it works**. Take time to understand each piece before moving to the next. The problem-solving skills you develop here will serve you well in all future programming projects.

Good luck, and remember: every expert was once a beginner who didn't give up! 🚀

---

*This guide focuses on teaching you HOW to think about the problems, not giving you the answers. Use it as a roadmap, but remember that the journey of figuring things out is where the real learning happens.* 