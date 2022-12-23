import {
  Alert,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { mainStyles } from "../../../styles/main-styles";
import MainHeaderBlock from "../../../core/components/MainHeaderBlock";
import TextField from "../../../core/components/TextField";
import Checkbox from "../../../core/components/Checkbox";
import TextBlock from "../../../core/components/TextBlock";
import LinkBtn from "../../../core/components/LinkBtn";
import MainButton from "../../../core/components/MainButton";
import InfoBlock from "../../../core/components/InfoBlock";
import { useNavigation } from "@react-navigation/native";
import { EPhrasesStages } from "../../../core/models/EPhraseStages";
import BaseLayout from "../../../core/components/layout/BaseLayout";

export const AgreementHolderBlock = ({ handleAgreement }: any) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: 20,
        // this is expo problems with stretch blocks properly and calculating % of width,
        // I paste here just for experiments,
        // 40 = horizontalPadding of parent,
        // 24 = width of checkbox + it's marginRight
        width: Dimensions.get("screen").width - 40 - 24,
      }}
    >
      <Checkbox onPress={handleAgreement} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <TextBlock variant="small" marginBottom={0}>
          {"I have read and agree to the "}
        </TextBlock>
        <LinkBtn link={"#"} title={"Terms of Service"} />
        <TextBlock variant="small" marginBottom={0}>
          {" and "}
        </TextBlock>
        <LinkBtn link={"#"} title={"Privacy Policy"} />
      </View>
    </View>
  );
};

const CreateNewWalletScreen = () => {
  const { navigate } = useNavigation<any>();
  const [agreed, setAgreed] = useState(false);

  const handleAgreement = (agreed: boolean) => {
    console.log(agreed);
    setAgreed(agreed);
  };

  const handleNextStep = () => {
    if (!agreed) {
      return Alert.alert("You have to agree with condition first!");
    }
    navigate("phrases-stage", { stage: EPhrasesStages.GENERATE });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ScrollView contentContainerStyle={{justifyContent: "center", flexGrow: 1}}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <Pressable onPress={() => Keyboard.dismiss()}>
              <MainHeaderBlock
                title="Create a Password"
                text="You will use the password to unlock your wallet. Do not share your password with others"
              />

              <View style={styles.formHolder}>
                <TextField label={"Password"} type={"password"} />
                <TextField label={"Confirm Password"} type={"password"} />

                <AgreementHolderBlock handleAgreement={handleAgreement} />

                <InfoBlock text="For your protection, Martian locks your wallet after 60 minutes of inactivity. You will need this password to unlock it. The password is stored securely on your device. We cannot recover the password for you, if it is lost." />

                <MainButton title="Continue" onPress={handleNextStep} />
              </View>
            </Pressable>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CreateNewWalletScreen;

const styles = StyleSheet.create({
  container: {
    ...mainStyles.container,
  },
  content: {
    ...mainStyles.content,
  },
  formHolder: {
    width: "100%",
  },
});
