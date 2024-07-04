import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Button from "react-bootstrap/Button";
import TemplateCard from "../components/TemplateCard";
import "bootstrap/dist/css/bootstrap.min.css";

import { getTemplates } from "../services/template.service";


function Home() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const data = await getTemplates();
        setTemplates(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTemplates();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center gap-2 m-2 p-2">
        <NavLink to="/generate-workout">
          <Button variant="secondary" size="lg">
            Generate a workout for me
          </Button>
        </NavLink>
      </div>
      {!loading && (
        <div>
          <h1 className="text-center">Templates</h1>
          <div className="row m-2 p-2">
            {templates.map((template, index) => (
              <div key={index} className="col-6">
                <TemplateCard key={template.id} template={template} />
              </div>
            ))}
          </div>
        </div>
      )}
      <div style={{ height: "475px" }}></div>
    </>
  );
}
export default Home;