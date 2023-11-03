import { Button, View, TextInput } from "react-native";
import { useEmbeddedWallet, useLoginWithSMS, usePrivy } from "@privy-io/expo";
import { useEffect, useRef, useState } from "react";

export default function Privy() {
  const [code, setCode] = useState("");
  const embeddedWallet = useEmbeddedWallet();
  const { user: privyUser, isReady: privyReady, logout } = usePrivy();

  const { sendCode, loginWithCode } = useLoginWithSMS();
  const creatingEmbeddedWallet = useRef(false);
  console.log({ embedded: embeddedWallet.status, privyUser: !!privyUser });

  useEffect(() => {
    const createWallet = async () => {
      if (
        privyUser &&
        embeddedWallet.status === "not-created" &&
        privyReady &&
        !creatingEmbeddedWallet.current
      ) {
        creatingEmbeddedWallet.current = true;
        console.log("creating embedded wallet !!!");
        await embeddedWallet.create();
      }
    };
    createWallet();
  }, [embeddedWallet, privyReady, privyUser]);

  return (
    <View>
      <Button
        onPress={() => sendCode({ phone: "+33661183357" })}
        title="Get code"
      />
      <TextInput
        value={code}
        onChangeText={setCode}
        placeholder="Code"
        inputMode="numeric"
      />

      <Button onPress={() => loginWithCode({ code })} title="Send code" />
      <Button onPress={logout} title="Logout" />
    </View>
  );
}