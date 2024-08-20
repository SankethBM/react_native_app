import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./../../configs/FirebaseConfig";
import { useUser } from "@clerk/clerk-expo";

export default function Intro({ business }) {
  const router = useRouter();
  const { user } = useUser();
  const OnDelete = () => {
    Alert.alert("Delete Your Business !", "Are you sure you want to delete !", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => deleteBusiness(),
      },
    ]);
  };

  const deleteBusiness = async () => {
    console.log("Delete Business");
    await deleteDoc(doc(db, "BusinessList", business?.id));
    router.back();
    ToastAndroid.show("Business Deleted Sucesfully...!", ToastAndroid.LONG);
  };

  return (
    <View>
      <View
        style={{
          position: "absolute",
          zIndex: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          padding: 25,
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-circle" size={40} color="white" />
        </TouchableOpacity>

        <Ionicons name="heart-outline" size={40} color="white" />
      </View>
      <Image
        source={{ uri: business?.imageUrl }}
        style={{
          width: "100%",
          height: 340,
        }}
      />

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
          backgroundColor: "#fff",
          marginTop: -20,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
      >
        <View
          style={{
            padding: 20,
            marginTop: -20,
            backgroundColor: "#fff",
            borderTopLeftRadius: 26,
            borderTopRightRadius: 26,
          }}
        >
          <Text
            style={{
              fontSize: 26,
              fontFamily: "outfit-bold",
            }}
          >
            {business?.name}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "outfit",
            }}
          >
            {business?.address}
          </Text>
        </View>

        {user?.primaryEmailAddress?.emailAddress == business?.userEmail && (
          <TouchableOpacity onPress={() => OnDelete()}>
            <Ionicons name="trash" size={24} color="red" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
