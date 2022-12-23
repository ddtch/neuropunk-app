import { Pressable, StyleSheet, View } from "react-native";
import React, { useEffect, useRef } from "react";
import BaseLayout from "../../../core/components/layout/BaseLayout";
import NetworkSelector from "../../../core/components/NetworkSelector";

import IconNotifications from "../../../../assets/svg/icon-notification.svg";
import AccountInfoBox from "../../../core/components/AccountInfoBox";
import AccountBalanceBox from "../../../core/components/AccountBalanceBox";
import AccountCoinsList from "../../../core/components/AccountCoinsList";

const HomeScreen = () => {
  const handleAddCoinAction = () => {

  };

  return (
    <BaseLayout>
      <View style={styles.topBar}>
        <NetworkSelector />
        <Pressable style={styles.notificationsBtn}>
          <IconNotifications
            width={24}
            height={24}
            fill={"black"}
            opacity={0.5}
          />
        </Pressable>
      </View>

      <AccountInfoBox />

      <AccountBalanceBox />

      <AccountCoinsList addCoinPressed={handleAddCoinAction}/>
    </BaseLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  topBar: {
    marginBottom: 40,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  notificationsBtn: {},
});
