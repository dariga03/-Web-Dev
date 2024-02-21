export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  photoUrl: string;
  addressUrl: string;
  link: string;
}

export const products = [
  {
    id: 1,
    name: 'Aihao Ballpoint pen',
    price: 89,
    description: 'Design: automatic. ink color: blue. case shape: round.',
    rating: 4.5,
    photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h2f/hc8/64524400230430.jpg?format=gallery-large',
    addressUrl:'https://kaspi.kz/shop/p/ruchka-sharikovaja-aihao-00-00001025-1-sht-tsvet-chernil-sinii-105738614/?c=750000000',
    link: 'https://api.whatsapp.com/send/?phone=77087033500&text=%7B%7Bproduct.url%7D%7D&type=phone_number&app_absent=0'
  },
  {
    id: 2,
    name: 'Touch Marker',
    price: 3649,
    description: 'permanent: No. tip shape: brush. ink base: alcohol. set: Yes. number of markers: 80.',
    rating: 5,
    photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h5c/hb6/64378606092318.jpg?format=gallery-large',
    addressUrl:'https://kaspi.kz/shop/p/marker-marker-2000000015347-80-sht-1-mm-mul-tikolor-103046406/?c=750000000',
    link: 'https://api.whatsapp.com/send/?phone=77087033500&text=%7B%7Bproduct.url%7D%7D&type=phone_number&app_absent=0'

  },
  {
    id: 3,
    name: 'Violin Deli',
    price: 244,
    description: 'shape: oval. coating: none. package quantity: 100. length: 33.0 mm.',
    rating: 4,
    photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h2f/hc8/64524400230430.jpg?format=gallery-large',
    addressUrl:'https://kaspi.kz/shop/p/deli-39716-100-sht-100483175/?c=750000000',
    link: 'https://api.whatsapp.com/send/?phone=77087033500&text=%7B%7Bproduct.url%7D%7D&type=phone_number&app_absent=0'
  },
  {
    id: 4,
    name: 'Globe',
    price: 10389,
    description: 'Type: physico-political. diameter, cm: 320.0 cm. scale: 1:40 million. embossed: None. stand shape: round. stand material: plastic. lettering language: Russian. features: backlight.',
    rating: 5,
    photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h8a/ha4/63986232721438.jpg?format=gallery-large',
    addressUrl:'https://kaspi.kz/shop/p/globen-ke013200228-32-sm-100564574/?c=750000000',
    link: 'https://api.whatsapp.com/send/?phone=77087033500&text=%7B%7Bproduct.url%7D%7D&type=phone_number&app_absent=0'
  },
  {
    id: 5,
    name: 'Death Note',
    price: 1889,
    description: 'type: diary, notebook, sketchbook, personal diary. format: A5. number of sheets: 160. layout: ruler. cover: soft.',
    rating: 4.5,
    photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h54/h5e/64131005644830.jpg?format=gallery-large',
    addressUrl:'https://kaspi.kz/shop/p/death-note-tetrad-bloknot-smerti-anime-103027031/?c=750000000',
    link: 'https://api.whatsapp.com/send/?phone=77087033500&text=%7B%7Bproduct.url%7D%7D&type=phone_number&app_absent=0'
  },
  {
    id: 6,
    name: 'Stationery knife Kitty Cutter',
    price: 968,
    description: 'blade design: retractable. Type: stationery knife. Package contents: 1.',
    rating: 4.5,
    photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hd3/h5c/64944953655326.jpg?format=gallery-medium',
    addressUrl:'https://kaspi.kz/shop/p/oule-kitty-cutter-ol20-8422-1-sht-104149180/?c=7500000004',
    link: 'https://api.whatsapp.com/send/?phone=77087033500&text=%7B%7Bproduct.url%7D%7D&type=phone_number&app_absent=0'
  },
  {
    id: 7,
    name: 'Hatber Puzzle The tenderness of a flower',
    price: 410,
    description: 'Purpose: for adults. Type: classic. number of parts: 120. packing: cardboard box.',
    rating: 5,
    photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h86/h5a/64380495560734.jpg?format=gallery-large',
    addressUrl:'https://kaspi.kz/shop/p/hatber-premium-nezhnost-tsvetka-120pz5-23656-104528597/?c=750000000',
    link: 'https://api.whatsapp.com/send/?phone=77087033500&text=%7B%7Bproduct.url%7D%7D&type=phone_number&app_absent=0'
  },
  {
    id: 8,
    name: 'Shared Notebook Hatber ocean of flowers',
    price: 570,
    description: 'type: shared notebook.format: A4. lining: cage. number of sheets: 80. Mounting: spiral.',
    rating: 5,
    photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha7/h1a/84821922545694.jpg?format=gallery-large',
    addressUrl:'https://kaspi.kz/shop/p/obschaja-tetrad-hatber-okean-tsvetov-80-l-a4-kletka-mjagkaja-oblozhka-1-sht-115759884/?c=750000000',
    link: 'https://api.whatsapp.com/send/?phone=77087033500&text=%7B%7Bproduct.url%7D%7D&type=phone_number&app_absent=0'
  },
  {
    id: 9,
    name: 'Hatber Eraser',
    price: 180,
    description: 'product form: triangular. purpose: for lead pencils. Material: polyvinyl chloride. Set: No. Number of erasers: 1.',
    rating: 5,
    photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h14/hfd/84080572956702.jpg?format=gallery-medium',
    addressUrl:'https://kaspi.kz/shop/p/lastik-hatber-er-083267-1-sht-113603631/?c=750000000',
    link: 'https://api.whatsapp.com/send/?phone=77087033500&text=%7B%7Bproduct.url%7D%7D&type=phone_number&app_absent=0'
  },
  {
    id: 10,
    name: 'Hatber Backpack',
    price: 6500,
    description: 'Color: black. for whom: for women, ,for men. Closure: zipper. Upper material: polyester. Style: school style.',
    rating: 5,
    photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hf5/hb9/63791315943454.jpg?format=gallery-large',
    addressUrl:'https://kaspi.kz/shop/p/rjukzak-hatber-1-poliester-chernyi-100353402/?c=750000000',
    link: 'https://api.whatsapp.com/send/?phone=77087033500&text=%7B%7Bproduct.url%7D%7D&type=phone_number&app_absent=0'
  },
  {
    id: 11,
    name: 'Notebook Hatber Attack of the Titans',
    price: 230,
    description: 'format: A6. number of sheets: 40. Lining: cage. cover: soft.',
    rating: 5,
    photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hf9/h68/84427322359838.jpg?format=gallery-large',
    addressUrl:'https://kaspi.kz/shop/p/bloknot-hatber-ataka-titanov-a6-40-l-kletka-114267802/?c=750000000',
    link: 'https://api.whatsapp.com/send/?phone=77087033500&text=%7B%7Bproduct.url%7D%7D&type=phone_number&app_absent=0'
  },
  {
    id: 12,
    name: 'Hatber Puzzle Game of Thrones',
    price: 2400,
    description: 'Purpose: for adults. Type: classic. number of parts: 500. packing: cardboard box.',
    rating: 5,
    photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h84/ha7/64452874567710.jpg?format=gallery-large',
    addressUrl:'https://kaspi.kz/shop/p/hatber-premium-igra-prestolov-500pz2-26444-104528646/?c=750000000',
    link: 'https://api.whatsapp.com/send/?phone=77087033500&text=%7B%7Bproduct.url%7D%7D&type=phone_number&app_absent=0'
  }

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/