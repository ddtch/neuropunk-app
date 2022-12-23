
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { mainStyles } from "../../../styles/main-styles";
import MainHeaderBlock from "../../../core/components/MainHeaderBlock";
import InfoBlock from "../../../core/components/InfoBlock";
import { EPhrasesStages } from "../../../core/models/EPhraseStages";
import { secureStorageService, web3Service } from "../../../core/services";
import * as Clipboard from "expo-clipboard";
import TextBlock from "../../../core/components/TextBlock";
import Toast from "react-native-toast-message";

import CopyIcon from "../../../../assets/svg/icon-copy.svg";
import CustomToast from "../../../core/components/CustomToast";
import MainButton from "../../../core/components/MainButton";
import { useDispatch } from "react-redux";
import TextField from "../../../core/components/TextField";
import { biometricsAuth } from "../../../core/utils/biometric.utils";
import { setLoggedInStatus } from "../../../store/auth.slice";

interface IPhrase {
  id: number;
  value: string;
}

const RecoveryPhrasesScreen = () => {
  const { params } = useRoute<any>();
  const [phrases, setPhrases] = useState<string[]>([]);
  const [stage, setStage] = useState<EPhrasesStages | undefined>();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!params || !params.stage) return;

    setStage(params.stage);

    if (params.stage === EPhrasesStages.GENERATE) {
      web3Service.getMnemonic().then((resp) => {
        // //@TODO save phrases to secure storage !!!
        setPhrases(resp);
      })
        .catch(err => { console.trace(err) });
    }
  }, [params]);

  const copyToClipboard = async () => {
    const result = await Clipboard.setStringAsync(phrases.join(" "));
    if (result) {
      Toast.show({
        text1: "Secret Recovery Phrase is copied to clipboard",
        props: { success: true },
      });
    }
  };

  const pasteFromClipboard = async () => {
    const result = await Clipboard.getStringAsync();
    if (result) {
      setPhrases(result.split(" "));
      // Toast.show({
      //   text1: "Secret Recovery Phrase is copied to clipboard",
      //   props: { success: true },
      // });
      console.log(result);
    }
  };

  const handleNextStep = async () => {

    const faceIdIsOn = await secureStorageService.getValueFor('faceIdIsOn')
      .catch(err => console.log(err));

    /**
     * 
     * Here we can do a check and ask user to enable faceID
     * problem is, that simulators doesn't support it, 
     * few simulators will provide you with pass code
     * if you open demo on your phone will be the same
     * and for demo purposes it is always will let you in
     */
    if (!faceIdIsOn) {
      Alert.alert('Enable FaceID', 'Would you like to enable face id for easy auth flow?', [
        {
          text: 'Ok',
          onPress: async () => {
            await secureStorageService.saveSecure('faceIdIsOn', '1');
            try {
              const result = await biometricsAuth()
              dispatch(setLoggedInStatus(true));
            } catch {
              dispatch(setLoggedInStatus(true));
            }
          },
        }
      ])
    } else {
      await secureStorageService.removeFromStorage('faceIdIsOn')
    }
  };

  const GenerateStage = () => {
    return (
      <>
        <MainHeaderBlock
          title={"Recovery Phrase"}
          text={
            "The recovery phrase alone gives you full access to your wallet and funds. Please save it securely"
          }
        />

        <View style={styles.phrasesBlockHolder}>
          {phrases.map((el, i) => (
            <TextBlock
              key={i}
              variant={"body"}
              style={{ width: "33%" }}
              marginBottom={20}
            >
              {i + 1}. {el}
            </TextBlock>
          ))}

          <Pressable onPress={copyToClipboard} style={styles.copyBtn}>
            <CopyIcon width={12} height={12} style={{ marginRight: 10 }} />
            <Text style={styles.copyBtnText}>Copy to clipboard</Text>
          </Pressable>
        </View>

        <InfoBlock
          text={
            "For your protection, Martian locks your wallet after 60 minutes of inactivity. You will need this password to unlock it. The password is stored securely on your device. We cannot recover the password for you, if it is lost."
          }
        />

        <MainButton title={"Continue"} onPress={handleNextStep} />
      </>
    );
  };

  const RecoverStage = () => {
    return (
      <>
        <MainHeaderBlock
          title={"Recovery Phrase"}
          text={
            "Import an existing wallet with your 12 word secret recovery phrase or input your private key"
          }
        />

        <View style={styles.phrasesInputsHolder}>
          {Array.from(Array(12).keys()).map((el, i) => (
            <View key={i} style={styles.phraseInputWrapper}>
              <TextBlock variant="small" marginBottom={0} style={{ width: 20 }}>
                {`${i + 1}.`}
              </TextBlock>
              <TextField marginBottom={0} />
            </View>
          ))}

          <Pressable
            onPress={pasteFromClipboard}
            style={{ ...styles.copyBtn, bottom: -30, left: "25%" }}
          >
            <CopyIcon width={12} height={12} style={{ marginRight: 10 }} />
            <Text style={styles.copyBtnText}>Paste from clipboard</Text>
          </Pressable>
        </View>

        <MainButton title={"Import Wallet"} onPress={handleNextStep} />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ScrollView
          contentContainerStyle={{ justifyContent: "center", flexGrow: 1 }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <Pressable onPress={() => Keyboard.dismiss()}>
              {stage === EPhrasesStages.GENERATE && <GenerateStage />}
              {stage === EPhrasesStages.RECOVER && <RecoverStage />}
            </Pressable>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
      <CustomToast />
    </SafeAreaView>
  );
};

export default RecoveryPhrasesScreen;

const styles = StyleSheet.create({
  container: {
    ...mainStyles.container,
  },
  content: {
    ...mainStyles.content,
  },
  phrasesBlockHolder: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "rgb(248, 248, 250)",
    borderColor: "rgb(219, 219, 219)",
    borderWidth: 1,
    padding: 20,
    borderRadius: 6,
    justifyContent: "center",
    marginBottom: 60,
    position: "relative",
  },
  phrasesInputsHolder: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    marginBottom: 60,
  },
  phraseInputWrapper: {
    width: "47%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  copyBtn: {
    position: "absolute",
    bottom: -14,
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
  copyBtnText: {
    fontFamily: "System-medium",
    fontSize: 14,
  },
});
