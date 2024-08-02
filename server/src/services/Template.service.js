import Template from '../models/Template.model.js';

export default class TemplateService {
  createTemplate = async (data) => {
    try {
      const template = new Template(data);
      await template.save();
      return template;
    } catch (error) {
      throw new Error("Template creation failed", error.message);
    }
  };

  updateTemplate = async (id, templateData) => {
    try {
      const template = await Template.findByIdAndUpdate(id, templateData, {
        new: true,
      });
      return template;
    } catch (e) {
      throw new Error(e);
    }
  };

  deleteTemplate = async (id) => {
    try {
      const template = await Template.findByIdAndDelete(id);
      return `${template.name} has been deleted`;
    } catch (e) {
      throw new Error(e);
    }
  };

  getTemplate = async (id) => {
    try {
      const template = await Template.findById(id);
      return template;
    } catch (e) {
      throw new Error(e);
    }
  }

  getTemplates = async () => {
    try {
      const templates = await Template.find();
      return templates;
    } catch (e) {
      throw new Error(e);
    }
  }

}