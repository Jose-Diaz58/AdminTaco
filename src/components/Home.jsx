import React from "react";

function Home(){
  const tacoPastor = {
  nombre: "Taco al Pastor",
  id: 1,
  precio: 15,
  categoria: "Tacos",
  icono: "Pendiente xd",
};
const tacoBarbacoa = {
  nombre: "Taco de Barbacoa",
  id: 2,
  precio: 15,
  categoria: "Tacos",
  icono: "Pendiente xd",
};

const tacoVegetariano = {
  nombre: "Taco Vegetariano",
  id: 3,
  precio: 15,
  categoria: "Tacos",
  icono: "Pendiente xd",
};
const tacoCarnita = {
  nombre: "Taco de Carnita",
  id: 4,
  precio: 15,
  categoria: "Tacos",
  icono: "Pendiente xd",
};
const tacoBistec = {
  nombre: "Taco de Bistec",
  id: 5,
  precio: 15,
  categoria: "Tacos",
  icono: "Pendiente xd",
};
const tacoSuadero = {
  nombre: "Taco de suadero",
  id: 6,
  precio: 15,
  categoria: "Tacos",
  icono: "Pendiente xd",
};

let menu = [tacoBarbacoa,tacoBistec,tacoCarnita, tacoPastor, tacoSuadero, tacoVegetariano];

  return (
    <div className="home-container">
      <h1>Menú de AdminTaco</h1>
      <ul>
        {menu.map((taco) => (
          <li key={taco.id}>
            {taco.nombre} - ${taco.precio}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;