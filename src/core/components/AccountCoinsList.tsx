import { Easing, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FadeInDown } from "react-native-reanimated";
import Animated from "react-native-reanimated";

import IconLogoAptos from "../../../assets/svg/icon-logo-aptos.svg";
import IconAdd from "../../../assets/svg/icon-add.svg";

const LOGO_SIZE = 42;

type AccountCoinsListProps = {
  addCoinPressed: () => void;
};

const AccountCoinsList: React.FC<AccountCoinsListProps> = ({
  addCoinPressed,
}) => {
  return (
    <View style={styles.listHolder}>
      <Animated.View style={styles.listItemHolder} entering={FadeInDown.duration(560)}>
        <View style={styles.metaInfo}>
          <View style={styles.coinLogo}>
            <IconLogoAptos width={LOGO_SIZE} height={LOGO_SIZE} />
          </View>

          <View style={styles.coinTexts}>
            <Text style={styles.coinTitle}>Aptos</Text>
            <Text style={styles.coinCur}>apt</Text>
          </View>
        </View>

        <Text style={styles.coinBalance}>0 apt</Text>
      </Animated.View>

      <TouchableOpacity style={styles.addBtn} onPress={addCoinPressed}>
        <IconAdd width={14} height={14} style={{marginRight: 10, marginTop: 2}}/>
        <Text style={styles.addBtnText}>Add coin</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountCoinsList;

const styles = StyleSheet.create({
  listHolder: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignContent: "stretch",
  },
  listItemHolder: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "rgb(248, 248, 248)",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "flex-start",
    justifyContent: "space-between",
  },
  metaInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  coinLogo: {
    marginRight: 10,
  },
  coinTexts: {
    display: "flex",
    flexDirection: "column",
  },
  coinTitle: {
    fontFamily: "System-medium",
    fontSize: 18,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  coinCur: {
    fontFamily: "System-regular",
    fontSize: 18,
    color: "rgb(129, 129, 129)",
    textTransform: "uppercase",
  },
  coinBalance: {
    fontFamily: "System-medium",
    fontSize: 18,
    textTransform: "uppercase",
  },
  addBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    alignSelf: 'center',
    paddingVertical: 10,
    width: '40%',
  },
  addBtnText: {
    fontFamily: "System-medium",
    fontSize: 18,
    textTransform: 'capitalize',
  },
});
