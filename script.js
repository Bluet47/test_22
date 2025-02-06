function calculateCO2() {
    const distance = parseFloat(document.getElementById('distance').value);
    const travelClass = document.getElementById('travelClass').value;
    const co2PerMile = 0.115; // CO2 in kg per mile

    if (isNaN(distance) || distance <= 0) {
        alert("Please enter a valid distance.");
        return;
    }

    // Flight class multipliers
    const classMultipliers = {
        economy: 1,
        business: 1.5,
        first: 2
    };

    if (!(travelClass in classMultipliers)) {
        alert("Please select a valid travel class.");
        return;
    }

    const co2Emissions = (distance * co2PerMile * classMultipliers[travelClass]).toFixed(2);

    // Alternative transport comparison
    const transportCO2 = compareTransportCO2(distance);

    // Carbon offset calculations
    const treesNeeded = calculateTreesNeeded(co2Emissions);

    // Update results
    document.getElementById('co2Amount').innerText = co2Emissions;
    document.getElementById('trainCO2').innerText = transportCO2.train;
    document.getElementById('electricCarCO2').innerText = transportCO2.electricCar;
    document.getElementById('treesNeeded').innerText = treesNeeded;

    // Show results and alternatives
    document.getElementById('resultBox').style.display = 'block';
    document.getElementById('alternativesBox').style.display = 'block';
}

function compareTransportCO2(distance) {
    const co2PerMile = {
        train: 0.03,
        electricCar: 0.02
    };

    return {
        train: (distance * co2PerMile.train).toFixed(2),
        electricCar: (distance * co2PerMile.electricCar).toFixed(2),
    };
}

function calculateTreesNeeded(co2Emission) {
    const co2PerTreePerYear = 22; // Average kg of CO2 absorbed per tree per year
    return Math.ceil(parseFloat(co2Emission) / co2PerTreePerYear);
}

// Event listeners (only run in browser environment)
if (typeof document !== 'undefined') {
    document.getElementById('calculate-co2-btn').addEventListener('click', () => {
        try {
            calculateCO2();
        } catch (error) {
            alert(error.message);
        }
    });

    document.getElementById('reset-co2-btn').addEventListener('click', () => {
        document.getElementById('co2-form').reset();
        document.getElementById('co2Amount').innerText = '';
        document.getElementById('trainCO2').innerText = '';
        document.getElementById('electricCarCO2').innerText = '';
        document.getElementById('treesNeeded').innerText = '';
    });
}

// Export functions for Jest testing
if (typeof module !== "undefined" && module.exports) {
    module.exports = { calculateCO2, compareTransportCO2, calculateTreesNeeded };
}
