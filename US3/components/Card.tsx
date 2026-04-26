import React from 'react';

// ---- Props del Card ----
interface CardProps {
  // Obligatorias
  title: string;
  type: 'green' | 'white' | 'black';

  // Opcionales
  imageUrl?: string;               // imagen superior
  footer?: React.ReactNode;        // ej: un Button
  children?: React.ReactNode;      // contenido interior (Badge, texto, etc.)
}

function Card({
  title,
  type,
  imageUrl,
  footer,
  children,
}: CardProps) {

  // Estilos del fondo según type
  const typeStyles: Record<string, React.CSSProperties> = {
    green: { background: '#f0fdf4', borderColor: '#86efac' },
    white: { background: '#ffffff', borderColor: '#e5e7eb' },
    black: { background: '#111827', borderColor: '#374151', color: 'white' },
  };

  // Color del título: blanco si es black, oscuro si no
  const titleColor = type === 'black' ? '#f9fafb' : '#111827';

  return (
    <div
      style={{
        ...typeStyles[type],
        border: '1px solid',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Imagen opcional en la parte superior */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          style={{ width: '100%', height: '180px', objectFit: 'cover' }}
        />
      )}

      {/* Cuerpo de la card */}
      <div style={{ padding: '20px', flexGrow: 1 }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: titleColor, marginBottom: '12px' }}>
          {title}
        </h3>

        {/* Aquí van los Badge u otro contenido pasado como children */}
        {children}
      </div>

      {/* Footer opcional — ideal para poner un Button */}
      {footer && (
        <div style={{
          padding: '12px 20px',
          borderTop: '1px solid',
          borderColor: typeStyles[type].borderColor,
        }}>
          {footer}
        </div>
      )}
    </div>
  );
}

export default Card;