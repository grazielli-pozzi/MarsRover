// Rover object goes here:
let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

let grid = [
  [0, "R", "O", 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, "O", 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

// ======================

function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
  // console.log(rover);
}

function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  // console.log(rover);
}


function moveForward(rover) {
  if (rover.x > -1 && rover.y > -1){
    if (grid[rover.x][rover.y] === "R") {
      console.log("There is another rover here");
    }
    if (grid[rover.x][rover.y] === "O") {
      console.log("There is an obstacle here");
    } 
    if(grid[rover.x][rover.y] === 0) {
      switch (rover.direction) {
        case "N":
          rover.y -= 1;
          break;
        case "E":
          rover.x += 1;
          break;
        case "S":
          rover.y += 1;
          break;
        case "W":
          rover.x -= 1;
          break;
      }
      rover.travelLog.push(rover.x, rover.y);
    }

  }else {
      console.log ("Do not leave the grid. Invalid command");
    }


  // console.log(rover);
}

function moveBackward () {
  
  if (rover.x > -1 && rover.y > -1){
    if (grid[rover.x][rover.y] === "R") {
      console.log("There is another rover here");
    }
    if (grid[rover.x][rover.y] === "O") {
      console.log("There is an obstacle here");
    } 
    if(grid[rover.x][rover.y] === 0) {
    switch (rover.direction) {
      case "N":
        rover.y += 1;
        break;
      case "E":
        rover.x -= 1;
        break;
      case "S":
        rover.y -= 1;
        break;
      case "W":
        rover.x += 1;
        break;
    }
    rover.travelLog.push(rover.x, rover.y);
  }
  }else {
      console.log ("Do not leave the grid. Invalid command");
    }
}


function Commands(command) {
  for (let i=0; i<command.length; i++){
    if(command[i] === "f" || command[i] === "r" || command[i] === "l" || command[i] === "b"){
      switch (command[i]) {
        case "f":
          moveForward(rover);
          break;
        case "r":
          turnRight(rover);
          break;
        case "l":
          turnLeft(rover);
          break;
        case "b":
          moveBackward(rover);
          break;
      }
    } else {
      console.log ("Invalid command");
    }

  }
  console.log(rover);
}

Commands ("rf");