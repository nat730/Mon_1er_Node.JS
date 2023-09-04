if (process.argv.includes("--help")) {
  console.log("Je vais vous aider");
}




const Name = process.argv.indexOf("--name");
if (Name == -1) {
  console.log("Veuillez spécifier un nom après 'start'.");
}

else {
  const name = process.argv[Name+1];
  console.log(`Bonjour ${name}`);
} 

