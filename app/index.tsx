import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import MyVideo from "./MyVideo";

export default function Index() {
  const [show, setShow] = React.useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >{ show ? (
      <MyVideo />
    ) : undefined}
      <TouchableOpacity onPress={() => setShow(!show)}><Text>Toggle the video.</Text></TouchableOpacity>
    </View>
  );
}
