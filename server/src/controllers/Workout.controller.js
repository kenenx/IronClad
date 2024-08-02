import WorkoutService from "../services/Workout.service.js";

export default class WorkoutController {
  #workoutService;

  constructor(workoutService = new WorkoutService()) {
    this.#workoutService = workoutService;
  }

  createWorkout = async (req, res) => {
    const data = req.body;
    try {
      const workout = await this.#workoutService.createWorkout({
        ...data,
        user: req.body.user,
        date : new Date()
      });
      res.status(200).send({ message: "Workout created successfully", workout });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  updateWorkout = async (req, res) => {
    const data = req.body;
    try {
      const workout = await this.#workoutService.updateWorkout(req.body.id, data);
      res.status(200).json(workout);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }

  };

  deleteWorkout = async (req, res) => {
    const id = req.body.id;
    try {
      const workout = await this.#workoutService.deleteWorkout(id);
      res.status(200).send({ message: workout });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  getWorkout = async (req, res) => {
    const id = req.params.id;
    try {
      const workout = await this.#workoutService.getWorkout(id);
      res.status(200).json(workout);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  getUserWorkouts = async (req, res) => {
    const userId = req.params.id;
    try {
      const workouts = await this.#workoutService.getUserWorkouts(userId);
      res.status(200).json(workouts);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

}