import { StyleSheet, Text, TextStyle, View } from "react-native";
import React, { PropsWithChildren } from "react";

type TextBlockProps = {
  variant: "title" | "header" | "subheader" | "caption" | "body" | "small" | "tiny";
  align?: "left" | "center" | "right";
  marginBottom?: number;
  style?: TextStyle;
};

const TextBlock: React.FC<TextBlockProps & PropsWithChildren> = ({
  variant,
  children,
  align = "left",
  marginBottom = 20,
  style,
}) => {
  return (
    <>
      {typeof children !== "string" && !Array.isArray(children) ? (
        
        <Text
          style={{
            color: "red",
            fontSize: 22,
          }}
        >
          You can use only string as children!
        </Text>
      ) : (
        <Text
          style={{
            ...styles[variant],
            ...style,
            marginBottom,
            textAlign: align,
          }}
        >
          {children}
        </Text>
      )}
    </>
  );
};

export default TextBlock;

const bodyTextColor = "rgb(131, 128, 120)";

const styles = StyleSheet.create({
  title: {
    fontFamily: "EditorialNew",
    fontSize: 38,
  },
  header: {
    fontFamily: "",
  },
  subheader: {
    fontFamily: "System-medium",
    fontSize: 18,
  },
  caption: {
    fontFamily: "System-regular",
    color: bodyTextColor,
    fontSize: 16,
  },
  body: {
    fontFamily: "System-regular",
    color: bodyTextColor,
    fontSize: 16,
  },
  small: {
    fontFamily: "System-regular",
    color: bodyTextColor,
    fontSize: 14,
    paddingBottom: 2, // allign lineHeight
  },
  tiny: {
    fontFamily: "System-medium",
    color: bodyTextColor,
    fontSize: 12,
    paddingBottom: 2,
  },
});
