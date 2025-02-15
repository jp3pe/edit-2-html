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

interface ToolbarProps {
  coordinateY: number;
  displayPropertyValue: string;
}

export default function Toolbar({
  coordinateY,
  displayPropertyValue,
}: ToolbarProps) {
  return (
    <div className="toolbar">
      {/* TODO: Replace a tag into next Link */}
      <a href="#">
        <div className="info">
          {/* TODO: 물음표 기호의 배경과 아이콘을 반전하는 방법 찾기 */}
          <FontAwesomeIcon
            icon={faCircleQuestion}
            style={{ color: "var(--arrow-color)" }}
          />
          <p>Info</p>
        </div>
      </a>
      <div className="text horizontal-line">
        <p>Text</p>
        <FontAwesomeIcon
          icon={faAngleDown}
          style={{ color: "var(--arrow-color)" }}
          className="down-arrow-margin"
        />
      </div>
      <FontAwesomeIcon icon={faBold} />
      <FontAwesomeIcon icon={faItalic} />
      <FontAwesomeIcon icon={faUnderline} />
      <FontAwesomeIcon icon={faStrikethrough} />
      <FontAwesomeIcon icon={faCode} />
      <FontAwesomeIcon icon={faSquareRootVariable} />
      <div className="link">
        <FontAwesomeIcon icon={faLink} />
        <FontAwesomeIcon
          icon={faAngleDown}
          style={{ color: "var(--arrow-color)" }}
          className="down-arrow-margin"
        />
      </div>
      <div className="font-color">
        <Image
          src={InsertFontIcon}
          alt={"A icon surrounded with a square."}
          className="font-color-icon"
        />
        <FontAwesomeIcon
          icon={faAngleDown}
          style={{ color: "var(--arrow-color)" }}
          className="down-arrow-margin"
        />
      </div>
      <FontAwesomeIcon icon={faEllipsis} className="horizontal-line" />

      <style jsx>{`
         {
          /* TODO: Remove hardcoded value for plus in style */
        }
        .toolbar {
          position: absolute;
          z-index: 2;
          top: ${coordinateY - 50}px;
          left: calc(50% - var(--toolbar-width) / 2);
          display: ${displayPropertyValue};
          justify-content: space-between;
          align-items: center;
          height: 50px;
          width: var(--toolbar-width);
          padding-left: 1rem;
          padding-right: 0.5rem;
          border: solid 1px var(--arrow-color);
          border-radius: 10px;
          font-size: 2rem;
          background-color: white;
        }

        .toolbar > a {
          display: flex;
          height: 100%;
        }

        .info {
          width: 78px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .info > p {
          margin-left: 0.5rem;
        }

        .text {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .link {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .font-color {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .font-color-icon {
          height: 40px;
        }

        .horizontal-line {
          padding-left: 0.5rem;
          border-left: 1px solid var(--arrow-color);
        }

        .down-arrow-margin {
          margin-left: 0.5rem;
        }
      `}</style>
    </div>
  );
}
