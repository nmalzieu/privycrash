import "react-native-get-random-values";
import "@ethersproject/shims";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Privy from "./privy";
import { PrivyProvider } from "@privy-io/expo";

export default function App() {
  return (
    <PrivyProvider appId={"cloh5bn1p00q4l50gcg0g1mix"}>
      <View style={styles.container}>
        <Privy />
      </View>
    </PrivyProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
