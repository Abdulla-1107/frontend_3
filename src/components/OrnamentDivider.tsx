export function OrnamentDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-accent/60 sm:w-28" />
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        className="text-accent shrink-0"
        aria-hidden="true"
      >
        <path
          d="M17 2l4.2 8.5L30.5 12l-6.7 6.6L25.4 28 17 23.4 8.6 28l1.6-9.4L3.5 12l9.3-1.5L17 2z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <circle cx="17" cy="17" r="3" fill="currentColor" />
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-accent/60 sm:w-28" />
    </div>
  );
}
