# 🖱️ NEXUS CURSOR GUIDE

## Multi-Color Custom Cursors

The landing page now features **6 different custom cursor styles** with neon colors and glow effects. Each cursor is dynamically applied based on the element type.

### Cursor Color Map

| Element Type | Cursor Color | Style | When Active |
|--------------|--------------|-------|------------|
| **Default/Body** | Neon Cyan (#00d9ff) | Circular reticle with rings | Throughout page |
| **Links** | Neon Green (#00ff41) | Crosshair with center dot | Hover over links (a tags) |
| **Buttons** | Neon Pink (#ff006e) | Arrow pointer | Hover over buttons (.btn) |
| **Feature Cards** | Neon Cyan (#00d9ff) | 3D diamond shape | Hover over feature cards |
| **Input Fields** | Neon Pink (#ff006e) | Text input cursor | Click on input/textarea |
| **Terminal** | Neon Green (#00ff41) | Computer screen icon | Hover over terminal window |

## Cursor Characteristics

### Enhanced Visual Effects
✨ Each cursor includes:
- **Glow Filter** - Soft gaussian blur for neon effect
- **Multi-Layer Design** - Multiple circles/elements for depth
- **SVG-Based** - Embedded in CSS for instant loading (no HTTP requests)
- **High DPI Support** - Works on all screen densities

## Focus/Blur Management

### Automatic Cursor Restoration
The page includes intelligent cursor management:

1. **On Page Focus** - Custom cursor automatically restores when you return to the page
2. **On Page Blur** - System detects when browser UI is active (clicking address bar, etc.)
3. **On Mouse Move** - Cursor states are continuously verified and reapplied
4. **Console Notifications** - Cursor manager logs status messages (check browser console)

### What About Browser UI Clicks?
When you click the browser's address bar, back button, or other browser UI elements:
- This is **normal browser behavior** - the browser's native cursor briefly appears
- **The custom cursor automatically returns** when you interact with the page again
- The page's focus/blur listener tracks this and restores the custom cursor

## How to Test Cursor Colors

1. **Default Cursor** - Move mouse over normal text (Neon Cyan)
2. **Link Cursor** - Hover over navigation links (Neon Green Crosshair)
3. **Button Cursor** - Hover over "▶ ACCESS SYSTEM" button (Neon Pink Arrow)
4. **Card Cursor** - Hover over feature cards (Neon Cyan Diamond)
5. **Terminal Cursor** - Hover over terminal window (Green Computer Screen)
6. **Text Cursor** - Click on input fields (Neon Pink)

## Browser Compatibility

✅ Works on:
- Chrome/Edge (88+)
- Firefox (87+)
- Safari (14+)
- Opera (74+)

⚠️ Note: Custom cursors load instantly (embedded SVG) - no external files needed

## Keyboard Shortcut Integration

Cursor effects work seamlessly with all keyboard shortcuts:
- Ctrl+M, Ctrl+G, Ctrl+S, Ctrl+N, Ctrl+R, Ctrl+Shift+C
- Help menu shows all shortcuts with custom purple cursor

## Advanced Features

### Dynamic Cursor Management (JavaScript)
```javascript
// Automatically restores cursor on page focus
window.addEventListener('focus', () => { 
    // Custom cyan cursor restored
});

// Detects when browser UI takes focus
window.addEventListener('blur', () => { 
    // Logs system message
});
```

### Console Messages
Open browser console (F12) to see cursor manager logs:
- `[CURSOR MANAGER] Active - Multiple color modes enabled`
- Status of each cursor type
- Focus/blur notifications

---

**Current Status**: ✅ All cursor types operational  
**Total Cursor Styles**: 6 dynamic variants  
**Glow Effects**: Enabled on all custom cursors
