let restaurant = {
  name: "Courtiyard",
  guestCapacity: 100,
  guestCount: 0,
  checkAvailablity: function(partySize) {
    let currentSeats = this.guestCapacity - this.guestCount;
    return partySize <= currentSeats;
  }
};

let setParty = function(partySize) {
  restaurant.guestCount = this.guestCount + partySize;
};
let resetParty = function(partySize) {
    restaurant.guestCount = this.guestCount - partySize;
};

console.log(restaurant.checkAvailablity(70));
setParty(50);
console.log(restaurant.checkAvailablity(70));
resetParty(30);
console.log(restaurant.checkAvailablity(70));
