import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextBlock from "./TextBlock";
import { FadeInDown, FadeInUp } from "react-native-reanimated";
import Animated from "react-native-reanimated";

type MainHeaderBlockProps = {
  title: string;
  text: string;
  marginBottom?: number;
  animate?: boolean;
};

const MainHeaderBlock: React.FC<MainHeaderBlockProps> = ({
  title,
  text,
  marginBottom = 40,
  animate = false,
}) => {
  return (
    <View style={{ ...styles.introHolder, marginBottom }}>
      <Animated.View
        entering={animate ? FadeInUp.duration(520) : undefined}
        style={{ alignItems: "center", alignContent: "center" }}
      >
        <TextBlock variant={"title"} align={"center"}>
          {title}
        </TextBlock>
      </Animated.View>
      <Animated.View
        entering={animate ? FadeInDown.duration(520) : undefined}
        style={{ width: "98%", alignItems: "center", alignContent: "center" }}
      >
        <TextBlock
          variant={"caption"}
          align={"center"}
          style={{ ...styles.introSmall }}
          marginBottom={0}
        >
          {text}
        </TextBlock>
      </Animated.View>
    </View>
  );
};

export default MainHeaderBlock;

const styles = StyleSheet.create({
  introHolder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  introSmall: {
    width: "90%",
  },
});
