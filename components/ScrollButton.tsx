'use client';

interface ScrollButtonProps {
  targetId: string;
  className?: string;
  children: React.ReactNode;
}

export default function ScrollButton({ targetId, className, children }: ScrollButtonProps) {
  return (
    <button
      onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })}
      className={className}
    >
      {children}
    </button>
  );
}
