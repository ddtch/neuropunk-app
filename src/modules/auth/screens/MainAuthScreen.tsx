import {
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import TextBlock from "../../../core/components/TextBlock";
import { useNavigation } from "@react-navigation/native";

import NewWalletIcon from "../../../../assets/svg/icon-wallet.svg";
import ImportWalletIcon from "../../../../assets/svg/icon-upload.svg";
import MainHeaderBlock from "../../../core/components/MainHeaderBlock";
import BaseLayout from "../../../core/components/layout/BaseLayout";
import { FadeInDown} from 'react-native-reanimated'; 
import Animated from "react-native-reanimated"

const ICON_SIZE = 28;
const ICON_COLOR = 'rgb(180, 176, 168)';

const options = [
  {
    id: 1,
    link: "new-wallet",
    title: "Create a New Wallet",
    caption:
      "Get started by creating your very first wallet to hold, trade and exchange crypto assets",
    icon: <NewWalletIcon width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />,
  },
  {
    id: 2,
    link: "import-wallet",
    title: "I already have a Wallet",
    caption:
      "Import your seed phrase from an existing account and to holdin, trade and exchange assets from Martian",
    icon: (
      <ImportWalletIcon width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />
    ),
  },
];

const MainAuthScreen = () => {
  const { navigate } = useNavigation<any>();

  const handleOptionSelected = (link: string) => {
    navigate(link);
  };

  return (
    <BaseLayout centered>
      <MainHeaderBlock
        title="Welcome to Martian"
        text="The Aptos wallet reimagined; hold crypto, NFTs, swap assets and track
        past activity"
        animate
      />

      <View style={styles.optionsHolder}>
        {options.map((el, i) => (
          <Animated.View key={el.id} entering={FadeInDown.duration(600).delay(i * 120)}>
          <Pressable
            key={el.id}
            style={styles.option}
            onPress={() => handleOptionSelected(el.link)}
          >
            <View style={styles.iconHolder}>{el.icon}</View>
            <View style={styles.textsHolder}>
              <TextBlock variant={"subheader"} marginBottom={4}>
                {el.title}
              </TextBlock>
              <TextBlock variant={"body"} marginBottom={0}>
                {el.caption}
              </TextBlock>
            </View>
          </Pressable>
          </Animated.View>
        ))}
      </View>
    </BaseLayout>
  );
};

export default MainAuthScreen;

const styles = StyleSheet.create({
  optionsHolder: {
    width: "100%",
  },
  option: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 24,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 10.0,
    shadowOpacity: 0.1,
    elevation: 10,
    marginBottom: 30,
  },
  iconHolder: {
    marginRight: 10,
    width: 52,
    height: 52,
    borderRadius: 52,
    backgroundColor: "rgb(248,248,250)",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  textsHolder: {
    width: '82%',
  },
});
