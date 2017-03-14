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
  this.search= ko.observable(''); // search box
  Model.forEach(function(catItem) // adding cat entries in catList
  {
    self.catList.push(new Cat(catItem))
  })
  console.log(this.catList());
  this.visibleCats = ko.observableArray(); // visible cats
  this.catList().forEach(function(cats) { // push the catList array items into visibleCats array
    self.visibleCats.push(cats);
 });
 console.log(this.visibleCats());

  this.filter= ko.computed(function() {
        var filter = this.search().toLowerCase();
        self.visibleCats.removeAll();
        console.log(filter);
        if (!filter) {
            //console.log(self.catList());
            return self.visibleCats();
            //return self.catList();
        }
        else
        {
            return ko.utils.arrayFilter(this.catList(), function(item) {
                console.log(item.name());
                console.log((item.name().toLowerCase().indexOf(filter) != -1));
                if(item.name().toLowerCase().indexOf(filter) != -1){
                    self.visibleCats.push(item);
                }

        });
    }
  }, this);

   this.reset = function() {
        this.search("");
    }

}

ko.applyBindings(new ViewModel())
