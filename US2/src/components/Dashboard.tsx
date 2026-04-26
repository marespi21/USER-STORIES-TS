import { User } from '../interfaces/User';
import { UserStore } from '../utils/UserStore';

interface DashboardProps {
  user: User;          // usuario que inició sesión
  onLogout: () => void; // función para cerrar sesión
}

// Creamos una instancia del CRUD fuera del componente
const store = new UserStore();

function Dashboard({ user, onLogout }: DashboardProps) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>👋 Hola, {user.fullName}</h2>
          <button onClick={onLogout} style={styles.logoutBtn}>Cerrar sesión</button>
        </div>

        <div style={styles.info}>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Rol:</strong> {user.role}</p>
          <p><strong>Estado:</strong> {user.isActive ? '✅ Activo' : '❌ Inactivo'}</p>
        </div>

        <div style={styles.section}>
          <h3>🧪 Prueba el CRUD en consola</h3>
          <p style={styles.hint}>Abre DevTools → Consola y haz clic en los botones:</p>
          <div style={styles.btnGroup}>
            <button style={styles.crudBtn} onClick={() => store.list()}>
              GET — Listar usuarios
            </button>
            <button style={styles.crudBtn} onClick={() => store.findByName('Ana')}>
              GET — Buscar 'Ana'
            </button>
            <button style={styles.crudBtn} onClick={() =>
              store.create({ fullName: 'Nuevo User', email: 'nuevo@email.com', password: '9999' })
            }>
              POST — Crear usuario
            </button>
            <button style={styles.crudBtn} onClick={() => store.update(1, { fullName: 'Ana Actualizada' })}>
              PATCH — Actualizar id:1
            </button>
            <button style={styles.crudBtn} onClick={() => store.remove(2)}>
              DELETE — Eliminar id:2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: { minHeight: '100vh', background: '#f3f4f6', padding: '40px 20px' },
  card: { maxWidth: '600px', margin: '0 auto', background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' },
  title: { fontSize: '22px', color: '#111827' },
  logoutBtn: { background: '#fee2e2', color: '#dc2626', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' },
  info: { background: '#f9fafb', padding: '16px', borderRadius: '8px', lineHeight: '2', marginBottom: '24px' },
  section: { borderTop: '1px solid #e5e7eb', paddingTop: '20px' },
  hint: { color: '#6b7280', fontSize: '13px', margin: '8px 0 16px' },
  btnGroup: { display: 'flex', flexDirection: 'column' as const, gap: '10px' },
  crudBtn: { padding: '10px 16px', background: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe', borderRadius: '8px', cursor: 'pointer', textAlign: 'left' as const, fontSize: '13px' },
};

export default Dashboard;