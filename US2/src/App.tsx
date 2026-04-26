import { useState } from "react";
import { User } from "./interfaces/User";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  // null = no hay sesión, User = hay sesión activa
  const [loggedUser, setLoggedUser] = useState<User | null>(null);

  // Si hay usuario logueado → Dashboard, si no → Login
  if (loggedUser) {
    return (
      <Dashboard
        user={loggedUser}
        onLogout={() => setLoggedUser(null)}
      />
    );
  }

  return <Login onLogin={(user) => setLoggedUser(user)} />;
}

export default App;