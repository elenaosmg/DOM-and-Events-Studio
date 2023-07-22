// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load",function() {

    let altitude = 0;
    let rocketPositionX = 0;
    let rocketPositionY = 0;

    //BUTTONS
    const takeoffButton = document.getElementById('takeoff');
    const landButton = document.getElementById ('landing');
    const abortButton = document.getElementById('missionAbort');
    // const upButton = document.getElementById('up');
    // const downButton = document.getElementById('down');
    // const rightButton = document.getElementById('right');
    // const leftButton = document.getElementById('left');
     
    const rocketImg = document.getElementById ('rocket');


    //AREAS
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const shuttleHeight = document.getElementById('spaceShuttleHeight')

    takeoffButton.addEventListener("click",function () {
        let shouldTakeOff = window.confirm ("Confirm that the shuttle is ready for takeoff.");
        if (shouldTakeOff) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            altitude = 10000;
            shuttleHeight.innerHTML = altitude;
        }         
    }) ;

    landButton.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged");
        flightStatus.innerHTML = "The shuttle has landed.";
        rocketReset ();

    });
    
    abortButton.addEventListener("click",function(){
        let shouldAbort = window.confirm("Confirm that you want to abort the mission.");
        if (shouldAbort) {
            flightStatus.innerHTML = "Mission aborted.";
            rocketReset ();
        }
    });

    //event deligation
    document.addEventListener ("click",function(event) {
        let bkgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue(('width')));
        console.log('background width is', bkgWidth)


        if (event.target.id === "left" && rocketPositionX > -(bkgWidth/2-40) ) {
            rocketPositionX -=10;
            rocketImg.style.marginLeft = rocketPositionX +"px";
            
        }
        if (event.target.id === "right" && rocketPositionX < (bkgWidth/2-40)) {
            rocketPositionX +=10;
            rocketImg.style.marginLeft = rocketPositionX +"px";

        }
        if (event.target.id === "up" && altitude <250000) {
            rocketPositionY +=10;
            rocketImg.style.marginBottom = rocketPositionY +"px";
            altitude +=10000;
            shuttleHeight.innerHTML = altitude;

        }
        if (event.target.id === "down" && altitude > 0) {
            rocketPositionY -=10;
            rocketImg.style.marginBottom = rocketPositionY +"px";
            altitude -=10000;
            shuttleHeight.innerHTML = altitude;
        }


    })

    function rocketReset (){
        shuttleBackground.style.backgroundColor = "green";
        altitude =0;
        shuttleHeight.innerHTML = altitude;
        let rocketPositionX = 0;    
        let rocketPositionY = 0;
        rocketImg.style.marginLeft = rocketPositionX +"px"
        rocketImg.style.marginBottom = rocketPositionY +"px"

    }



        
    })


    

  ;


