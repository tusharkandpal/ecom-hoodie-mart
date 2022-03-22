import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "GANT",
    subTitle: "Men Green Printed Hooded Sweatshirt",
    imgUrl:
      "http://assets.myntassets.com/assets/images/15144312/2021/8/13/4b0ff79e-c349-42c2-937d-747167278c131628874407287Sweatshirts1.jpg",
    originalPrice: 8999,
    sellingPrice: 3599,
    quantity: 39,
    categoryName: "Men",
  },
  {
    _id: uuid(),
    title: "H&M",
    subTitle: "Zip-through Hoodie",
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17464788/2022/3/10/2c4ae4dd-1746-4d40-966e-7527ed4831621646916524520Zip-throughhoodie1.jpg",
    originalPrice: 1999,
    sellingPrice: 999,
    quantity: 36,
    categoryName: "Kids",
  },
  {
    _id: uuid(),
    title: "Athena Girl",
    subTitle: "Girls Burgundy Solid Hooded Sweatshirt",
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16499426/2021/12/13/64ba3252-624f-453c-8a11-834e0153e49a1639395456438AthenaGirlGirlsBurgundyHoodedSweatshirt3.jpg",
    originalPrice: 1499,
    sellingPrice: 944,
    quantity: 16,
    categoryName: "Girls",
  },
  {
    _id: uuid(),
    title: "H&M",
    subTitle: "Men Yellow Hooded Sweatshirt",
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17268380/2022/2/24/cb4adc25-cae3-4241-8e08-3cb74c34ef191645691933345RelaxedFitTie-dyehoodie1.jpg",
    originalPrice: 2299,
    sellingPrice: 1550,
    quantity: 3,
    categoryName: "Men",
  },
  {
    _id: uuid(),
    title: "H&M",
    subTitle: "Boys Printed Hoodie",
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16929768/2022/1/25/8108268b-7959-4204-be04-a226934d0c271643103177674Printedhoodie1.jpg",
    originalPrice: 1899,
    sellingPrice: 1499,
    quantity: 21,
    categoryName: "Boys",
  },
  {
    _id: uuid(),
    title: "UTH by Roadster",
    subTitle: "Orange Applique Hooded Sweatshirt",
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14960860/2022/1/6/25b04a7d-8dad-44e4-bd8b-6c3f82e41a541641461493036UTHbyRoadsterGirlsRustOrangeAppliqueHoodedSweatshirt1.jpg",
    originalPrice: 1999,
    sellingPrice: 1299,
    quantity: 4,
    categoryName: "Girls",
  },
  {
    _id: uuid(),
    title: "Metro Kids Company",
    subTitle: "Boys Colourblocked Sweatshirt",
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16540724/2021/12/17/4ed88269-f72b-449c-aa16-2220e5242d2d1639725476422ahhaaaaBoysYellowHoodedSweatshirt1.jpg",
    originalPrice: 2999,
    sellingPrice: 689,
    quantity: 10,
    categoryName: "Kids",
  },
  {
    _id: uuid(),
    title: "Fitkin",
    subTitle: "Women Pink Printed Hooded Sweatshirt",
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15458260/2021/10/5/77f23d4d-fc38-4778-89c5-122cfe88221a1633416564536-plusS-Women-Pink-Printed-Hooded-Sweatshirt-3061633416563745-1.jpg",
    originalPrice: 1799,
    sellingPrice: 1439,
    quantity: 15,
    categoryName: "Women",
  },
  {
    _id: uuid(),
    title: "HIGHLANDER",
    subTitle: "Men Grey Solid Hooded Sweatshirt",
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/11/28/d93a4d27-5bad-4514-a752-80199fa4f0051606566407888-1.jpg",
    originalPrice: 2249,
    sellingPrice: 629,
    quantity: 24,
    categoryName: "Men",
  },
  {
    _id: uuid(),
    title: "The Dry State",
    subTitle: "Pure Cotton Hooded Sweatshirt",
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12895378/2020/12/11/442c98a9-5d2a-4637-a491-dc0c1141859e1607684425027TheDryStateWomenWhiteBlackQuirkyPrintedPureCottonHoodedSweat1.jpg",
    originalPrice: 1799,
    sellingPrice: 773,
    quantity: 45,
    categoryName: "Women",
  },
  {
    _id: uuid(),
    title: "Kook N Keech",
    subTitle: "Boys Printed Hooded Sweatshirt",
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15933946/2022/3/4/56bf1a24-d2d9-45be-8160-68666ad026e01646392057691KookNKeechStarWarsTeensBoysGreyMelangePrintedHoodedSweatshir1.jpg",
    originalPrice: 1899,
    sellingPrice: 1329,
    quantity: 33,
    categoryName: "Boys",
  },
  {
    _id: uuid(),
    title: "H&M",
    subTitle: "Grey Mickey Mouse Printed Hoodie",
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16929740/2022/1/25/54630910-4b80-491c-80d2-13a94c2671b51643103113728Printedhoodie1.jpg",
    originalPrice: 3100,
    sellingPrice: 2550,
    quantity: 19,
    categoryName: "Girls",
  },
  {
    _id: uuid(),
    title: "Puma",
    subTitle: "Black Hooded Sweatshirt",
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16855254/2022/1/17/7a5f5eca-37eb-4ac6-86e7-39cdfedfc48c1642441261658Sweatshirts1.jpg",
    originalPrice: 4499,
    sellingPrice: 2474,
    quantity: 23,
    categoryName: "Women",
  },
  {
    _id: uuid(),
    title: "H&M",
    subTitle: "Men Purple Relaxed Fit Hoodie",
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17124198/2022/2/10/ad50c952-a695-4b73-bafd-0f60e92196711644501957666RelaxedFitHoodie1.jpg",
    originalPrice: 2799,
    sellingPrice: 1119,
    quantity: 32,
    categoryName: "Men",
  },
  {
    _id: uuid(),
    title: "Roadster",
    subTitle: "Chevron Hooded Sweatshirt",
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15158624/2022/2/14/ab0fd11e-a4f2-4014-9e03-f22391c74a581644830801969-Roadster-Women-Sweatshirts-2881644830801419-1.jpg",
    originalPrice: 1399,
    sellingPrice: 629,
    quantity: 16,
    categoryName: "Women",
  },
  {
    _id: uuid(),
    title: "HRX by Hrithik Roshan",
    subTitle: "U-17 Lifestyle Sweatshirts",
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14280786/2021/12/10/71fddd36-1c60-42c0-bb0d-1b0fee34f4361639134533926-HRX-By-Hrithik-Roshan-U-17-Lifestyle-Boys-Bight-white-Rapid--1.jpg",
    originalPrice: 1899,
    sellingPrice: 1234,
    quantity: 25,
    categoryName: "Boys",
  },
  {
    _id: uuid(),
    title: "H&M",
    subTitle: "Boys Printed Hooded Top",
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16892878/2022/1/21/9714aad7-2f0e-455c-b143-3ff8ec41ebbf1642739688153Hoodedtop1.jpg",
    originalPrice: 2300,
    sellingPrice: 1988,
    quantity: 7,
    categoryName: "Boys",
  },
  {
    _id: uuid(),
    title: "Pepe Jeans",
    subTitle: "Blue Hooded Earl Sweatshirt",
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12547720/2021/9/24/4738c926-f150-4829-bcad-716052134e5c1632486374208PepeJeansBoysBlueHoodedEarlSweatshirt1.jpg",
    originalPrice: 1999,
    sellingPrice: 1399,
    quantity: 37,
    categoryName: "Kids",
  },
  {
    _id: uuid(),
    title: "CUTECUMBER",
    subTitle: "Purple Hooded Sweatshirt",
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16128734/2021/11/17/48f15fde-73d2-4fef-b775-923368991c641637162824815CUTECUMBERGirlsPurplePrintedHoodedSweatshirt3.jpg",
    originalPrice: 2790,
    sellingPrice: 1100,
    quantity: 38,
    categoryName: "Girls",
  },
  {
    _id: uuid(),
    title: "H&M",
    subTitle: "Boys 2-pack Hoodies",
    imgUrl:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17124194/2022/2/10/1ac6a750-4b59-4b0a-a130-3a63582e614d16445064363432-packzip-throughhoodies1.jpg",
    originalPrice: 2299,
    sellingPrice: 1790,
    quantity: 28,
    categoryName: "Boys",
  },
];


