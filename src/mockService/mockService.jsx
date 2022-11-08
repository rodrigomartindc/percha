const itemsDB = [
  {
    id: 1,
    title: "Riangblolong",
    description: "Fusce posuere felis sed lacus.",
    price: 3500,
    stock: 18,
    category: "shirts",
    thumbnail: "../../img/shirt1a.webp",
  },
  {
    id: 2,
    title: "Katunayaka",
    description: "Morbi a ipsum. Integer a nibh.",
    price: 1990,
    stock: 18,
    category: "shirts",
    thumbnail: "../../img/shirt2a.webp",
  },
  {
    id: 3,
    title: "Okuta",
    description: "Curabitur gravida nisi at nibh.",
    price: 3500,
    stock: 20,
    category: "shirts",
    thumbnail: "../../img/shirt3a.webp",
  },
  {
    id: 4,
    title: "União da Vitória",
    description: "Nulla suscipit ligula in lacus.",
    price: 1200,
    stock: 14,
    category: "shirts",
    thumbnail: "../../img/shirt4a.webp",
  },
  {
    id: 5,
    title: "Liuji",
    description: "Integer aliquet, massa id lobortis.",
    price: 1790,
    stock: 11,
    category: "hoodies",
    thumbnail: "../../img/hoodie1a.webp",
  },
  {
    id: 6,
    title: "Lopandino",
    description: "Nam nulla. Integer pede justo, lacinia.",
    price: 4500,
    stock: 10,
    category: "hoodies",
    thumbnail: "../../img/hoodie2a.webp",
  },
  {
    id: 7,
    title: "Bellevue",
    description: "Curabitur in libero ut massa volutpat.",
    price: 1990,
    stock: 18,
    category: "hoodies",
    thumbnail: "../../img/hoodie3a.webp",
  },
  {
    id: 8,
    title: "Rawawilis",
    description: "Nunc nisl. Morbi odio odio, elementum eu.",
    price: 3400,
    stock: 10,
    category: "hoodies",
    thumbnail: "../../img/hoodie4a.webp",
  },
  {
    id: 9,
    title: "Kamenka",
    description: "Quisque porta volutpat erat Fusce posuere.",
    price: 3400,
    stock: 11,
    category: "pants",
    thumbnail: "../../img/pant1a.webp",
  },
  {
    id: 10,
    title: "Menol",
    description: "In sagittis dui vel nisl luctus et ultrices.",
    price: 3400,
    stock: 12,
    category: "pants",
    thumbnail: "../../img/pant2a.webp",
  },
  {
    id: 11,
    title: "Qingshan",
    description: "Vestibulum ante ipsum primis in faucibus orci.",
    price: 1890,
    stock: 14,
    category: "pants",
    thumbnail: "../../img/pant3a.webp",
  },
  {
    id: 12,
    title: "Billa",
    description: "In quis justo. Maecenas rhoncus aliquam lacus.",
    price: 1200,
    stock: 10,
    category: "pants",
    thumbnail: "../../img/pant4a.jpeg",
  },
  {
    id: 13,
    title: "Kunyang",
    description: "Fusce posuere felis sed lacus lorem ipsum.",
    price: 4200,
    stock: 20,
    category: "shorts",
    thumbnail: "../../img/short1a.webp",
  },
  {
    id: 14,
    title: "Patía",
    description: "Morbi a ipsum. luctus et ultrices amet turpis.",
    price: 1990,
    stock: 10,
    category: "shorts",
    thumbnail: "../../img/short2a.webp",
  },
  {
    id: 15,
    title: "Doljevac",
    description: "Nullam sit amet turpis elementum ligula vehicula.",
    price: 1590,
    stock: 18,
    category: "shorts",
    thumbnail: "../../img/short3a.webp",
  },
  {
    id: 16,
    title: "Qinxi",
    description: "Nunc nisl. In sagittis dui vel nisl luctus et ul.",
    price: 2500,
    stock: 11,
    category: "shorts",
    thumbnail: "../../img/short4a.webp",
  },
];

export default function getItemsFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(itemsDB);
    }, 2000);
  });
}

export function getSingleItemFromAPI(idParams) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let itemRequested = itemsDB.find((item) => {
        return item.id === Number(idParams);
      });

      if (itemRequested) {
        resolve(itemRequested);
      } else {
        reject(new Error("El item no existe."));
      }
    }, 2000);
  });
}

export function getItemsFromAPIByCategory(categoryid) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let arrayItemsRequested = itemsDB.filter((item) => {
        let matchearon = item.category === categoryid;

        return matchearon;
      });

      resolve(arrayItemsRequested);
    }, 2000);
  });
}
