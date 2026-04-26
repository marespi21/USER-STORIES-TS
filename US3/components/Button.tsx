import React from 'react';

// ---- Tipos de las props del Button ----
interface ButtonProps {
  // Obligatoria
  text: string;

  // Opcionales con valores por defecto
  variant?: 'primary' | 'secondary' | 'danger';  // estilo visual
  size?: 'sm' | 'md' | 'lg';                      // tamaño

  // Otras opcionales
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;   // ej: un emoji o ícono a la izquierda
  rightIcon?: React.ReactNode;  // ej: un emoji o ícono a la derecha
  onClick?: () => void;         // función al hacer clic
}

function Button({
  text,
  variant = 'primary',  // si no llega variant, usa 'primary'
  size = 'md',          // si no llega size, usa 'md'
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  onClick,
}: ButtonProps) {

  // Colores según variant
  const variantStyles: Record<string, React.CSSProperties> = {
    primary:   { background: '#2563eb', color: 'white', border: 'none' },
    secondary: { background: 'white', color: '#2563eb', border: '2px solid #2563eb' },
    danger:    { background: '#dc2626', color: 'white', border: 'none' },
  };

  // Tamaños según size
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { padding: '6px 12px', fontSize: '12px' },
    md: { padding: '10px 20px', fontSize: '14px' },
    lg: { padding: '14px 28px', fontSize: '16px' },
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      style={{
        ...variantStyles[variant],
        ...sizeStyles[size],
        borderRadius: '8px',
        cursor: disabled || loading ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        fontWeight: 'bold',
        transition: 'opacity 0.2s',
      }}
    >
      {/* Ícono izquierdo (opcional) */}
      {leftIcon && <span>{leftIcon}</span>}

      {/* Texto o indicador de carga */}
      {loading ? '⏳ Cargando...' : text}

      {/* Ícono derecho (opcional) */}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
}

export default Button;