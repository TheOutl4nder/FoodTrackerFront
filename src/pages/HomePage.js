import React, { useState } from "react";
import Card from "../components/Card/Card";
import CardContainer from "../components/CardContainer/CardContainer";

export default function HomePage() {
  const [isLoading, setisLoading] = useState(false);
  const devices = [
    {
      logo: "https://1000marcas.net/wp-content/uploads/2021/05/Chilis-Logo-2002.png",
      name: "Chillis",
      stars: 5,
      images: [
        {
          url: "https://i.insider.com/59b6ea40609c301b008b6799?width=791&format=jpeg",
        },
        {
          url: "https://i.insider.com/59b6ea40609c301b008b6799?width=791&format=jpeg",
        },
      ],
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/220px-McDonald%27s_logo.svg.png",
      name: "McDonalds",
      stars: 3,
      images: [
        {
          url: "https://i.insider.com/59b6ea40609c301b008b6799?width=791&format=jpeg",
        },
        {
          url: "https://i.insider.com/59b6ea40609c301b008b6799?width=791&format=jpeg",
        },
      ],
    },
    {
      logo: "https://logos-marcas.com/wp-content/uploads/2020/08/Burger-King-Logotipo-1999-presente.jpg",
      name: "Burger King",
      stars: 4,
      images: [
        {
          url: "https://i.insider.com/59b6ea40609c301b008b6799?width=791&format=jpeg",
        },
        {
          url: "https://i.insider.com/59b6ea40609c301b008b6799?width=791&format=jpeg",
        },
      ],
    },
  ];
  return (
    <div>
      HomePage
      <CardContainer isLoading={isLoading}>
        {devices.map((device) => (
          <Card key={device._id} element={device}></Card>
        ))}
      </CardContainer>
    </div>
  );
}
