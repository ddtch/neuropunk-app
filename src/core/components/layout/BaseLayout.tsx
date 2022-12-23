import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { PropsWithChildren } from "react";
import { mainStyles } from "../../../styles/main-styles";

type BaseLayoutProps = {
  centered?: boolean;
};

const BaseLayout: React.FC<PropsWithChildren & BaseLayoutProps> = ({
  children,
  centered,
}) => {
  return (
    <SafeAreaView style={styles(centered).container}>
      <View style={styles(centered).content}>{children}</View>
    </SafeAreaView>
  );
};

export default BaseLayout;

const styles = (centered?: boolean) =>
  StyleSheet.create({
    container: {
      ...mainStyles.container,
    },
    content: {
      ...mainStyles.content,
      alignItems: centered ? "center" : "flex-start",
      justifyContent: centered ? "center" : "flex-start",
    },
  });
