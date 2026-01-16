import { useParams } from "react-router-dom";
import { getModule } from "../api";

export default function Module() {
  const { diplomaId, moduleId } = useParams();
  const module = getModule({ diplomaId, moduleId });

  return (
    <>
      <h3>{module.name}</h3>
      <p>{module.description}</p>
      <p><strong>Credits:</strong> {module.credits}</p>
    </>
  );
}
