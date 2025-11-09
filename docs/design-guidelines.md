# Refactoring UI — Complete Design Guidelines

## 1. Starting from Scratch

- Start with a feature, not a layout. Begin with a real screen or interaction, not the app shell.
- Detail comes later. Sketch the rough structure and hierarchy before refining visuals.
- Don’t design too much. Focus on a single piece and make it solid before expanding.
- Choose a personality. Decide on tone—playful, corporate, minimal, etc.—to drive type and color.
- Limit your choices. Constrain fonts, colors, and sizes to build coherence.

## 2. Hierarchy is Everything

- Not all elements are equal. Assign visual importance intentionally.
- Size isn’t everything. Weight, contrast, and placement often do more than size.
- Don’t use gray text on colored backgrounds. Low contrast reduces readability.
- Emphasize by de-emphasizing. Create focus through restraint and empty space.
- Labels are a last resort. Use proximity and context before adding text.
- Separate visual hierarchy from document hierarchy. Headings and semantics aren’t the same as what draws the eye.
- Balance weight and contrast. Consistent contrast levels make interfaces feel intentional.

## 3. Layout and Spacing

- Start with too much white space. Easier to tighten later.
- Establish a spacing and sizing system. Use a consistent scale (e.g., multiples of 4px).
- You don’t have to fill the whole screen. Leave breathing room; center or column-align elements for balance.
- Grids are overrated. Don’t let 12-column systems dictate every decision.
- Don’t shrink an element until necessary. Fixed widths are often more harmonious.

## 4. Typography

- Establish a type scale. Base text on a consistent modular scale.
- Use good fonts. Favor legible sans-serifs with many weights; system stacks are safe.
- Ignore fonts with few weights. They limit flexibility.
- Optimize for legibility. Choose x-height and letter spacing for body vs. headings.
- Trust the crowd. Use well-tested typefaces popular among designers.
- Line height and length matter. Keep 45–75 characters per line for reading comfort.
- Avoid centered body text. Centering works for headlines only.

## 5. Color

- Define your shades up front. Create scales from darkest (900) to lightest (100).
- Use about nine shades per color. Provides flexibility without chaos.
- Adjust saturation with lightness. Keep extremes from looking washed out.
- Trust your eyes. Math won’t produce perfect harmony.
- Limit palette size. Too many shades undermine consistency.
- Greys count as colors. They should have hue bias, not pure neutrality.

## 6. Light and Shadow

- Emulate a light source. Simulate elevation with logical shadow placement.
- Use shadows to convey elevation. Define a small set (about 5) for consistency.
- Shadows can have two parts. Combine a large diffuse shadow and a small dark one near the edge for realism.
- Even flat designs can have depth. Convey distance via color and overlap, not just blur.
- Overlap elements to create layers. Offset cards and imagery for tactile dimension.

## 7. Working with Images

- Use good photos. Quality imagery makes or breaks design; hire or use curated stock.
- Ensure consistent text contrast. Overlay or blur backgrounds when text sits atop images.
- Everything has an intended size. Resize icons or logos manually; don’t scale them arbitrarily.
- Beware user-uploaded content. Enforce aspect ratios, cropping, and subtle inner shadows to control visual chaos.

## 8. Finishing Touches

- Supercharge the defaults. Enhance checkboxes, bullets, or links with small visual flourishes.
- Add color with accent borders. A thin bar or edge color can add vibrancy with minimal effort.
- Decorate backgrounds. Use soft gradients, repeating patterns, or geometric shapes.
- Don’t overlook empty states. Treat them as first impressions; guide users with illustration and CTA.
- Use fewer borders. Rely on spacing and contrast for separation.

## 9. Process and Practice

- Systematize everything. Define tokens for color, type, spacing, and shadow.
- Refine by iteration. Cycle between building and improving.
- Design pessimistically. Handle edge cases and empty screens early.
- Study real-world designs. Reverse-engineer patterns you admire.
- Work in grayscale first. Ensure hierarchy before adding color.
