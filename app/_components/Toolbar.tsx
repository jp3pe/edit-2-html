import Image from "next/image";

import classNames from "classnames";
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

interface ToolbarProps {
  coordinateY: number;
}

export default function Toolbar({ coordinateY: coordinateY }: ToolbarProps) {
  return (
    <div
      className={styles.toolbar}
      // TODO: Remove hardcoded value in style
      style={{
        top: `${coordinateY - 80}px`,
      }}
    >
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
      <div
        className={classNames(
          styles["toolbar-text"],
          styles["horizontal-line"]
        )}
      >
        <p>Text</p>
        <FontAwesomeIcon
          icon={faAngleDown}
          style={{ color: "var(--arrow-color)" }}
          className={styles["down-arrow-margin"]}
        />
      </div>
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
          className={styles["down-arrow-margin"]}
        />
      </div>
      <div className={styles["toolbar-font-color"]}>
        <Image
          src={InsertFontIcon}
          alt={"A icon surrounded with a square."}
          className={styles["toolbar-font-color-icon"]}
        />
        <FontAwesomeIcon
          icon={faAngleDown}
          style={{ color: "var(--arrow-color)" }}
          className={styles["down-arrow-margin"]}
        />
      </div>
      <FontAwesomeIcon
        icon={faEllipsis}
        className={styles["horizontal-line"]}
      />
    </div>
  );
}
