let currencyRatio = {
    USD: {
        KRW: 1184.36,
        USD: 1,
        VND: 22972.5,
        unit: "달러",
    },
    KRW: {
        KRW: 1,
        USD: 0.00084,
        VND: 19.4,
        unit: "원",
    },
    VND: {
        KRW: 0.052,
        USD: 0.000044,
        VND: 1,
        unit: "동",
    },
};
let fromCurrency = "USD";
let toCurrency = "USD";

// 1. console.log(currencyRatio.USD.unit);

// console.log(currencyRatio["VND"].unit);

document.querySelectorAll("#from-currency-list a").forEach((menu) =>
    menu.addEventListener("click", function () {
        document.getElementById("from-button").textContent = this.textContent;
        fromCurrency = this.textContent;
        convert();
        
    })
);

document.querySelectorAll("#to-currency-list a").forEach((menu) => menu.addEventListener("click", function () {
        document.getElementById("to-button").textContent = this.textContent; 
        toCurrency = this.textContent;
        convert();
    })
);

function convert(){
    let amount = document.getElementById("from-input").value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    // console.log(currencyRatio[fromCurrency], currencyRatio[toCurrency])

    document.getElementById("to-input").value = convertedAmount;
    document.getElementById("from-money").textContent = currencyRatio['unit']
    console.log(currencyRatio['unit'])
}

function reverseConvert(){
    let amount = document.getElementById("to-input").value;
    let convertedAmount = amount * currencyRatio[toCurrency][fromCurrency];
    document.getElementById("from-input").value = convertedAmount;
}

let animals = [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Grasshopper",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Moose",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Sandpiper",
    "Sardine",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Tiger",
    "Toad",
    "Whale",
    "Wildcat",
    "Wolf",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
  ]

  let newArray = animals.slice(animals.indexOf("Baboon"), animals.indexOf("Bison")+1)
  console.log(newArray)