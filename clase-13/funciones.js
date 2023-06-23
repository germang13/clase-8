function saludar() {
  const saludos = [
    "hola",
    "que haces?",
    "todo bien?",
    "buenos dias (todos)",
    "buenas noches (Martin)",
  ];

  procesarSaludos();
  console.log("---------------");
  procesarSaludosMayuscula();

  function procesarSaludosMayuscula() {
    for (let index = 0; index < saludos.length; index++) {
      const element = saludos[index];

      console.log(element.toUpperCase());
    }
  }

  function procesarSaludos() {
    for (let index = 0; index < saludos.length; index++) {
      const element = saludos[index];

      console.log(element);
    }
  }
}

saludar();
