import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import IconCorner from "../../../assets/svg/icon-corner.svg";

type MainButtonProps = {
  onPress?: () => void;
  title: string;
  disabled?: boolean;
  secondary?: boolean;
  width?: string | number;
};

type CornerProps = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  rotation: string;
  secondary?: boolean;
};

const Corner: React.FC<CornerProps> = ({
  secondary,
  top,
  left,
  right,
  bottom,
  rotation,
}) => {
  {
    /**
     * I know, I know ok? 🤣
     * I just didn't wanted to add whole styled components libriary to make this square corners for button
     */
  }
  return (
    <View
      style={{
        position: "absolute",
        top,
        right,
        bottom,
        left,
        transform: [{ rotateZ: rotation }],
        zIndex: 2,
      }}
    >
      <IconCorner width={12} height={12} fill={secondary ? "#000" : "#fff"} />
    </View>
  );
};

const MainButton: React.FC<MainButtonProps> = ({
  onPress,
  title,
  disabled,
  secondary,
  width = "100%",
}) => {
  return (
    <Pressable
      style={{ position: "relative", width }}
      onPress={() => onPress && onPress()}
    >
      <Corner secondary={secondary} top={6} left={6} rotation={"0deg"} />
      <Corner secondary={secondary} top={6} right={6} rotation={"90deg"} />
      <Corner secondary={secondary} bottom={16} left={6} rotation={"-90deg"} />
      <Corner secondary={secondary} bottom={16} right={6} rotation={"180deg"} />

      <View
        style={{
          ...styles.btnHolder,
          backgroundColor: secondary ? "#fff" : "#000",
        }}
      >
        <Text style={{ ...styles.btnText, color: secondary ? "#000" : "#fff" }}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  btnHolder: {
    position: "relative",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 6,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: "#000",
  },
  secondaryBtn: {},
  btnText: {
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "System-medium",
  },
});
