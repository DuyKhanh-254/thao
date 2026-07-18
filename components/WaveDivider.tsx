export function WaveDivider({ flip = false, tone = "mist" }: { flip?: boolean; tone?: "mist" | "sand" | "ocean" }) {
  return (
    <div className={`wave-divider wave-divider--${tone}${flip ? " wave-divider--flip" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1440 132" preserveAspectRatio="none">
        <path d="M0 58c172 78 320-61 520-8 218 58 351 116 566 38 151-55 233-50 354-2v46H0z" />
        <path className="wave-divider__foam" d="M0 51c172 78 320-61 520-8 218 58 351 116 566 38 151-55 233-50 354-2" />
      </svg>
    </div>
  );
}
