// example -1 Introduction
/*
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
*/

//example 2 Lists and Collections

// Class to represent a row in the seat reservations grid
// a simple JavaScript class constructor that stores a passenger name with a meal selection
function SeatReservation(name, initialMeal) {
    var self = this;
    self.name = name;
    self.meal = ko.observable(initialMeal);

    self.formattedPrice = ko.computed(function() {
        var price = self.meal().price;
        return price ? "$" + price.toFixed(2) : "None";
    });
}

// Overall viewmodel for this screen, along with initial state
function ReservationsViewModel() {
    var self = this;

    // Non-editable catalog data - would come from the server
    // a JavaScript object providing meal data
    self.availableMeals = [
        { mealName: "Standard (sandwich)", price: 0 },
        { mealName: "Premium (lobster)", price: 34.95 },
        { mealName: "Ultimate (whole zebra)", price: 290 }
    ];

    // Editable data
    // an array holding an initial collection of SeatReservation instances.
    // ko.observable Array - it can automatically trigger UI updates whenever items are added or removed.
    self.seats = ko.observableArray([
        new SeatReservation("Anum", self.availableMeals[1]),
        new SeatReservation("Babli", self.availableMeals[2])
    ]);

    self.addSeat = function() {
        self.seats.push(new SeatReservation("", self.availableMeals[0]));
    }

    self.removeSeat = function(seat) {
        self.seats.remove(seat)
    }
}



// Activates knockout.js
//ko.applyBindings(new AppViewModel());
ko.applyBindings(new ReservationsViewModel());

