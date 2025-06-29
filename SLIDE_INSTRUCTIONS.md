## Slide Creation Guidelines

### 1. One Slide per Screen
- Each slide must occupy **exactly one screen height**.
- Ensure that all content fits within the viewport without scrolling.
- **Target height: ~80vh to account for browser UI and navigation**

### 2. Slide Counter
- Every time a new slide is created, **increment the slide counter**.
- Append the slide number to the slide visually or programmatically to keep track.
- **Display format: "Slide X of Y" in corner or navigation**

### 3. Folder Structure
- Each class should have its own folder under the `components/` directory.
- Example structure:
```
components/
└── Class1/
    ├── Class1Slides.js
    all other related components
```

### 4. Interactivity
- **All slides must be interactive**.
- Use UI elements like:
  - Buttons  
  - Inputs  
  - Hover effects  
  - Draggable/resizable items  
  - Any other engaging UI patterns
- Avoid purely static content unless part of an interactive flow.

### 5. Reference File
- Use `class1slides.js` as the baseline reference for structure, layout, and logic.

### 6. Teaching Method
- **Each slide's content must teach the material in the easiest and most memorable way possible.**
- Use:
  - Visual aids or diagrams  
  - Analogies or metaphors  
  - Step-by-step breakdowns  
  - Real-world examples  
- Prioritize clarity, simplicity, and retention.

---

## Additional Best Practices

### 7. Content Density
- **Maximum 3-5 key concepts per slide**
- Use progressive disclosure (reveal information step by step)
- Break complex topics into multiple slides rather than cramming

### 8. Visual Hierarchy
- **Clear heading structure**: Main title → Section titles → Content
- Use consistent font sizes and spacing
- Implement visual emphasis (colors, icons, animations) for important points

### 9. Navigation & Flow
- **Smooth transitions** between slides
- **Progress indicators** showing current position in presentation
- **Keyboard navigation** support (arrow keys, space bar)
- Clear "Next/Previous" visual cues

### 10. Responsive Design
- **Mobile-friendly layouts** that work on tablets and phones
- **Flexible grid systems** that adapt to different screen sizes
- Test on multiple devices and screen resolutions

### 11. Accessibility
- **High contrast** color schemes for readability
- **Alt text** for images and icons
- **Keyboard-only navigation** support
- **Screen reader friendly** semantic HTML

### 12. Animation Guidelines
- **Purposeful animations** that enhance learning (not distract)
- **Consistent timing**: 300-500ms for UI transitions, 1-2s for content reveals
- **Reduced motion support** for users with motion sensitivity
- Use animations to guide attention to important content

### 13. Code Examples
- **Syntax highlighting** for all code blocks
- **Copy-to-clipboard** functionality
- **Live/interactive** code examples when possible
- **Progressive complexity**: start simple, build up

### 14. Performance
- **Optimize images** and animations for smooth performance
- **Lazy load** content that's not immediately visible
- **Minimal bundle size** - avoid unnecessary dependencies
- Target 60fps animations and smooth scrolling

### 15. Content Guidelines
- **Active voice** in explanations
- **Conversational tone** while maintaining professionalism
- **Practical examples** that students can relate to
- **Clear learning objectives** stated or implied for each slide

### 16. Testing Checklist
Before finalizing slides, verify:
- [ ] Fits in single screen height on common resolutions (1920x1080, 1366x768)
- [ ] All interactive elements work as expected
- [ ] Text is readable at normal viewing distances
- [ ] Animations enhance rather than distract from content
- [ ] Content teaches the concept clearly
- [ ] Slide flows logically to the next topic