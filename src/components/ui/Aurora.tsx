export function Aurora({ variant = "warm" }: { variant?: "warm" | "wine" | "soft" }) {
  return (
    <div className="aurora" aria-hidden>
      <div
        className={`aurora-blob aurora-blob--gold ${variant === "soft" ? "opacity-40" : ""}`}
      />
      <div
        className={`aurora-blob aurora-blob--wine ${variant === "warm" ? "" : "opacity-50"}`}
      />
      <div className="aurora-blob aurora-blob--ember" />
    </div>
  );
}
