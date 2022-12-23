import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import AuthModule from "./src/modules/auth/AuthModule";
import TabsModule from "./src/modules/tabs/TabsModule";
import { useFonts } from "expo-font";
import { SheetProvider } from "react-native-actions-sheet";
import { RootState, store } from "./src/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import BaseLayout from "./src/core/components/layout/BaseLayout";
import { secureStorageService } from "./src/core/services";
import { biometricsAuth } from "./src/core/utils/biometric.utils";
import { setLoggedInStatus } from "./src/store/auth.slice";

const Stack = createNativeStackNavigator();

export default function App() {
  const [appIsLoaded, setappIsLoaded] = useState(false);

  const [fontsLoaded] = useFonts({
    EditorialNew: require("./assets/fonts/EditorialNew.otf"),
    "Migra-Extrabold": require("./assets/fonts/Migra-Extrabold.ttf"),
    "Migra-Extralight": require("./assets/fonts/Migra-Extralight.ttf"),
    "System-bold": require("./assets/fonts/system85-bold-pro.ttf"),
    "System-medium": require("./assets/fonts/system85-medium-pro.ttf"),
    "System-regular": require("./assets/fonts/system85-regular-pro.ttf"),
  });

  useEffect(() => {
    // @TODO
    // do checks for phrases, storage status, load additional data etc
    // alwayes can be separated and refactored
    // a little bit mess code for time saving purposes

    if (fontsLoaded) {
      setappIsLoaded(true);
    }
  }, [fontsLoaded]);

  return (
    <>
      <StatusBar style={'auto'} />
      <Provider store={store}>
        <SheetProvider>
          <NavigateApp loaded={appIsLoaded} />
        </SheetProvider>
      </Provider>
    </>
  );
}

export const NavigateApp = ({ loaded }: any) => {
  const { loggedIn } = useSelector((state: RootState) => state.auth);
  const [checksComplited, setChecksComplited] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loaded) {
      secureStorageService.getValueFor('faceIdIsOn')
        .then(resp => {
          if (resp === null) {
            setChecksComplited(true);
          }
          if (resp === '1') {
            biometricsAuth()
              .then(resp => {
                if (resp.success) {
                  dispatch(setLoggedInStatus(true));
                }
              })
              .catch(err => Alert.alert('Err', err))
              .finally(() => setChecksComplited(true));
          }
        })
        .catch(err => Alert.alert('Err!', 'error reading from storage'))
        .finally(() => setChecksComplited(true));
    }
  }, [loaded])

  return (
    <>
      {loaded && checksComplited ? (
        <NavigationContainer fallback={<LoadeingCmp />}>
          {!loggedIn ? <AuthModule /> : <TabsModule />}
        </NavigationContainer>
      ) : (
        <LoadeingCmp />
      )}
    </>
  );
};

const LoadeingCmp = () => {
  return (
    <BaseLayout centered><Text style={{ fontSize: 22 }}>Loading...</Text></BaseLayout>
  )
}

const styles = StyleSheet.create({});
