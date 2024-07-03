import TemplateService from "../services/Template.service.js";

export default class TemplateController {
  #templateService;

  constructor(templateService = new TemplateService()) {
    this.#templateService = templateService;
  }

  createTemplate = async (req, res) => {
    const data = req.body;
    try {
      const template = await this.#templateService.createTemplate(({ ...data, createdBy: req.body.user}));
      res.status(200).send({ message: "Template created successfully", template });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  updateTemplate = async (req, res) => {
    const data = req.body;
  try {
    const template = await this.#templateService.updateTemplate(req.body.id, data);
    res.status(200).json(template);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  };

  deleteTemplate = async (req, res) => {
    const id = req.body.id;
    try {
      const template = await this.#templateService.deleteTemplate(id);
      res.status(200).send({ message: template });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

}