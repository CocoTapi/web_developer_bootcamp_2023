/**
 * Array of objects
 * Use this type of data structure if you want to ENSURE the order is correct
 * and you want to output/use/list all or most of the data
 */
let favFood = [
    {
        name: "Zack",
        food: [
            "pizza",
            "dumpling",
            "curry"
        ]
    },
    {
        name: "Shiori",
        food: [
            "sushi",
            "ice cream",
            "steak"
        ]
    },
    {
        name: "Dodger",
        food: [
            "salmon",
            "chicken"
        ]
    }
]

for (const favs of favFood) {
    console.log(favs.name);
}

/**
 * Console Output:
 * 1. "Zack"
 * 2. "Shiori"
 * 3. "Dodger"
 */

for (const favs of favFood) {
    if (favs.name == "Dodger") {
        console.log(favs.food);
    }
    console.log(favs.name)
}

/**
 * Console Output
 * 1. "Zack"
 * 2. "Shiori"
 * 3. [
 * "salmon",
 * "chicken"
 * ]
 * "Dodger"
 */


/**
 * Object/Map
 * Use this type of data structure if you want to fetch INDIVIDUAL items,
 * but, be careful because the order CAN be incorrect. Also, uses more space than arrays.
 */
let favFoodObj = {
    "Zack": [
        "pizza",
        "dumpling",
        "curry"
    ],
    "Shiori": [
        "sushi",
        "ice cream",
        "steak"
    ],
    "Dodger": [
        "salmon",
        "chicken"
    ]
}


try { //User inputs "Dodger"
    const user = prompt("please input the name of the person you want to know their favorite food");
    const favoriteFoodList = favFoodObj[user];
    if (!favoriteFoodList) {
        console.log(`User: ${user} not found, so we cannot fetch their favorite food.`);
    } else {
        throw `${user}'s favorite food is: ${favoriteFoodList}`;
    }
} catch (error) {
    console.log(`ERROR: ${error}`);
}


/**
 * Dodger's favorite food is: 
 * [
 *    "salmon",
      "chicken"
 * ]
 */