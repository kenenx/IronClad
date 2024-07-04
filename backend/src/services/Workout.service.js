import Workout from '../models/Workout.model.js';

export default class WorkoutService {
  createWorkout = async (data) => {

    try {
      const workout = new Workout(data);
      await workout.save();
      return workout;
    } catch (error) {
      console.log(error);
      throw new Error("Workout creation failed", error.message);
    }
  };

  updateWorkout = async (id, workoutData) => {
    try {
      const workout = await Workout.findByIdAndUpdate(id, workoutData, {
        new: true,
      });
      return workout;
    } catch (e) {
      throw new Error(e);
    }
  };

  deleteWorkout = async (id) => {
    try {
      const workout = await Workout.findByIdAndDelete(id);
      return `${workout.id} has been deleted`;
    } catch (e) {
      throw new Error(e);
    }
  };

  getWorkout = async (id) => {
    try {
      const workout = await Workout.findById(id);
      return workout;
    } catch (e) {
      throw new Error(e);
    }
  }

  getUserWorkouts = async (userId) => {
    try {
      console.log(userId);
      const workouts = await Workout.find({ user: userId });
      return workouts;
    } catch (e) {
      throw new Error(e);
    }
  }

}