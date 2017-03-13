var initialCats = [
  {
    clickCount: 0,
    name: 'Cat1',
    imgSrc: 'img/cat1.jpg',
    level: "Newborn",
    nickname: ["catty1", "catty2"]
  },
  {
    clickCount: 0,
    name: 'Cat2',
    imgSrc: 'img/cat2.jpg',
    level: "Newborn",
    nickname: ["catty22","catty23"]
  },
  {
    clickCount: 0,
    name: 'Cat3',
    imgSrc: 'img/cat3.jpg',
    level: "Newborn",
    nickname: ["catty33", "catty32"]
  },
  {
    clickCount: 0,
    name: 'Cat4',
    imgSrc: 'img/cat4.jpg',
    level: "Newborn",
    nickname: ["catty44","catty42"]
  },
  {
    clickCount: 0,
    name: 'Cat5',
    imgSrc: 'img/cat5.jpg',
    level: "Newborn",
    nickname: ["catty55","catty52","catty54"]
  }
];

var Cat = function(data){
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc)
  this.level = ko.observable(data.level);
  this.nickname= ko.observableArray(data.nickname);
  this.title=ko.computed(function(){
      var title = this.level;
      var click=this.clickCount();
      if(click < 10){
        return title("newborn");
      }
      else if(click < 50){
        return title("infant");
      }
      else if(click < 100){
        return title("child");
      }
      else if(click < 200){
        return title("teen");
      }
      else if(click < 500){
        return title("ninja");
      }
    }, this);
  };


var ViewModel = function(){
  var self = this;
  this.catList = ko.observableArray([]);
  console.log(this.catList);
  initialCats.forEach(function(catItem)
  {
    self.catList.push(new Cat(catItem))
  })

  this.currentCat = ko.observable(this.catList()[0]);
  console.log(this.currentCat);

  this.incrementCounter = function(){
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

  this.switchCat = function(cat){
    self.currentCat(cat);
    console.log(self.currentCat(cat));
  }
}

ko.applyBindings(new ViewModel())