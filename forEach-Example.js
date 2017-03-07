/*
This is the Array forEach example .
there are 2 arrays - shopping-cart1 and shopping-cart-2 with
two objects and two objects have two properties.

var arraylist= [
{
    property1:value1,
    property2:value2
},
{
    property1:value1,
    property2:value2
}
];

using forEach loop , retrieving array values

function functionname(item,index,array){
    console.log(item);
}

arraylist.forEach(functionname);


*/

var total_cost = 0;

        function add_to_total_cost(amount,index,array) {
            console.log(amount);
            console.log(index);
            console.log(array);
            console.log(amount.cost);
            total_cost += amount.cost;
        }

        var shopping_cart_1 = [
            {
                item: 'shirt',
                cost: 22
            },
            {
                item: 'shorts',
                cost: 26
            }
        ];

        var shopping_cart_2 = [
            {
                item: 'cereal',
                cost: 4
            },
            {
                item: 'milk',
                cost: 3
            },
            {
                item: 'eggs',
                cost: 2
            }
        ]

        shopping_cart_1.forEach(add_to_total_cost);
        shopping_cart_2.forEach(add_to_total_cost);

        console.log(total_cost);