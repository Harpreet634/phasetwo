let input = document.getElementById('myinput');
let add1 = document.getElementById('add')
let log = document.getElementById('log');

add1.onclick = inputsave; // save data click on button

function inputsave() { //create a function to save data
    if (input.value == "") {
        alert('please enter some value') //checking if data is inserted or not
    } else {
        let newt = document.querySelector('body'); //save data to a new element
        let element = document.createElement('p');
        newt.appendChild(element);

        let stext = input.value;
        element.innerHTML = stext;

        let cb = document.createElement('input'); //create a new element checkbox
        cb.type = 'checkbox';
        element.appendChild(cb);
        cb.onclick = clickcb;
        let dbtn = document.createElement('button'); //create a delete button
        dbtn.innerHTML = "DELETE";
        element.appendChild(dbtn);
        dbtn.onclick = btnd;
    }

    function clickcb(perform) { //get the parent item
        let s = perform.target.parentNode;
        // cut a line text while click on check box
        s.style.textDecoration = 'line-through';
        // provide the text at last
        s.parentNode.appendChild(s);
    }

    function btnd(perform) {
        let s = perform.target.parentNode; //remove the task from list
        s.parentNode.removeChild(s);
    }

}

/*
Created a function that gets your location using geolocation web api
*/
function geoFindMe() {

	// get values
  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');

// success function for geolocation get position
  function success(position) {
	// co-ordinates
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    status.textContent = '';
	
	// onclick google map button show location on google map
	mapLink.onclick = function() {
		var currentLocation = {lat: latitude, lng: longitude};
	var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: currentLocation})
	var marker = new google.maps.Marker({
    position: currentLocation,
    map: map,
    title: 'You are Here'
	});
	};
	mapLink.textContent = "GoogleMap";
  }


  function error() {
    status.textContent = 'Unable to retrieve your location';
  }

// getting geolocation
  if(!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}

// event listener for on click
document.querySelector('#find-me').addEventListener('click', geoFindMe);

