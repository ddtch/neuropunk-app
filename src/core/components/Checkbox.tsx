import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import Chk from "../../../assets/svg/icon-checkbox-empty.svg";
import ChkF from "../../../assets/svg/icon-checkbox-filled.svg";

const ICON_SIZE = 16;

type CheckboxProps = {
  onPress?: (checked: boolean) => void;
  selected?: boolean;
};

const Checkbox: React.FC<CheckboxProps> = ({ onPress, selected }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (selected !== undefined) {
      setIsChecked(selected);
    }
  }, [selected]);

  const handleCheckboxPressed = () => {
    setIsChecked(!isChecked);
    onPress && onPress(!isChecked);
  };

  return (
    <>
      <Pressable onPress={handleCheckboxPressed} style={{
        marginRight: 8,
      }}>
        {!isChecked ? (
          <View style={{padding: 6}}><Chk width={ICON_SIZE} height={ICON_SIZE} fill={"rgb(219, 219, 219)"} /></View>
        ) : (
          <View style={{padding: 6}}><ChkF width={ICON_SIZE} height={ICON_SIZE} fill={"rgb(219, 219, 219)"} /></View>
        )}
      </Pressable>
    </>
  );
};

export default Checkbox;

const styles = StyleSheet.create({});
