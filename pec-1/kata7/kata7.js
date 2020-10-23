const car = {
  brand: 'Ford',
  getBrand() {
    console.log(this.brand);
  },
};
car.getBrand(); // Ford
const cardBrandFunction = car.getBrand;
cardBrandFunction.call(car); // No se si será el modo más correcto de hacerlo, pero en mi caso y según la documentación de MDN sobre los metodos, al llamar a car desde esta función establece contacto con el objeto global que no tiene la propiedad car por lo que da undefine, pero al usar call establecemos contacto de forma explicita con el objeto car.
