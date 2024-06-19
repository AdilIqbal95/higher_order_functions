const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype
ScranAdvisor.prototype.count = function () {
    return this.restaurants.length;
}

ScranAdvisor.prototype.findByName = function (name) {
    for (let restaurant of this.restaurants) {
        if (restaurant.name === name) {
            return restaurant;
        }
    }
    
}

ScranAdvisor.prototype.getNameOfAllRestaurants = function () {
    return this.restaurants.map(restaurant => restaurant.name)
}

ScranAdvisor.prototype.getNameOfAllRestaurantsInGlasgow = function () {
    let result = [];
    
    for (restaurant of this.restaurants) {
        let locationObj =  Object.entries(restaurant.location);
        let town = locationObj[1][1]
        
        if (town == "Glasgow") {
            result.push(restaurant);
        }
    }

    return result;
}

ScranAdvisor.prototype.getMostCommonCuisine = function () {
    // Get manageable list of cuisines 
    let cuisinesArr = this.restaurants.map(restaurant => restaurant.cuisines)
    let cuisinesArrFlattened = cuisinesArr.flat()
    // Remove dups from this list
    let uniqueCuisines = [...new Set(cuisinesArrFlattened)]; // obtains unique values then converts back to Array
    // Create object of cuisines & count
    let uniqueCuisinesObj = uniqueCuisines.reduce((a, v) => ({ ...a, [v]: 0}), {});

    // TODO: 
    // Complete remaining ans

    return uniqueCuisinesObj;
}

ScranAdvisor.prototype.searchByName = function (substring) {
    let substringLower = substring.toLowerCase();
    let result = []

    for (restaurant of this.restaurants) {
        if (restaurant.name.toLowerCase().includes(substringLower)) {
            result.push(restaurant);
        }
    }

    return result;
}

module.exports = ScranAdvisor;