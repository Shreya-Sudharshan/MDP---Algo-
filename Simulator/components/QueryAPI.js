import BaseAPI, { methodType } from "./BaseAPI";

export default class QueryAPI extends BaseAPI {
  // Querying backend server 
  static query(obstacles, robotX, robotY, robotDir, callback) {
    /* 
		obstacles: the array of obstacles
		robot_x: the x coordinate of the robot
		robot_y: the y coordinate of the robot
		robot_dir: the direction of the robot
		retrying: whether the robot is retrying
	*/
    const content = {
      obstacles: obstacles,
      robot_x: robotX,
      robot_y: robotY,
      robot_dir: robotDir,
      retrying: false,
    };

    
    this.JSONRequest("/path", methodType.post, {}, {}, content)
      .then((res) => {
        if (callback) {
          callback({
            data: res,
            error: null,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        if (callback) {
          callback({
            data: null,
            error: err,
          });
        }
      });
  }
}
