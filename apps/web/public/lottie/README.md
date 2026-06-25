# Lottie animations

Place `programming.json` here:

    apps/web/public/lottie/programming.json

Save the exact "Programming" Lottie JSON (the one provided) into that file —
**do not recolor it yourself**. The `ProgrammingLottie` component
(`src/components/ProgrammingLottie.tsx`) loads it at runtime and remaps the
original colors to the portfolio palette (charcoal, vanilla, brand orange,
muted) automatically, and lottie-web is pulled from a CDN so there is no extra
npm dependency.

It renders inside the **Front-End** card on the home page.
