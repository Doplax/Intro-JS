// bugAsync.js

function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, nombre: "John Doe" });
      } else {
        reject("Usuario no encontrado");
      }
    }, 2000);
  });        
}

async function main() {
  try {
    const usuario = await obtenerUsuario(1);
    console.log(usuario);
  } catch (error) {
    console.log(error);
  }
}

main();
