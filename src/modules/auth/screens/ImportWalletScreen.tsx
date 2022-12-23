import { Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import BaseLayout from "../../../core/components/layout/BaseLayout";

import MainHeaderBlock from "../../../core/components/MainHeaderBlock";
import { EPhrasesStages } from "../../../core/models/EPhraseStages";
import TextBlock from "../../../core/components/TextBlock";

import IconImportWallet from "../../../../assets/svg/icon-import-wallet.svg";
import IconKey from "../../../../assets/svg/icon-recover-key.svg";
import IconPhrase from "../../../../assets/svg/icon-recover-phrase.svg";
import IconHard from "../../../../assets/svg/icon-recover-hard.svg";
import IconNavNext from "../../../../assets/svg/icon-chevron-right.svg";
import Chips from "../../../core/components/Chips";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import MainButton from "../../../core/components/MainButton";
import { biometricsAuth } from "../../../core/utils/biometric.utils";
import { setFaceIdAvailability, setLoggedInStatus } from "../../../store/auth.slice";

const optionIconSize = 36;
const options = [
  {
    id: 1,
    title: "Secret Phrase",
    link: "phrases-stage",
    icon: <IconKey width={optionIconSize} height={optionIconSize} />,
    params: { stage: EPhrasesStages.RECOVER },
  },
  {
    id: 2,
    title: "Private Key",
    icon: <IconPhrase width={optionIconSize} height={optionIconSize} />,
  },
  {
    id: 3,
    title: "Hardware Wallet",
    icon: <IconHard width={optionIconSize} height={optionIconSize} />,
  },
];


const ImportWalletScreen = () => {
  const { navigate } = useNavigation<any>()
  const { faceIdAvailable } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleOptionSelected = (link?: string, params?: any) => {
    if (!link) {
      return;
    }
    navigate(link, { ...params })
  };

  const handleFaceIdLogin = () => {
    biometricsAuth()
      .then(resp => {
        if (resp.success) {
          dispatch(setLoggedInStatus(true));
        }
      })
      .catch(err => dispatch(setFaceIdAvailability(false)))
  };

  return (
    <BaseLayout centered>
      <View style={styles.iconHolder}>
        <IconImportWallet width={50} height={50} fill={"#3D7CDB"} />
      </View>
      <MainHeaderBlock
        title={"Import wallet"}
        text={"Select a method to import your Aptos wallet."}
      />
      <View style={styles.optionsHolder}>
        {options.map((el, i) => (
          <TouchableOpacity
            key={el.id}
            style={{ ...styles.optionItem, borderBottomWidth: i < options.length ? 1 : 0 }}
            onPress={() => handleOptionSelected(el.link, el.params)}
          >
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              {el.icon}
              <TextBlock variant={"subheader"} marginBottom={0}>
                {"    "}
                {el.title}
              </TextBlock>
            </View>

            {el.link ? (
              <IconNavNext width={14} height={14} fill={'#ADADAD'} />
            ) : (
              <Chips label={"Coming Soon"} />
            )}
          </TouchableOpacity>
        ))}
      </View>

      {faceIdAvailable && <MainButton title="login with face id" onPress={handleFaceIdLogin} />}

    </BaseLayout>
  );
};

export default ImportWalletScreen;

const styles = StyleSheet.create({
  iconHolder: {
    backgroundColor: "rgba(61, 124, 219, .1)",
    width: 90,
    height: 90,
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 90,
    marginBottom: 20,
  },
  optionsHolder: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 10.0,
    shadowOpacity: 0.1,
    elevation: 10,
    marginBottom: 20,
  },
  optionItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomColor: '#fafafa'
  },
});
