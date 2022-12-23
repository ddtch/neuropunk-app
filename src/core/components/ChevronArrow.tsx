import { StyleSheet, Text, View } from "react-native";
import React from "react";

import IconChevronArrow from "../../../assets/svg/icon-chevron-right.svg";

type ChevronArrowProps = {
  direction: "up" | "down" | "left" | "right";
  size?: number;
  styles?: any;
  color?: string;
};

const _getDirectionRotation = (
  direction: ChevronArrowProps["direction"]
): string => {
  switch (direction) {
    case "down":
      return "90deg";
    case "left":
      return "180deg";
    case "up":
      return "-90deg";
    case "right":
    default:
      return "0deg";
  }
};

const ChevronArrow: React.FC<ChevronArrowProps> = ({
  direction,
  size = 20,
  styles,
  color = "black",
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        transform: [{ rotateZ: _getDirectionRotation(direction) }],
        ...styles,
      }}
    >
      <IconChevronArrow width={size} height={size} fill={color} />
    </View>
  );
};

export default ChevronArrow;
