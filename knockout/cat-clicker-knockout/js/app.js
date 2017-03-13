var Cat=function() {
    this.clickCount= ko.observable(0);
    this.name= ko.observable("Tabby");
    this.imageSrc= ko.observable("img/cat1.jpg");
    this.nickNames=ko.observableArray(['catty1','catty2','catty3','catty4','catty5']);

    this.title=ko.computed(function(){
      var title;
      var click=this.clickCount();
      if(click < 10){
        title="newborn";
      }
      else if(click < 50){
        title="infant";
      }
      else if(click < 100){
        title="child";
      }
      else if(click < 200){
        title="teen";
      }
      else if(click < 500){
        title="ninja";
      }
      return title;
    }, this);
};


var ViewModel=function() {
  var self=this;
  this.currentCat= ko.observable(new Cat());
  this.incrementCount=function() {
    return self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
};


ko.applyBindings(new ViewModel());
