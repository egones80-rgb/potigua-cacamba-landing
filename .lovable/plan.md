# Plan - Hero Section Replacement: Dumpster with Falling Debris Animation

Replace the current truck image in the Hero section with a realistic dumpster composition featuring an organic animation of construction materials falling into it.

## User Review Required

> [!IMPORTANT]
> - The animation uses SVG-based debris (concrete, bricks, wood) to ensure high performance and sharp visuals.
> - The animation respects `prefers-reduced-motion` and will be disabled if the user has that setting enabled.
> - The dumpster image will be one of the real photos provided (or a high-quality stylized version that fits the industrial theme).

## Proposed Changes

### Assets & Utilities
- Create `src/components/HeroAnimation.tsx` to handle the falling debris logic.
- Define SVG fragments for: concrete, brick, block, stone, wood, mortar.

### Components
#### `HeroAnimation`
- Implement a continuous loop using `Framer Motion`.
- Spawn batches of 3-6 items every ~2-3 seconds.
- Randomize:
    - Initial `x` position (constrained above the dumpster).
    - Drop `y` distance.
    - Rotation (0 to 360+ deg).
    - Horizontal sway (organic path).
    - Scale (slight variation).
    - Velocity and delay.
- Ensure items "disappear" once they reach the vertical level of the dumpster's opening.

#### `src/routes/index.tsx`
- Replace the current `truckImg` with the new animated composition.
- Wrap the dumpster image and the `HeroAnimation` component in a relative container.

## Technical Details

- **Animation Engine**: `framer-motion` (standard in the project).
- **Responsiveness**:
    - Desktop: Full batch size (3-6 items).
    - Mobile (< 768px): Reduced batch size (2-3 items) and smaller debris.
- **Performance**: Use `AnimatePresence` or simple mapping with keys to manage debris lifecycle without memory leaks.
- **Visuals**: Debris will be colored in shades of grey, terracotta, and brown to look realistic.

```text
Structure:
<div class="relative">
  <HeroAnimation /> <!-- Absolute layer above image -->
  <img src="cacamba-laranja.png" />
</div>
```
