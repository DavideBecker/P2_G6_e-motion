"use strict";function updateAmountOfCars(t){if(environment.simulation.carAmount+=t,t>0)for(var s=0;s<t;s++)new Car;if(t<0){var r=cars.splice(0,-1*t);console.log("removed",-1*t,"cars",r)}}function updateAmountOfTrucks(t){if(environment.simulation.truckAmount+=t,t>0)for(var s=0;s<t;s++)new Truck;if(t<0){var r=trucks.splice(0,-1*t);for(var a in r)a.workTarget&&a.isBusy&&addToQueue(a.workTarget)}}function updateAverageStuckCars(){$("#stuckCarsAverage").html(round(environment.statistics.stuckCarsTotal/environment.statistics.daysPassed*10)/10),$("#stuckCarsToday").html(environment.statistics.stuckCarsToday),$("#stuckCarsTotal").html(environment.statistics.stuckCarsTotal)}function updateTruckUptime(t){}
//# sourceMappingURL=Bridges.js.map