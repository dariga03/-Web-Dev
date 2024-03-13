import { Categories, Category } from './categories';
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  addressUrl: string;
  link: string;
  category: Category;
  likes: number;
}

export const products = [
  {
    id: 1,
    name: 'SvetoCopy Classic бумага',
    price: 8220,
    description: 'назначение: лазерный принтер,',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h9f/hc4/64447295488030.jpg?format=gallery-medium',
    addressUrl:
      'https://kaspi.kz/shop/p/svetocopy-classic-bumaga-a4-2500-listov-matovoe-pokrytie-104417012/?c=750000000',
    link: 'https://wa.me/87476470797?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fsvetocopy-classic-bumaga-a4-2500-listov-matovoe-pokrytie-104417012%2F%3Fc%3D750000000',
    category: Categories[0],
    likes: 100,
  },
  {
    id: 2,
    name: 'Xiaomi XMBXXZ01HT бумага, 50x76 мм, 50 листов, матовое покрытие',
    price: 10000,
    description: 'Смартфон Samsung Galaxy A23 6 ГБ/128 ГБ черный',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/ha5/h8f/69185926168606.jpg?format=gallery-medium',
    addressUrl:
      'https://kaspi.kz/shop/p/xiaomi-xmbxxz01ht-bumaga-50x76-mm-50-listov-matovoe-pokrytie-108967041/?c=750000000',
    link: 'https://wa.me/87476470797?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fxiaomi-xmbxxz01ht-bumaga-50x76-mm-50-listov-matovoe-pokrytie-108967041%2F%3Fc%3D750000000',
    category: Categories[0],
    likes: 100,
  },
  {
    id: 3,
    name: 'Блокнот Hatber окно в Париж, A6, 80 л, клетка',
    price: 600,
    description: 'разлиновка: клетка',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h92/h61/84821895446558.jpg?format=gallery-medium',
    addressUrl:
      'https://kaspi.kz/shop/p/bloknot-hatber-okno-v-parizh-a6-80-l-kletka-115759823/?c=750000000',
    link: 'https://wa.me/87476470797?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fbloknot-hatber-okno-v-parizh-a6-80-l-kletka-115759823%2F%3Fc%3D750000000',
    category: Categories[0],
    likes: 100,
  },
  {
    id: 4,
    name: 'Блокнот Гравити Фолз, A7, 48 листов, мультиколор',
    price: 250,
    description: 'разлиновка: клетка',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h57/hef/70136253415454.jpg?format=gallery-medium',
    addressUrl:
      'https://kaspi.kz/shop/p/bloknot-graviti-folz-a7-48-listov-mul-tikolor-109386192/?c=750000000',
    link: 'https://wa.me/87476470797?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fbloknot-graviti-folz-a7-48-listov-mul-tikolor-109386192%2F%3Fc%3D750000000',
    category: Categories[0],
    likes: 100,
  },
  {
    id: 5,
    name: 'Скетчбук Hatber For Art, A4, 60 листов, мультиколор',
    price: 1650,
    description: 'разлиновка: без линовки',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h8a/h8a/82208582631454.jpg?format=gallery-medium',
    addressUrl:
      'https://kaspi.kz/shop/p/sketchbuk-hatber-for-art-a4-60-listov-mul-tikolor-112070663/?c=750000000',
    link: 'https://wa.me/87476470797?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fsketchbuk-hatber-for-art-a4-60-listov-mul-tikolor-112070663%2F%3Fc%3D750000000',
    category: Categories[0],
    likes: 100,
  },
  {
    id: 6,
    name: 'свисток Sport AI-0014',
    price: 164,
    description: 'назначение: для зала ,для улицы',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h9c/hc6/65558945071134.jpg?format=gallery-medium',
    addressUrl:
      'https://kaspi.kz/shop/p/svistok-sport-ai-0014-107517159/?c=750000000',
    link: 'https://wa.me/87476470797?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fsvistok-sport-ai-0014-107517159%2F%3Fc%3D750000000',
    category: Categories[1],
    likes: 100,
  },
  {
    id: 7,
    name: 'Коврик Yoga Mat',
    price: 2489,
    description: 'назначение: для йоги',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/ha9/hea/64080404807710.jpg?format=gallery-medium',
    addressUrl:
      'https://kaspi.kz/shop/p/yoga-mat-170x60x0-6-sm-183x60x0-6-sm-rozovyi-100710438/?c=750000000',
    link: 'https://wa.me/87476470797?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fyoga-mat-170x60x0-6-sm-183x60x0-6-sm-rozovyi-100710438%2F%3Fc%3D750000000',
    category: Categories[1],
    likes: 100,
  },
  {
    id: 8,
    name: 'Шейкер Spider',
    price: 2282,
    description: 'материал: пластик',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h52/h62/63620181590046.jpg?format=gallery-medium',
    addressUrl:
      'https://kaspi.kz/shop/p/spider-45879651-500-ml-chernyi-106518670/?c=750000000',
    link: 'https://wa.me/87476470797?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fspider-45879651-500-ml-chernyi-106518670%2F%3Fc%3D750000000',
    category: Categories[1],
    likes: 100,
  },
  {
    id: 9,
    name: 'Кухонная плита ARG 24DME4R109 серебристый',
    price: 2290,
    description: 'материал колеса: пластик',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h86/h54/63981599555614.jpg?format=gallery-medium',
    addressUrl:
      'https://kaspi.kz/shop/p/yoga-mat-roller-dbl2grn-100913033/?c=750000000',
    link: 'https://wa.me/87476470797?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fyoga-mat-roller-dbl2grn-100913033%2F%3Fc%3D750000000',
    category: Categories[1],
    likes: 100,
  },

  {
    id: 10,
    name: 'Скакалка SUNLIN',
    price: 659,
    description: 'тип: скоростная',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h06/h9d/64242893062174.jpg?format=gallery-medium',
    addressUrl:
      'https://kaspi.kz/shop/p/sunlin-1211-bk-270-sm-chernyi-101381840/?c=750000000',
    link: 'https://wa.me/87476470797?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fsunlin-1211-bk-270-sm-chernyi-101381840%2F%3Fc%3D750000000',
    category: Categories[1],
    likes: 100,
  },

  {
    id: 11,
    name: 'Корм Darling кусочки в соусе говядина 75 г 1 шт',
    price: 149,
    description: 'порода: для любой породы',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h39/h18/84798257594398.jpg?format=gallery-medium',
    addressUrl:
      'https://kaspi.kz/shop/p/darling-kusochki-v-souse-govjadina-75-g-1-sht-110583732/?c=750000000',
    link: 'https://wa.me/87476470797?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fdarling-kusochki-v-souse-govjadina-75-g-1-sht-110583732%2F%3Fc%3D750000000',
    category: Categories[2],
    likes: 100,
  },
  {
    id: 12,
    name: 'Наполнитель Природный бентонит комкующийся 15 кг',
    price: 4460,
    description: 'размер породы: все породы',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h95/h73/63865833881630.jpg?format=gallery-medium',
    addressUrl:
      'https://kaspi.kz/shop/p/prirodnyi-bentonit-komkujuschiisja-15-kg-100124865/?c=750000000',
    link: 'https://wa.me/87476470797?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fprirodnyi-bentonit-komkujuschiisja-15-kg-100124865%2F%3Fc%3D750000000',
    category: Categories[2],
    likes: 100,
  },
  {
    id: 13,
    name: 'Корм Дилли Говяжий гуляш с овощами для взрослых 14 кг',
    price: 9700,
    description: 'размер породы: все породы',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h2f/hf7/63851207426078.jpg?format=gallery-medium',
    addressUrl:
      'https://kaspi.kz/shop/p/dilli-govjazhii-guljash-s-ovoschami-dlja-vzroslyh-14-kg-100528160/?c=750000000',
    link: 'https://wa.me/87476470797?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fdilli-govjazhii-guljash-s-ovoschami-dlja-vzroslyh-14-kg-100528160%2F%3Fc%3D750000000',
    category: Categories[2],
    likes: 100,
  },
  {
    id: 14,
    name: 'Корм Gourmet паштет курица 85 г 1 шт',
    price: 500,
    description: 'порода: для любой породы',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h5f/hc3/84785411063838.jpg?format=gallery-medium',
    addressUrl:
      'https://kaspi.kz/shop/p/gourmet-pashtet-kuritsa-85-g-1-sht-100218889/?c=750000000',
    link: 'https://wa.me/87476470797?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fgourmet-pashtet-kuritsa-85-g-1-sht-100218889%2F%3Fc%3D750000000',
    category: Categories[2],
    likes: 100,
  },
  {
    id: 15,
    name: 'Корм Sheba кусочки в соусе телятина, язык 75 г 1 шт',
    price: 258,
    description: 'порода: для любой породы',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h5e/h8d/63876300832798.jpg?format=gallery-large',
    addressUrl:
      'https://kaspi.kz/shop/p/sheba-kusochki-v-souse-teljatina-jazyk-75-g-1-sht-100219823/?c=750000000',
    link: 'https://wa.me/87476470797?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fsheba-kusochki-v-souse-teljatina-jazyk-75-g-1-sht-100219823%2F%3Fc%3D750000000',
    category: Categories[2],
    likes: 100,
  },
  {
    id: 16,
    name: 'Набор Fashion Jewelry N бижутерный сплав, стекло',
    price: 698,
    description: 'вид изделия: набор',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hb4/h8c/66909111484446.jpg?format=gallery-medium',
    addressUrl:
      'https://kaspi.kz/shop/p/nabor-fashion-jewelry-n-bizhuternyi-splav-steklo-108048604/?c=750000000',
    link: 'https://wa.me/87476470797?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fnabor-fashion-jewelry-n-bizhuternyi-splav-steklo-108048604%2F%3Fc%3D750000000',
    category: Categories[3],
    likes: 100,
  },
  {
    id: 17,
    name: 'Браслет Hottime длина 19 см бижутерный сплав, нержавеющая сталь, магнезит',
    price: 798,
    description: 'застежка: кнопка',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h71/h97/64057410650142.jpg?format=gallery-medium',
    addressUrl:
      'https://kaspi.kz/shop/p/hottime-dlina-19-sm-bizhuternyi-splav-nerzhavejuschaja-stal-magnezit-103032934/?c=750000000',
    link: 'https://wa.me/87476470797?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fhottime-dlina-19-sm-bizhuternyi-splav-nerzhavejuschaja-stal-magnezit-103032934%2F%3Fc%3D750000000',
    category: Categories[3],
    likes: 548,
  },
  {
    id: 18,
    name: 'Серьги Бабочки медицинская сталь, эмаль',
    price: 587,
    description: 'застежка: гвоздик',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/hf6/h3a/80521159606302.jpg?format=gallery-medium',
    addressUrl:
      'https://kaspi.kz/shop/p/ser-gi-babochki-meditsinskaja-stal-emal--110103164/?c=750000000',
    link: 'https://wa.me/87476470797?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fser-gi-babochki-meditsinskaja-stal-emal--110103164%2F%3Fc%3D750000000',
    category: Categories[3],
    likes: 100,
  },
  {
    id: 19,
    name: 'Чокер, цепь Premium jewellery длина 45 см сталь цирконий',
    price: 747,
    description: 'цвет вставки: отсутствует',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h43/ha0/85207594401822.jpg?format=gallery-medium',
    addressUrl:
      'https://kaspi.kz/shop/p/choker-tsep-premium-jewellery-dlina-45-sm-stal-tsirkonii-102525937/?c=750000000',
    link: 'https://wa.me/87476470797?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fchoker-tsep-premium-jewellery-dlina-45-sm-stal-tsirkonii-102525937%2F%3Fc%3D750000000',
    category: Categories[3],
    likes: 100,
  },
  {
    id: 20,
    name: 'Серьги Xuping Jewelry N медицинская сталь, без вставок',
    price: 949,
    description: 'цвет материала: золотистый',
    rating: 5,
    image:
      'https://resources.cdn-kaspi.kz/img/m/p/h0d/h8d/85359341207582.jpg?format=gallery-medium',
    addressUrl:
      'https://kaspi.kz/shop/p/ser-gi-xuping-jewelry-n-meditsinskaja-stal-bez-vstavok-105726035/?c=750000000',
    link: 'https://wa.me/87476470797?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fser-gi-xuping-jewelry-n-meditsinskaja-stal-bez-vstavok-105726035%2F%3Fc%3D750000000',
    category: Categories[3],
    likes: 100,
  },
];
