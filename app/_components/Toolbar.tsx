import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

interface ToolbarProps {}

export default function Toolbar({}: ToolbarProps) {
  return (
    <div>
      <FontAwesomeIcon icon={faThumbsUp} className="fa-fw" />
    </div>
  );
}
