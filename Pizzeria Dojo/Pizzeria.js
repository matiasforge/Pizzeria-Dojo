function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {
        tipoCorteza: tipoCorteza,
        tipoSalsa: tipoSalsa,
        quesos: quesos,
        salsas: salsas,
    };
    return pizza
}
var pizza1 = pizzaOven("Estilo Chicago", "tradicional", "mozzarella", "pepperoni y salchicha");
var pizza2 = pizzaOven("Lanzada a mano", "marinara", "mozzarella y feta", "champiñones aceitunas cebollas");
var pizza3 = pizzaOven("Delgada", "pesto", "mozzarella", "salsa de tomate");
var pizza4 = pizzaOven("Gruesa", "barbacoa", "cheddar", "salsa de ajo");

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);
