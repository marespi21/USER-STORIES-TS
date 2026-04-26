import React from 'react';

// ---- Props del Badge ----
interface BadgeProps {
  label: string;   // obligatoria: texto del badge
  status?: 'success' | 'warning' | 'info' | 'error' | 'neutral';  // color
  icon?: React.ReactNode;  // emoji o ícono opcional
}

function Badge({
  label,
  status = 'neutral',  // default si no llega status
  icon,
}: BadgeProps) {

  // Color de fondo y texto según status
  const statusStyles: Record<string, React.CSSProperties> = {
    success: { background: '#d1fae5', color: '#065f46' },
    warning: { background: '#fef9c3', color: '#854d0e' },
    info:    { background: '#dbeafe', color: '#1e40af' },
    error:   { background: '#fee2e2', color: '#991b1b' },
    neutral: { background: '#f3f4f6', color: '#374151' },
  };

  return (
    <span
      style={{
        ...statusStyles[status],
        padding: '3px 10px',
        borderRadius: '99px',       // forma de píldora
        fontSize: '12px',
        fontWeight: 'bold',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
      }}
    >
      {/* Ícono opcional */}
      {icon && <span>{icon}</span>}
      {label}
    </span>
  );
}

export default Badge;