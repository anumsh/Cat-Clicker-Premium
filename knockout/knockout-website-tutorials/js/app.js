// example -1

// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    //ko.observable (like constructor setting default values)
    this.firstName = ko.observable("anum");
    this.lastName = ko.observable("sharma");
    // ko.computed
    this.fullName= ko.computed(function() {
        return this.firstName() +' '+ this.lastName();
    }, this);
    // capitalize name
    this.capitalizeLastName = function() {
        var currentVal = this.lastName();        // Read the current value
        this.lastName(currentVal.toUpperCase()); // Write back a modified value
    };
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());