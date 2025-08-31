


import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./UserDetail.scss";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: { city: string };
  company: { name: string };
}

export default function UserDetail() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [error, setErr] = useState("");

  useEffect(() => {
    loadData();
  }, [id]);

   const loadData = async () => {

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => {

            if (!res.ok){
                setErr("Error en la petición")
                throw new Error("Error en la petición")
            };
            return res.json();

        }).then(data => {
            setUser(data)
        })

    }

  if (error) return <div className="empty">{error}</div>;
  if (!user) return null;

  return (
    <div className="user-detail">
      <h2>{user.name}</h2>
      <div className="info">
        <p><strong>Pagina Web:</strong> {user.website}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Telefono:</strong> {user.phone}</p>
        <p><strong>Ciudad:</strong> {user.address.city}</p>
        <p><strong>Empresa:</strong> {user.company.name}</p>
      </div>
      <Link to="/users" className="button">← Volver</Link>
    </div>
  );
}