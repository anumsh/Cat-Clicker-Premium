
/* ======= Model ======= */

var model = {
    currentCat: null,
    cats: [
        {
            clickCount : 0,
            name : 'Tabby',
            imgSrc : 'img/cat1.jpg'
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'img/cat2.jpg'
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'img/cat3.jpg'
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'img/cat4.jpg'
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'img/cat5.jpg'
        }
    ]
};

console.log(model.currentCat);
for(var i=0; i< model.cats.length; i++) {
    ('#cat-list').append(model.cats[i]);
}
