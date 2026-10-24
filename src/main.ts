// @deno-types="./asset-url.d.ts"
import warmBgUrl from "./assets/warm-bg.jpg?no-inline";
// @deno-types="./asset-url.d.ts"
import coldBgUrl from "./assets/cold-bg.jpg?no-inline";

const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// Keep the prototype inline for this feature-branch assignment.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute(
  "aria-label",
  "A neutral face with contrasting warm and cold backgrounds",
);

// Warm background image.
// File: src/assets/warm-bg.jpg
// Source: https://www.magnific.com/free-ai-image/3d-cartoon-coffee-cup_273781494.htm
// Creator: Original creator has not been verified.
// License/permission: Verify the asset-specific license on the source page.
// Magnific free-license resources require attribution.
const warmBackground = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "image",
);
warmBackground.setAttribute("href", warmBgUrl);
warmBackground.setAttribute("x", "0");
warmBackground.setAttribute("y", "0");
warmBackground.setAttribute("width", "100");
warmBackground.setAttribute("height", "200");
warmBackground.setAttribute("preserveAspectRatio", "xMidYMid slice");
face.append(warmBackground);

// Cold background image.
// File: src/assets/cold-bg.jpg
// Source: https://www.magnific.com/free-vector/frightening-halloween-realistic-background_3824490.htm
// Creator: Original creator has not been verified.
// License/permission: Verify the asset-specific license on the source page.
// Magnific free-license resources require attribution.
const coldBackground = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "image",
);
coldBackground.setAttribute("href", coldBgUrl);
coldBackground.setAttribute("x", "100");
coldBackground.setAttribute("y", "0");
coldBackground.setAttribute("width", "100");
coldBackground.setAttribute("height", "200");
coldBackground.setAttribute("preserveAspectRatio", "xMidYMid slice");
face.append(coldBackground);

// Draw the face on top of both background images.
const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
head.setAttribute("cx", "100");
head.setAttribute("cy", "100");
head.setAttribute("rx", "78");
head.setAttribute("ry", "86");
head.setAttribute("fill", "#f3cf87");
head.setAttribute("stroke", "#302c29");
head.setAttribute("stroke-width", "4");
face.append(head);

const leftEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
leftEye.setAttribute("cx", "72");
leftEye.setAttribute("cy", "82");
leftEye.setAttribute("rx", "6");
leftEye.setAttribute("ry", "9");
leftEye.setAttribute("fill", "#302c29");
face.append(leftEye);

const rightEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
rightEye.setAttribute("cx", "128");
rightEye.setAttribute("cy", "82");
rightEye.setAttribute("rx", "6");
rightEye.setAttribute("ry", "9");
rightEye.setAttribute("fill", "#302c29");
face.append(rightEye);

const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
nose.setAttribute("x1", "100");
nose.setAttribute("y1", "96");
nose.setAttribute("x2", "96");
nose.setAttribute("y2", "112");
nose.setAttribute("stroke", "#302c29");
nose.setAttribute("stroke-width", "4");
nose.setAttribute("stroke-linecap", "round");
face.append(nose);

const mouth = document.createElementNS("http://www.w3.org/2000/svg", "line");
mouth.setAttribute("x1", "75");
mouth.setAttribute("y1", "137");
mouth.setAttribute("x2", "125");
mouth.setAttribute("y2", "137");
mouth.setAttribute("stroke", "#302c29");
mouth.setAttribute("stroke-width", "4");
mouth.setAttribute("stroke-linecap", "round");
face.append(mouth);

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
