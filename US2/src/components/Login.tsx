import { useState } from 'react';
import { User } from '../interfaces/User';
import { authenticate } from '../utils/auth';

// Props: recibe función para avisar al padre que el login fue exitoso
interface LoginProps {
  onLogin: (user: User) => void;
}

function Login({ onLogin }: LoginProps) {
  // Estado para los campos del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Estado para el mensaje de error o éxito
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  // Se ejecuta cuando el usuario hace clic en Ingresar
  function handleLogin() {
    // Llamamos a la función del módulo auth.ts
    const user = authenticate(email, password);

    if (user) {
      // Login exitoso
      setIsError(false);
      setMessage('Login exitoso. Bienvenido, ' + user.fullName);
      // Avisamos al componente padre (App) quién inició sesión
      setTimeout(() => onLogin(user), 800);
    } else {
      // Credenciales incorrectas
      setIsError(true);
      setMessage(' Email o contraseña incorrectos');
    }
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>🔐 Iniciar sesión</h2>

        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type='password'
          placeholder='Contraseña'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleLogin} style={styles.button}>
          Ingresar
        </button>

        {/* Mensaje de éxito o error */}
        {message && (
          <p style={{ ...styles.message, color: isError ? '#dc2626' : '#16a34a' }}>
            {message}
          </p>
        )}

        {/* Ayuda para pruebas */}
        <div style={styles.hint}>
          <p>Usuarios de prueba:</p>
          <p>ana@email.com / 1234 (admin)</p>
          <p>carlos@email.com / 5678 (customer)</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f3f4f6' },
  card: { background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', width: '360px', display: 'flex', flexDirection: 'column' as const, gap: '12px' },
  title: { fontSize: '22px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' },
  input: { padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', outline: 'none' },
  button: { padding: '12px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontSize: '15px', cursor: 'pointer', fontWeight: 'bold' },
  message: { fontSize: '13px', textAlign: 'center' as const },
  hint: { marginTop: '12px', background: '#f9fafb', padding: '12px', borderRadius: '8px', fontSize: '12px', color: '#6b7280', lineHeight: '1.8' },
};

export default Login;