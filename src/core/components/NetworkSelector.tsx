import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import IconAptosLogo from '../../../assets/svg/icon-logo-aptos.svg';
import ChevronArrow from "./ChevronArrow";

type NetworkSelectorProps = {};

const NetworkSelector: React.FC<NetworkSelectorProps> = ({}) => {
  const networksSheetRef = useRef<ActionSheetRef>(null);

  return (
    <>
      <View style={styles.selectorHolder}>
        <IconAptosLogo width={30} height={30} style={{marginRight: 8}}/>
        <Text style={styles.selectorValue}>Aptos mainnet</Text>
        <ChevronArrow direction={'down'}/>
      </View>

      <ActionSheet>
        <View>
          <Text>Networks here</Text>
        </View>
      </ActionSheet>
    </>
  );
};

export default NetworkSelector;

const styles = StyleSheet.create({
  selectorHolder: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgb(248, 248, 248)",
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 20,
  },
  selectorValue: {
    fontFamily: 'System-medium',
    fontSize: 16,
    textTransform: 'capitalize',
    marginRight: 8,
  },
});
