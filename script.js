// const name = "Jean-Didier";
// console.log(name);

// const max = 5;
// for (let i = 0; i < max; i++) {
// 	console.log(i);
// }
// console.log("end");

// const in1Second = Date.now() + 1000;
// let operations = 0;

// console.log("Before the delay");

// // This loop is executed until we reach the in1Second timestamp
// while (Date.now() < in1Second) {
// 	operations += 1;
// }

// console.log("After the delay");
// console.log("We could have done " + operations + " operations in that time.");

// console.log("Before the delay");
// setTimeout(() => console.log("After 1s"), 1000);
// console.log("After the delay");

// const fetchName = (name) => fetch("https://api.agify.io/?name=" + name);

// fetchName("Tom")
// 	.then((response) => response.json())
// 	.then((json) => {
// 		console.log(json.age);
// 		console.log(json.count);
// 	})
// 	.catch((error) => {
// 		console.log("There was an error!", error);
// 	});

	

// 	// const fetchPokemon = (pokemonName) => {

// 	// 	return fetch("list.json")
// 	// 	  .then((response) => response.json())
// 	// 	  .then((data) => {
// 	// 		const pokemon = data.find((p) => p.name === pokemonName);
	  
// 	// 		if (pokemon) {
// 	// 		  console.log("Type:", pokemon.type);
// 	// 		  console.log("Description:", pokemon.description);
// 	// 		} else {
// 	// 		  console.log(`Pokemon with name "${pokemonName}" not found.`);
// 	// 		}
// 	// 	  })
// 	// 	  .catch((error) => {
// 	// 		console.error("Error fetching data:", error);
// 	// 	  });
// 	//   };
	  
// 	//   fetchPokemon("Charizard");


// // Define the fetchPokemon function
// // Define the fetchPokemon function
// // const fetchPokemon = (pokemonName) => {
// // 	return fetch("list.json")
// // 	  .then((response) => response.json())
// // 	  .then((data) => {
// // 		const pokemon = data.find((p) => p.name === pokemonName);
  
// // 		if (pokemon) {
// // 		  return pokemon; // Return the found Pokemon
// // 		} else {
// // 		  throw new Error(`Pokemon with name "${pokemonName}" not found.`);
// // 		}
// // 	  });
// //   };
  
// //   // Define the DisplayPokémon function to update HTML elements
// //   function DisplayPokémon(pokemon) {
// // 	// Update the HTML elements with Pokémon details
// // 	document.getElementById("pokemonType").textContent = `Type: ${pokemon.type}`;
// // 	document.getElementById("pokemonDescription").textContent = `Description: ${pokemon.description}`;
// //   }
  
// //   // Add an event listener to the "Call" button
// //   document.getElementById("Call").addEventListener("click", function () {
// // 	// Get the selected Pokémon name from the <select> element
// // 	const selectedPokemon = document.getElementById("pokemonList").value;
  
// // 	// Call the fetchPokemon function with the selected Pokémon's name
// // 	fetchPokemon(selectedPokemon)
// // 	  .then((pokemon) => {
// // 		// Call the DisplayPokémon function to update HTML elements
// // 		DisplayPokémon(pokemon);
// // 	  })
// // 	  .catch((error) => {
// // 		console.error("Error fetching Pokémon data:", error);
// // 	  });
// //   });
  
// // Wrap your code in a function to ensure it's executed after the DOM is ready
// document.addEventListener('DOMContentLoaded', function () {
// 	// Select the button and ul elements
// 	const callButton = document.getElementById('call');
// 	const pokemonList = document.getElementById('ruleList');
  
// 	// Define a function to fetch and display Pokémon data
// 	function fetchAndDisplayPokemon(pokemonName) {
// 	  // Fetch the JSON data
// 	  fetch('list.json')
// 		.then((response) => response.json())
// 		.then((data) => {
// 		  // Find the Pokémon by name in the JSON data
// 		  const pokemon = data.find((p) => p.name === pokemonName);
  
// 		  if (pokemon) {
// 			// Create a list of attributes to display
// 			const attributes = [
// 			  `Name: ${pokemon.name}`,
// 			  `Type: ${pokemon.type.join(', ')}`,
// 			  `Height: ${pokemon.height}`,
// 			  `Weight: ${pokemon.weight}`,
// 			  `Description: ${pokemon.description}`,
// 			];
  
// 			// Create a list item to display the Pokémon data
// 			const listItem = document.createElement('li');
// 			listItem.textContent = attributes.join(' | ');
  
// 			// Append the list item to the ul element
// 			pokemonList.appendChild(listItem);
// 		  } else {
// 			console.log(`Pokemon with name "${pokemonName}" not found.`);
// 		  }
// 		})
// 		.catch((error) => {
// 		  console.error('Error fetching data:', error);
// 		});
// 	}
  
// 	// Add a click event listener to the button
// 	callButton.addEventListener('click', function () {
// 	  const pokemonName = prompt('Enter a Pokémon name:');
// 	  if (pokemonName) {
// 		// Clear previous Pokémon data
// 		pokemonList.innerHTML = 'Pokémon:';
// 		// Fetch and display the Pokémon data
// 		fetchAndDisplayPokemon(pokemonName);
// 	  }
// 	});
//   });

function getTemperature(city) {
	const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city +  "&appid=0047061bb7ad2defb24ed972a92b035a&units=metrics";
  
  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.responseType = "json";
  request.send();
	
  request.onload = () => {
  
	if (request.readyState === XMLHttpRequest.DONE) {
	  if (request.status === 200) {
  
		let reponse = request.response;
		console.log(reponse);
  
		let temp = reponse.main.temp;
		console.log(temp);
  
	  let temps = reponse.weather[0].description;
		console.log(temps);
  
		let icon =reponse.weather[0].icon;
		console.log(icon);
		
  
		let city = reponse.name;
  
		document.querySelector("#temp").textContent = temp;
		document.querySelector("#icon").textContent = icon;
		document.querySelector("#city").textContent = city;
  
		} else {
		  alert("sysltem error, please try !")
		}
	  }
	  
	}
  }