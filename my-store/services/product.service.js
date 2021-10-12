const faker = require('faker');

//Creacion de servicios utliza programación orientada a objetos
class ProductsService {
  constructor() { //manejarlo en memoria
    this.products = [];
    this.generate();
  }

  generate(){ //usando una base de datos externa
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      })
    }
  }

  create() {

  }

  find(){
    return this.products;
  }

  findOne(id){
    return this.products.find(item => item.id === id);
  }

  update(){

  }
  delete(){

  }
}

module.exports = ProductsService;
