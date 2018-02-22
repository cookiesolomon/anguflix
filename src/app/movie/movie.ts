
export class Movie {
  // id: number;
  // img: string;
  // title: string;
  // price: number;
  // year: number;
  // descrShort: string;
  '_id': String;
  'imgUrl': String;
  'title': String;
  'year': Number;
  'price': Number;
  'shortDescription': String;
  'fullDescription': String;
  'director': String;
  'reviews': [{
      'name': String;
      'rating': {
          type: Number,
          min: 0,
          max: 5
      };
      'text': String;
  }];
}