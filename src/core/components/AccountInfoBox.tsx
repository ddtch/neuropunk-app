import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import TextBlock from "./TextBlock";

import IconAccountLogo from "../../../assets/svg/icon-logo-account-martian.svg";
import IconChevronDown from "../../../assets/svg/icon-chevron-right.svg";
import IconCopy from "../../../assets/svg/icon-copy-small-1.svg";
import ChevronArrow from "./ChevronArrow";

type AccountInfoBoxProps = {};

const AccountInfoBox: React.FC<AccountInfoBoxProps> = () => {
  const handleAccountSelection = () => {};

  const handleAddressPress = () => {};

  return (
    <View style={styles.accountInfoHolder}>
      <View style={styles.avatar}>
        <IconAccountLogo width={60} height={60} />
      </View>
      <View style={styles.dataHolder}>
        <Pressable style={styles.topPart} onPress={handleAccountSelection}>
          <Text style={styles.accountTitle}>Account 1</Text>
          <ChevronArrow direction={'down'}/>
        </Pressable>

        <Pressable style={styles.addressData} onPress={handleAddressPress}>
          <TextBlock variant={"small"} marginBottom={0}>
            0x3f9c...5540
          </TextBlock>
          <IconCopy width={10} height={10} style={{ marginTop: -1 }} />
        </Pressable>
      </View>
    </View>
  );
};

export default AccountInfoBox;

const styles = StyleSheet.create({
  accountInfoHolder: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "flex-start",
    marginBottom: 20,
  },
  avatar: {
    marginRight: 10,
  },
  dataHolder: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 60,
  },
  topPart: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "flex-start",
    // marginBottom: 4,
  },
  accountTitle: {
    fontFamily: "System-medium",
    fontSize: 22,
    marginRight: 4,
  },
  addressData: {
    backgroundColor: "rgb(248, 248, 248)",
    padding: 8,
    borderRadius: 6,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
  },
});
