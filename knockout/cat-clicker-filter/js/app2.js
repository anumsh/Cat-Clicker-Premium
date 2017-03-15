var Model = [
  {
    clickCount: 0,
    name: 'Bella sweet'
  },
  {
    clickCount: 0,
    name: 'Luna kala'

  },
  {
    clickCount: 0,
    name: 'Orea soft'
  },
  {
    clickCount: 0,
    name: 'Shadow eye'
  },
  {
    clickCount: 0,
    name: 'Chloe lee'
  }
];

var Cat = function(data){
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  };


var ViewModel = function(){
  var self = this;
  this.catList = ko.observableArray([]); // cat array
  this.search= ko.observable('');// search box
  this.clickCount=ko.observable(0);
  Model.forEach(function(catItem) // adding cat entries in catList
  {
    self.catList.push(new Cat(catItem))
  })
  this.currentCat = ko.observable(this.catList()[0]);
  //console.log("current cat- " +this.currentCat().name());
  //console.log("click count value-"+this.currentCat().clickCount());
  //console.log(" catList- " +this.catList());

  this.incrementCounter = function(){
    //console.log(this.name());
    this.clickCount(this.clickCount() + 1);
};

/*
2nd method to increment the counter value
this.incrementCounter = function(count){
  console.log(count.name());
  count.clickCount(count.clickCount() + 1);
};
*/

  this.filter= ko.computed(function() {
        var filter = this.search().toLowerCase(); // store the search box value in filter variable
        //console.log(filter);
        if (!filter) {
            return self.catList(); // if there is no user input, return the self.catList() observableArray
        }
        else
        {
            // ko.utils.arrayFilter method returns a matching subset of items
            return ko.utils.arrayFilter(this.catList(), function(item) {
                //console.log("the values are " + (item.name().toLowerCase()) + " " + filter +  " " + (item.name().toLowerCase().indexOf(filter) != -1) + " " +  (item.name().toLowerCase().indexOf(filter)) );
                return (item.name().toLowerCase().indexOf(filter) != -1);  // match? true else false
        });
    }
  }, this);

   this.reset = function() {
        self.search("");
    }

}

ko.applyBindings(new ViewModel())
