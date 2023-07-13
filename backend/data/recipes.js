const recipes = [
    {
        _id: "1",
        name: "Chicken Broccoli “Rice” Casserole",
        image: "/images/chicken-broccoli-casserole.jpg", 
        description: "A cheesy, comfort-food delight that's versatile to make and perfect for meal-prepping",
        source: "Paleo Running Momma",
        sourceURL: "https://www.paleorunningmomma.com/paleo-chicken-broccoli-rice-casserole-whole30/",
        ingredients: [
            "ghee or butter",
            "onion",
            "garlic",
            "arrowroot starch",
            "broth",
            "coconut milk",
            "mustard",
            "nutritional yeast",
            "salt",
            "black pepper",
            "cauliflower rice",
            "chicken",
            "broccoli",
            "oil",
            "bacon"
        ],
        instructions: [
            "step 1 is...", 
            "step 2 is...",
            "step 3 is..."
        ],
        cuisine: "American",
        mealTime: "ex: breakfast vs. dinner vs. dessert",
        mealType: "Casserole",
        temperature: "hot",
        bulk: true
    },
    {
        _id: "2",
        name: "Shishitos with Peanut Dipping Sauce",
        image: "/images/shishitos.jpg",
        description: "Mild, crispy peppers with a spicy soy peanut dipping sauce",
        source: "Agritopia Farm",
        sourceURL: "https://agritopiafarm.com/recipes/2020/11/2/shishitos-with-peanut-dipping-sauce",
        ingredients: [
            "shishito peppers",
            "nut butter",
            "soy sauce",
            "vinegar",
            "hot sauce"
        ],
        instructions: [
            "step 1 is...", 
            "step 2 is...",
            "step 3 is..."
        ],
        cuisine: "ex: korean, american, mexican",
        mealTime: "snack",
        mealType: "Finger food",
        temperature: "hot",
        bulk: false
    },
    {
        _id: "3",
        name: "Thai basil chicken and eggplant",
        image: "/images/thai-chicken-eggplant.jpg",
        description: "This recipe was my eggplant awakening",
        source: "The Woks of Life",
        sourceURL: "https://thewoksoflife.com/japanese-eggplant-chicken-thai-basil-stir-fry/",
        ingredients: [
            "food1",
            "food2",
            "food3"
        ],
        instructions: [
            "step 1 is...", 
            "step 2 is...",
            "step 3 is..."
        ],
        cuisine: "Thai",
        mealTime: "ex: breakfast vs. dinner vs. dessert",
        mealType: "Stirfry",
        temperature: "hot",
        bulk: true
    },
    {
        _id: "4",
        name: "Berry Crisp",
        image: "/images/berry-crisp.jpg",
        description: "Berry medley with a crispy topping",
        source: "Minimalist Baker",
        sourceURL: "https://minimalistbaker.com/grain-free-berry-crisp/",
        ingredients: [
            "food1",
            "food2",
            "food3"
        ],
        instructions: [
            "step 1 is...", 
            "step 2 is...",
            "step 3 is..."
        ],
        cuisine: "ex: korean, american, mexican",
        mealTime: "dessert",
        mealType: "Casserole",
        temperature: "hot vs. cold",
        bulk: false
    },
    {
        _id: "5",
        name: "Sea Salt Caramel Coconut Ice Cream",
        image: "/images/coconut-cashew-icecream.jpg",
        description: "The easiest, most decadent ice cream that you can make without an ice cream maker",
        source: "Minimalist Baker",
        sourceURL: "https://minimalistbaker.com/sea-salt-caramel-coconut-ice-cream/",
        ingredients: [
            "food1",
            "food2",
            "food3"
        ],
        instructions: [
            "step 1 is...", 
            "step 2 is...",
            "step 3 is..."
        ],
        cuisine: "ex: korean, american, mexican",
        mealTime: "dessert",
        mealType: "Dessert",
        temperature: "cold",
        bulk: "is this good to make in bulk?"
    },
    {
        _id: "6",
        name: "Crispy Buffalo Chicken Salad",
        image: "/images/buffalo-chicken-salad.jpg",
        description: "Spicy, crispy chicken tossed in a refreshing bed of veggies",
        source: "Paleo Running Momma",
        sourceURL: "https://www.paleorunningmomma.com/crispy-buffalo-chicken-salad-paleo-whole30-keto/",
        ingredients: [
            "food1",
            "food2",
            "food3"
        ],
        instructions: [
            "step 1 is...", 
            "step 2 is...",
            "step 3 is..."
        ],
        cuisine: "ex: korean, american, mexican",
        mealTime: "ex: breakfast vs. dinner vs. dessert",
        mealType: "Salad",
        temperature: "hot vs. cold",
        bulk: "is this good to make in bulk?"
    }
];

export default recipes;