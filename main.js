const firstName = "Rafał";
const age = 28;

/**alert("SIEMA!");**/
console.log(`siema! Nazywam się ${firstName} i mam ${age} lat`);

alert(`Siema! Nazywam się ${firstName} i mam ${age} lat`);

const heading = document.querySelector(".header-h1--js");
heading.innerHTML = "test wpisu przes JS";

const hello = (firstName, age) => {
  console.log(
    `Witaj drogi odwiedzający! Nazywam się ${firstName} i mam ${age} lat`
  );
};

hello("Rafał", 28);
