//allows us to get location permission with their approval


const containerCurClass = document.querySelector('.container-current');
const h4 = document.createElement('h4');
const h5 = document.createElement('h5');
function curSuccess(position) {
    h4.textContent = `Latitute: ${position.coords.latitude} Longitude: ${position.coords.longitude}`;
    h5.textContent = `Accuracy ${position.coords.accuracy} meters`;
    containerCurClass.append(h4);
    containerCurClass.append(h5);
    console.log(position.coords)
}

function curError(err) {
    console.log(`Error Code: ${err.code} ${err.message}`);
}

const curOptions = {
    enableHighAccuracy: true, // Use GPS if available
    timeout: 1000, // Time to wait to stop trying for location
    maximumAge: 0, // Do not use a cached position
}
navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);

const latitude = 17.5042511;
const longitude = 78.3955875;

const containerWatchClass = document.querySelector('.container-watch');
// const h4 = document.createElement('h4');
// const h5 = document.createElement('h5');
function watchSuccess(position) {
    // h4.textContent = `Latitute: ${position.coords.latitude} Longitude: ${position.coords.longitude}`;
    // h5.textContent = `Accuracy ${position.coords.accuracy} meters`;
    // containerCurClass.append(h4);
    // containerCurClass.append(h5);
    if (target.latitude === position.coords.latitude
        && target.longitude === position.coords.longitude
    ) {
        const h4 = document.createElement('h4');
        h4.textContent = `You have reached your destination`;
        h4.style.color = "maroon";
        containerWatchClass.append(h4);
        navigator.geolocation.clearWatch(id);
    }
    console.log("Watch", position.coords)
}

function watchError(err) {
    console.log(`Error Code: ${err.code} ${err.message}`);
}

const watchOptions = {
    enableHighAccuracy: true, // Use GPS if available
    timeout: 1000, // Time to wait to stop trying for location
    maximumAge: 0, // Do not use a cached position
}
const id = navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions);
