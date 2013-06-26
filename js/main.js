
var AppViewModel = function() {
    var self = this;
    
    self.deviceready = ko.observable(false);

    // Observables
    self.acceleration = ko.observable({x: 0, y: 0, z: 0});
    

    // Initialize
    $(document).on("deviceready", function() {
        self.deviceready(true);

        // Update observable using a ticker
        navigator.accelerometer.watchAcceleration(
            self.acceleration,
            alert,
            {frequency: 100}
        );
    });
};

ko.applyBindings(new AppViewModel());
