const ingredients = [
    {
        title: "carrot",
        protein: 27.5,
        carbohydrates: 12.3,
        fats: 3.0,
        kilocalories: 112,
    },
    {
        title: "meat",
        protein: 30,
        carbohydrates: 4.0,
        fats: 8.0,
        kilocalories: 155,
    },
    {
        title: "potato",
        protein: 90,
        carbohydrates: 7.0,
        fats: 12.0,
        kilocalories: 260,
    },
    {
        title: "mayo",
        protein: 40,
        carbohydrates: 6.0,
        fats: 15.0,
        kilocalories: 100,
    },
];
let dishes = [
    {
        id: 1,
        title: 'Запеканка',
        gram: 350,
        ingredients: [
            {
                ingredient: 1,
                gram: 10,
            }, {
                ingredient: 0,
                gram: 15,
            },
            {
                ingredient: 2,
                gram: 50,
            },
            {
                ingredient: 3,
                gram: 25,
            },
        ],
    },
    {
        id: 2,
        title: 'Салат',
        gram: 350,
        ingredients: [
            {
                ingredient: 0,
                gram: 50,
            }, {
                ingredient: 1,
                gram: 85,
            },
            {
                ingredient: 2,
                gram: 75,
            },
            {
                ingredient: 3,
                gram: 40,
            },

        ],
    },
    {
        id: 2,
        title: 'Вареники',
        gram: 350,
        ingredients: [
            {
                ingredient: 1,
                gram: 20,
            }, {
                ingredient: 2,
                gram: 40,
            },
            {
                ingredient: 0,
                gram: 95,
            },
        ],
    }
]

function calcNutrition(value, gram) {
    return (100 / gram) * value;
}

function describeDish(dish) {
    const describedDish = dish;

    for (let i = 0; i < dish.ingredients.length; i++) {
        const ingredientId = dish.ingredients[i].ingredient;
        const ingredientValue = ingredients[ingredientId];

        describedDish.ingredients[i].title = ingredientValue.title;
        describedDish.ingredients[i].kilocalories = calcNutrition(ingredientValue.kilocalories, dish.ingredients[i].gram);
        describedDish.ingredients[i].fats = calcNutrition(ingredientValue.fats, dish.ingredients[i].gram);
        describedDish.ingredients[i].protein = calcNutrition(ingredientValue.protein, dish.ingredients[i].gram);
        describedDish.ingredients[i].carbohydrates = calcNutrition(ingredientValue.carbohydrates, dish.ingredients[i].gram);

    }
    return describedDish;
}
function describeAllDishes() {
    const result = [];
    for (let i = 0; i < dishes.length; i++) {
        result.push(describeDish(dishes[i]));
    }
    return result;
}


console.dir(describeAllDishes());