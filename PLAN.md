# Portrait Design Plan

## A — Hearts

- Create a portrait decorated with more than 100 visible heart shapes.
- Arrange small hearts around the character's cheeks and in a halo surrounding the head.
- Use different heart sizes to create a playful, romantic, and cheerful appearance.

## B — Backgrounds

- Use two distinct background images behind the same character face.
- The first image will have a warm pink background with soft decorative patterns to create a cheerful and friendly mood.
- The second image will have a cool blue-purple background with subtle star patterns to create a calm and mysterious mood.
- Create both background images myself so their styles match the portrait.

## C — Gradient and Curves

- Apply a gradient transitioning from warm yellow to orange across the character's head.
- Use a Bézier curve to draw a smooth, curved smile.
- The warm colors and curved smile will make the character appear friendly and approachable.

## Selection Criterion

Choose the alternative that communicates its mood most clearly and remains recognizable at small sizes.

## Exploration Results

### A — Hearts — Explored

Implemented on branch A. Added 120 pink heart decorations around the portrait. The result follows the original plan by using many hearts to create a playful, cheerful appearance.

### B — Backgrounds — Explored

Implemented on branch B. Used two external background images: a warm coffee-cup image and a frightening Halloween image. This differs from the original plan to create the backgrounds myself.

### C — Gradient and Curves — Explored

Implemented on branch C. Added a warm-yellow-to-pink gradient to the head and a quadratic Bézier curve for the smile. The result follows the original plan, with pink replacing the planned orange in the gradient.

## Decision — C: Gradient and Curved Smile

I chose **C — Gradient and Curves** because the warm-yellow-to-pink gradient and curved smile communicate a friendly, approachable mood. Using the selection criterion, this design has a clear expression and remains recognizable at small sizes. Compared with A's many heart decorations and B's contrasting background images, C keeps the focus on the character's face while still creating visual interest.

The chosen expression is a warm-to-pink gradient on the head, combined with a smooth quadratic Bézier curve for the smile. The implementation is on branch `C`, rebased onto `main`, and uses `buildFace()` to construct the portrait.

The alternatives remain available on their respective branches: **A — Hearts** and **B — Backgrounds**.
