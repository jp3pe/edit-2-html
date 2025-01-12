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

import styles from "@/app/styles.module.css";

interface ToolbarProps {}

export default function Toolbar({}: ToolbarProps) {
  return (
    <div className={styles.toolbar}>
      {/* TODO: Replace a tag into next Link */}
      <a href="#">
        <div className={styles["toolbar-info"]}>
          {/* TODO: 물음표 기호의 배경과 아이콘을 반전하는 방법 찾기 */}
          <FontAwesomeIcon
            icon={faCircleQuestion}
            style={{ color: "var(--arrow-color)" }}
          />
          <p>Info</p>
        </div>
      </a>
      {/* TODO: palets horizon line */}
      <p>Text</p>
      <FontAwesomeIcon
        icon={faAngleDown}
        style={{ color: "var(--arrow-color)" }}
      />
      <FontAwesomeIcon icon={faBold} />
      <FontAwesomeIcon icon={faItalic} />
      <FontAwesomeIcon icon={faUnderline} />
      <FontAwesomeIcon icon={faStrikethrough} />
      <FontAwesomeIcon icon={faCode} />
      <FontAwesomeIcon icon={faSquareRootVariable} />
      <div className={styles["toolbar-link"]}>
        <FontAwesomeIcon icon={faLink} />
        <FontAwesomeIcon
          icon={faAngleDown}
          style={{ color: "var(--arrow-color)" }}
        />
      </div>
      <div className={styles["toolbar-font-color"]}>
        <Image src={InsertFontIcon} alt={"A icon surrounded with a square."} />
        <FontAwesomeIcon
          icon={faAngleDown}
          style={{ color: "var(--arrow-color)" }}
        />
      </div>
      {/* TODO: palets horizon line */}
      <FontAwesomeIcon icon={faEllipsis} />
    </div>
  );
}
