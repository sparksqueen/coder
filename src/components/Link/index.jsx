import { styles } from "./styles";
import React, { useEffect, useState } from "react";

const Categorias = [
  { catId: 1, nombre: "Home", ruta: "/" },
  { catId: 2, nombre: "Nosotros", ruta: "/nosotros" },
  { catId: 3, nombre: "Contacto", ruta: "/contacto" },
];

const Link = () => {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    const promesaCat = new Promise((res, rej) => {
      res(Categorias);
    });

    promesaCat.then((res) => setCategorias(res));
  }, []);
  console.log(categorias);
  return (
    <>
      {categorias.map((categoria) => {
        return (
          <a key={categoria.catId} href={categoria.ruta} style={styles.link}>
            <li>{categoria.nombre}</li>
          </a>
        );
      })}
    </>
  );
};

export default Link;
