import xboxSeriesX from '../assets/images/xbox-series-x.jpg'
import ps5 from '../assets/images/ps5.jpg'
import nintendoSwitch from '../assets/images/nintendo-switch.jpg'
import dualsensePs5 from '../assets/images/dualsense.jpg'
import zeldaBotw from '../assets/images/zelda-botw.jpeg'
import codMwII from '../assets/images/cod-mw2.jpeg'
import ssdXbox from '../assets/images/ssd-xbox.jpeg'
import razerIskur from '../assets/images/razer-iskur.jpeg'

const products = [
    {
      id: 1,
      name: "Consola Xbox Series X",
      price: 499,
      category: "consolas",
      description: "La consola más potente de Microsoft, con 12 teraflops de potencia y soporte para juegos en 4K.",
      image: xboxSeriesX,
    },
    {
      id: 2,
      name: "PlayStation 5",
      price: 499,
      category: "consolas",
      description: "La nueva generación de consolas de Sony, con un diseño innovador y rendimiento superior.",
      image: ps5,
    },
    {
      id: 3,
      name: "Nintendo Switch",
      price: 299,
      category: "consolas",
      description: "La consola híbrida de Nintendo que te permite jugar en casa o en modo portátil.",
      image: nintendoSwitch,
    },
    {
      id: 4,
      name: "Control DualSense para PS5",
      price: 69,
      category: "accesorios",
      description: "El nuevo mando para PlayStation 5 con retroalimentación háptica y gatillos adaptativos.",
      image: dualsensePs5,
    },
    {
      id: 5,
      name: "The Legend of Zelda: Breath of the Wild",
      price: 59,
      category: "juegos",
      description: "Un juego de acción y aventura en mundo abierto, exclusivo de Nintendo Switch.",
      image: zeldaBotw,
    },
    {
      id: 6,
      name: "Call of Duty: Modern Warfare II",
      price: 69,
      category: "juegos",
      description: "La última entrega de la serie Call of Duty, con gráficos realistas y modo multijugador.",
      image: codMwII,
    },
    {
      id: 7,
      name: "Tarjeta de Expansión SSD de 1TB para Xbox Series X/S",
      price: 219,
      category: "accesorios",
      description: "Expande el almacenamiento de tu Xbox Series X/S con esta tarjeta SSD de alta velocidad.",
      image: ssdXbox,
    },
    {
      id: 8,
      name: "Silla Gamer Razer Iskur",
      price: 499,
      category: "accesorios",
      description: "Una silla gamer ergonómica diseñada para largas sesiones de juego, con soporte lumbar.",
      image: razerIskur,
    },
  ];
  
  export default products;