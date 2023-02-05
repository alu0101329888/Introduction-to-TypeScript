type Name = string;
type Age = number;


// restrict the object type.
const user: User = { name: 'John', age: 30 };
const useObject: Object = { name:"Pepe", age: 50, altura: 12, ruedas: 4, material: true};

// Union of types.
type User = { name: Name, age: Age };
type Rol = { rol: string};
type UserAndRol = User & Rol;

const userAdmin : UserAndRol = { name: "Juanito", age:22, rol:"Administrado"};