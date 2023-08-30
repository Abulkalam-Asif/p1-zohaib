import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Button = ({
  icon,
  onClick,
  iconSize,
  iconClass,
  text,
  textSize,
  type,
  className,
  specialPadding,
  isHover,
  value,
  dataMessage,
}) => {
  // icon - provide the fontawesome icon like "faUser"
  // iconSize - xs-sm-...-10x
  // text - text to be displayed in the link
  // type - {darkBlueFilled, lightBlueFilled, extraLightBlueFilled, darkBlueOutlined}

  let typeStyles = "";
  if (type === "darkBlueFilled") {
    typeStyles = "bg-darkBlue text-white hover:bg-lightBlue";
  } else if (type === "lightBlueFilled") {
    typeStyles = "bg-lightBlue text-white";
  } else if (type === "extraLightBlueFilled") {
    typeStyles = `bg-extraLightBlue text-darkBlue ${
      isHover && "hover:bg-darkBlue hover:text-white"
    }`;
  } else if (type === "darkBlueOutlined") {
    typeStyles =
      "bg-white text-darkBlue border-2 border-darkBlue hover:bg-lightBlue hover:text-white hover:border-lightBlue";
  } else if (type === "darkGreenFilled") {
    typeStyles = "bg-darkGreen text-white hover:bg-lightGreen";
  } else if (type === "lightGreenFilled") {
    typeStyles = "bg-lightGreen text-white";
  }

  let textSizeStyles = "";
  if (textSize === "xs") {
    textSizeStyles = "text-xs font-bold";
  } else if (textSize === "sm") {
    textSizeStyles = "text-sm font-bold";
  } else if (textSize === "base") {
    textSizeStyles = "text-base font-semibold";
  } else if (textSize === "lg") {
    textSizeStyles = "text-lg";
  }

  return (
    <>
      <button
        value={value}
        onClick={onClick}
        data-message={dataMessage}
        className={`flex gap-x-2 items-center rounded ${
          specialPadding || "px-4 py-2"
        } justify-center transition-colors duration-200 ${typeStyles} ${className} sm:px-3`}>
        {icon && (
          <FontAwesomeIcon icon={icon} size={iconSize} className={iconClass} />
        )}
        {text && (
          <span className={`whitespace-nowrap ${textSizeStyles}`}>{text}</span>
        )}
      </button>
    </>
  );
};

Button.defaultProps = {
  text: null,
  icon: null,
  isHover: true,
  textSize: "base",
  iconSize: "1x",
  type: "darkBlueFilled",
  className: "",
  iconClass: "",
};

export default Button;
