import Button from './components/Button';
import Badge from './components/Badge';
import Card from './components/Card';

// Datos de ejemplo para mostrar las cards
const exampleCards = [
  {
    id: 1,
    title: 'Laptop Pro 15',
    type: 'white' as const,
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
    badgeLabel: 'Disponible',
    badgeStatus: 'success' as const,
    badgeIcon: '✅',
    buttonText: 'Agregar al carrito',
    buttonVariant: 'primary' as const,
  },
  {
    id: 2,
    title: 'Audífonos Sony ANC',
    type: 'black' as const,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    badgeLabel: 'Agotado',
    badgeStatus: 'error' as const,
    badgeIcon: '❌',
    buttonText: 'Avisar cuando llegue',
    buttonVariant: 'secondary' as const,
  },
  {
    id: 3,
    title: 'Zapatillas Nike Running',
    type: 'green' as const,
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    badgeLabel: 'Oferta',
    badgeStatus: 'warning' as const,
    badgeIcon: '🔥',
    buttonText: 'Comprar ahora',
    buttonVariant: 'danger' as const,
  },
  {
    id: 4,
    title: 'Cafetera Nespresso',
    type: 'white' as const,
    imageUrl: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=400',
    badgeLabel: 'Nuevo',
    badgeStatus: 'info' as const,
    badgeIcon: '🆕',
    buttonText: 'Ver detalles',
    buttonVariant: 'secondary' as const,
  },
];

function US3App() {
  return (
    <div style={styles.wrapper}>
      <header style={styles.header}>
        <h1 style={styles.title}>🧩 US3 — Componentes reutilizables</h1>
        <p style={styles.subtitle}>Button · Badge · Card con TypeScript</p>
      </header>

      {/* Grilla de Cards */}
      <div style={styles.grid}>
        {exampleCards.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            type={item.type}
            imageUrl={item.imageUrl}
            footer={
              <Button
                text={item.buttonText}
                variant={item.buttonVariant}
                size='md'
                onClick={() => alert('Clic en: ' + item.title)}
              />
            }
          >
            {/* Badge dentro del children de la Card */}
            <Badge
              label={item.badgeLabel}
              status={item.badgeStatus}
              icon={item.badgeIcon}
            />
          </Card>
        ))}
      </div>

      {/* Sección de demo de variantes */}
      <section style={styles.demo}>
        <h2 style={styles.demoTitle}>🎛 Demo de variantes</h2>

        <div style={styles.row}>
          <Button text='Primary' variant='primary' leftIcon='🚀' />
          <Button text='Secondary' variant='secondary' />
          <Button text='Danger' variant='danger' rightIcon='🗑' />
          <Button text='Cargando' variant='primary' loading />
          <Button text='Desactivado' variant='primary' disabled />
        </div>

        <div style={styles.row}>
          <Badge label='Success' status='success' icon='✅' />
          <Badge label='Warning' status='warning' icon='⚠️' />
          <Badge label='Info' status='info' icon='ℹ️' />
          <Badge label='Error' status='error' icon='❌' />
          <Badge label='Neutral' status='neutral' />
        </div>
      </section>
    </div>
  );
}

const styles = {
  wrapper:   { background: '#f3f4f6', minHeight: '100vh', padding: '32px 24px', fontFamily: 'sans-serif' },
  header:    { textAlign: 'center' as const, marginBottom: '40px' },
  title:     { fontSize: '28px', fontWeight: 'bold', color: '#111827' },
  subtitle:  { color: '#6b7280', marginTop: '6px' },
  grid:      { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px', maxWidth: '1100px', margin: '0 auto' },
  demo:      { maxWidth: '1100px', margin: '48px auto 0', background: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' },
  demoTitle: { fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '20px' },
  row:       { display: 'flex', gap: '12px', flexWrap: 'wrap' as const, marginBottom: '16px', alignItems: 'center' },
};

export default US3App;