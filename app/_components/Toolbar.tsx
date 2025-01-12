import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBold,
  faCircleQuestion,
  faCode,
  faEllipsis,
  faItalic,
  faLink,
  faSquareRootVariable,
  faStrikethrough,
  faUnderline,
} from "@fortawesome/free-solid-svg-icons";
import InsertFontIcon from "@/public/icons/font-color-icon.svg";

interface ToolbarProps {}

export default function Toolbar({}: ToolbarProps) {
  return (
    <div>
      <div>
        <a>
          {/* TODO: 물음표 기호의 배경과 아이콘을 반전하는 방법 찾기 */}
          <FontAwesomeIcon
            icon={faCircleQuestion}
            style={{ color: "var(--arrow-color)" }}
          />
          <p>Info</p>
        </a>
      </div>
      {/* TODO: palets horizon line */}
      <div>
        <p>Text</p>
        <FontAwesomeIcon icon={faAngleDown} style={{ color: "var(--arrow-color)" }} />
      </div>
      <FontAwesomeIcon icon={faBold} />
      <FontAwesomeIcon icon={faItalic} />
      <FontAwesomeIcon icon={faUnderline} />
      <FontAwesomeIcon icon={faStrikethrough} />
      <FontAwesomeIcon icon={faCode} />
      <FontAwesomeIcon icon={faSquareRootVariable} />
      <div>
        <FontAwesomeIcon icon={faLink} />
        <FontAwesomeIcon icon={faAngleDown} style={{ color: "var(--arrow-color)" }} />
      </div>
      <div>
        <Image src={InsertFontIcon} alt={"A icon surrounded with a square."} />
        <FontAwesomeIcon icon={faAngleDown} style={{ color: "var(--arrow-color)" }} />
      </div>
      {/* TODO: palets horizon line */}
      <FontAwesomeIcon icon={faEllipsis} />
    </div>
  );
}
