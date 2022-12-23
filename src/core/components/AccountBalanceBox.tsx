import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainButton from "./MainButton";

type AccountBalanceBoxProps = {

}

const AccountBalanceBox: React.FC<AccountBalanceBoxProps> = () => {
  return (
    <View style={styles.balanceBlock}>
      <View style={styles.amountsHolder}>
        <Text style={styles.balanceAmount}>0</Text>
        <Text style={styles.balanceCurrency}>Apt</Text>
      </View>

      <View style={styles.balanceActionsBlock}>
        <MainButton title="Buy" width={"48%"} />
        <MainButton title="Send" secondary width={"48%"} />
      </View>
    </View>
  );
};

export default AccountBalanceBox;

const styles = StyleSheet.create({
  balanceBlock: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    marginBottom: 20,
  },
  amountsHolder: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "flex-end",
    alignContent: "flex-start",
    marginBottom: 40,
  },
  balanceAmount: {
    fontFamily: "System-regular",
    fontSize: 48,
    marginRight: 8,
  },
  balanceCurrency: {
    color: " rgba(189, 189, 189, 1)",
    textTransform: "uppercase",
    fontSize: 16,
    fontFamily: "System-regular",
    lineHeight: 22,
  },
  balanceActionsBlock: {
    width: "100%",
    alignContent: "stretch",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
