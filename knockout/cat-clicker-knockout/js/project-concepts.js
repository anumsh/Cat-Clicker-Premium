var SimpleListModel = function(items)
{
    this.items = ko.observableArray(items);
    this.itemToAdd = ko.observable("");
    console.log(this.itemToAdd);
    this.addItem = function()
    {
        if (this.itemToAdd() != "")
        {
            this.items.push(this.itemToAdd()); // Adds the item. Writing to the "items" observableArray causes any associated UI to update.
            this.itemToAdd(""); // Clears the text box, because it's bound to the "itemToAdd" observable
    }
}.bind(this);  // Ensure that "this" is always this view model
};

ko.applyBindings(new SimpleListModel(["Alpha", "Beta", "Gamma"]));

/*
 1. make am array - this.items = ko.observableArray(items)
 2. ok , then you need a input box to add the item so,
 add it in this variable - itemToAdd=ko.observable("") which is empty
 3. make a function for adding items (addItem) .
 4. In addItem method:
  check if the input box is not empty. if we type some
  value - dsgs, then add button button is enable + add the value
  in drop list.
   item To Add value will added to items array
5. activate the knockout : ko.applyBindings(new SimpleListModel(["Alpha", "Beta", "Gamma"]));

How to check the values in console:
1. open the console.
2. type   var vm = ko.dataFor(document.body);
3. type vm
4. type table(vm.items());

0: "Alpha"
1: "Beta"
2: "Gamma"
3: "dfdf"
4: "dsds"
5: "dsds"
length: 6

5. vm.items();
["Alpha", "Beta", "Gamma", "fff", "fff", "dfdf", "dfd", "dfd"]
6.  vm.itemToAdd();
""
7. vm.addItem();
undefined

8. vm.items;
function: d(){if(0<
arguments.length)
return d.Pa(c,arguments[0])&&(d.X(),c=arguments[0],d.W()),this;a.k.Jb(d);return c}
*/