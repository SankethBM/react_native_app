import { View, Text } from "react-native";
import React from "react";
import UserIntro from "../../components/Profile/UserIntro";
import MenuList from "../../components/Profile/MenuList";

export default function profile() {
  return (
    <View
      style={{
        paddingTop: 50,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
          textAlign: "center",
        }}
      >
        Profile
      </Text>

      {/* User Info */}
      <UserIntro />

      {/* Menu List */}
      <MenuList />
    </View>
  );
}
