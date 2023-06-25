import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

export const menuArray = [
    {
        name: "Classic Caser Salad",
        ingredients: ["iceberg lettuce, carrots, parmesan cheese, egg, croutons, caser dressing"],
        price: 14,
        emoji: "🥗",
        quantity: 0,
        uuid: uuidv4()
    },
    {
        name: "Tortellini Soup",
        ingredients: ["sasuage, celery, caroot, garlic, yellow onion"],
        price: 8,
        emoji: "🥘",
        quantity: 0,
        uuid: uuidv4()
    },
    {
        name: "Chicken Flatbread",
        ingredients: ["chicken, lettuce, tomato, cheese, mushrooms"],
        price: 12,
        emoji: "🥙",
        quantity: 0,
        uuid: uuidv4()

    },
    
        {
        name: "Water",
        ingredients: ["Hydrogen and Oxygen"],
        price: 3,
        emoji: "🍼",
        quantity: 0,
        uuid: uuidv4()
    }
]