// app/api/products/route.ts

export async function GET() {
  const products = [
    {
      id: 1,
      name: 'God of War: Ragnarok - PlayStation 4',
      price: 33.99,
      imageSrc: '/images/GodOfWar.png',
    },
    {
      id: 2,
      name: "Marvel's Spider-Man: Game of the Year Edition - PlayStation 4",
      price: 31.27,
      imageSrc: '/images/spiderman.png',
    },
    {
      id: 3,
      name: 'Cyberpunk 2077 - PlayStation 4',
      price: 18.77,
      imageSrc: '/images/cyberpunk-2077.png',
    },
    {
      id: 4,
      name: 'Call of Duty: Modern Warfare III - PS5',
      price: 43.99,
      imageSrc: '/images/codMW3.png',
    },
    {
      id: 5,
      name: 'God of War: Ragnarok - PlayStation 4',
      price: 33.99,
      imageSrc: '/images/GodOfWar.png',
    },
    {
      id: 6,
      name: "Marvel's Spider-Man: Game of the Year Edition - PlayStation 4",
      price: 31.27,
      imageSrc: '/images/spiderman.png',
    },
    {
      id: 7,
      name: 'Cyberpunk 2077 - PlayStation 4',
      price: 18.77,
      imageSrc: '/images/cyberpunk-2077.png',
    },
    {
      id: 8,
      name: 'Call of Duty: Modern Warfare III - PS5',
      price: 43.99,
      imageSrc: '/images/codMW3.png',
    },
  ];

  return new Response(JSON.stringify(products), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
