import AuthService from "../services/Auth.service.js";

export default class AuthController {
  #authService;

  constructor(authService = new AuthService()) {
    this.#authService = authService;
  }

  register = async (req, res) => {
    const { username, password, } = req.body;
    try {
      const user = await this.#authService.register({ username, password });
      res
        .header("X-Access-Token", user.accessToken)
        .status(200)
        .send({ message: `Registration successful`, user });
    } catch (error) {
      res.status(400).send({ message: error.message, user: null });
    }
  };

  login = async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await this.#authService.login({ username, password });
      res
        .header("X-Access-Token", user.accessToken)
        .status(200)
        .send({ message: `Login successful`, user });
    } catch (error) {
      res.status(401).send({ message: error.message});
    }
  };

  getProfile = async (req, res) => {
    try {
      const user = await this.#authService.getProfile(req.id);
      res.status(200).send({ user });
    } catch (error) {
      res.status(401).send({ message: error.message });
    }
  };
}
