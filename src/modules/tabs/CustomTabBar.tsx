import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef } from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import IconTab1 from "../../../assets/svg/tabs/icon-tab-1.svg";
import IconTab2 from "../../../assets/svg/tabs/icon-tab-2.svg";
import IconTab3 from "../../../assets/svg/tabs/icon-tab-3.svg";
import IconTab4 from "../../../assets/svg/tabs/icon-tab-4.svg";
import IconTab5 from "../../../assets/svg/tabs/icon-tab-5.svg";
import Row from "../../core/components/layout/Row";
import { getShadow } from "../../core/utils/common.utils";
import { useNavigation } from "@react-navigation/native";
import Animated, { useSharedValue, useAnimatedStyle, withSpring, } from 'react-native-reanimated';

const NavLineWidth = Dimensions.get('window').width / 5;

type TabInfoType = {
  key: number;
  screen: string;
  icon: any;
  rootScreen?: string;
  initialParams?: Record<string, string>;
};

const tabIconSize = 26;
const TAB_PAGES: TabInfoType[] = [
  {
    key: 0,
    screen: "wallet",
    rootScreen: "wallet",
    icon: <IconTab1 width={tabIconSize} height={tabIconSize} />,
  },
  {
    key: 1,
    screen: "assets",
    rootScreen: "assets",
    icon: <IconTab2 width={tabIconSize} height={tabIconSize} />,
    initialParams: { screenName: "Assets" },
  },
  {
    key: 2,
    screen: "stats",
    rootScreen: "stats",
    icon: <IconTab3 width={tabIconSize} height={tabIconSize} />,
    initialParams: { screenName: "Stats" },
  },
  {
    key: 3,
    screen: "explorer",
    rootScreen: "explorer",
    icon: <IconTab4 width={tabIconSize} height={tabIconSize} />,
    initialParams: { screenName: "Explorer" },
  },
  {
    key: 4,
    screen: "settings",
    rootScreen: "settings",
    icon: <IconTab5 width={tabIconSize} height={tabIconSize} />,
    initialParams: { screenName: "Settings" },
  },
];

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state }) => {
  const lineOffset = useSharedValue(0);
  const lineAnimatedStyles = useAnimatedStyle(() => {
    return {
      left: lineOffset.value,
    };
  });

  const handleTabSelected = (tabIndex: number) => {
    lineOffset.value = withSpring(tabIndex * NavLineWidth);
  }

  return (
    <Row
      justifyContent={"space-around"}
      style={{
        backgroundColor: "#fff",
        paddingTop: 2,
        paddingBottom: 12,
        flexWrap: "nowrap",
        ...getShadow(0.6),
        borderTopWidth: .5,
        borderTopColor: 'rgba(0,0,0,.2)'
      }}
    >
      <Animated.View style={[styles.tabItemTopLine, lineAnimatedStyles]} />
      {TAB_PAGES.map((el) => (
        <TabItem state={state} info={el} key={el.key} onSelected={handleTabSelected}/>
      ))}
    </Row>
  );
};

type TabItemProps = {
  state: BottomTabBarProps["state"];
  info: TabInfoType;
  onSelected: (index: number) => void;
};

const TabItem: React.FC<TabItemProps> = ({ state, info, onSelected }) => {
  const isFocused = state.index === info.key;
  const { navigate } = useNavigation<any>();

  const handleTabSelected = () => {
    onSelected(info.key);
    if (isFocused && info.rootScreen) {
      return navigate(info.rootScreen);
    }

    navigate(info.screen, { ...info.initialParams });
  };

  return (
    <TouchableOpacity onPress={handleTabSelected} style={styles.tabItemHolder}>
      <View style={{ opacity: !isFocused ? 0.3 : 1 }}>{info.icon}</View>
    </TouchableOpacity>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  tabItemHolder: {
    // backgroundColor:'red',
    padding: 20,
  },
  tabItemTopLine: {
    position: "absolute",
    height: 2,
    width: NavLineWidth,
    top: 0,
    left: 0,
    backgroundColor: "black",
  },
});
