import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Users.scss";

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [err, setErr] = useState("");

  useEffect(() => {
   loadData();
  }, []);

interface User {
  id: number;
  name: string;
}

  const loadData = async () => {

        fetch("https://jsonplaceholder.typicode.com/users").then(res => {

            if (!res.ok){
                setErr("Error en la petición")
                throw new Error("Error en la petición")
            };
            return res.json();

        }).then(data => { 
            setUsers(data)
        })

    }

  if (err) return <div className="empty">{err}</div>;
  if (!users) return <div className="empty">Cargando usuarios…</div>;

  return (
    <div className="users-page">
      <div className="users-grid">
        {users.map(u => (
          <article key={u.id} className="user-card">
            <h3 className="user-name">{u.name}</h3>
            <div className="user-card__action">
              <Link to={`/users/${u.id}`} className="button">Ver más</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}