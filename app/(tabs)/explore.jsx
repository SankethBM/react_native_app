import { View, Text } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { Colors } from "../../constants/Colors";
import Category from "../../components/Home/Category";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import ExploreBusinessList from "../../components/Explore/ExploreBusinessList";

export default function explore() {
  const [businesslist, setBusinessList] = useState([]);

  const GetBusinessByCategory = async (category) => {
    setBusinessList([]);
    const q = query(
      collection(db, "BusinessList"),
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log(doc.data());
      setBusinessList((prev) => [...prev, { id: doc.id, ...doc.data() }]);
    });
  };

  return (
    <View
      style={{
        padding: 20,
        paddingTop: 50,
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
          textAlign: "center",
        }}
      >
        Explore More
      </Text>
      {/* Search Bar */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          backgroundColor: "#fff",
          borderRadius: 10,
          padding: 10,
          marginVertical: 10,
          marginTop: 15,
          borderWidth: 1,
          borderColor: Colors.PRIMARY,
        }}
      >
        <Ionicons name="search" size={24} color={Colors.PRIMARY} />
        <TextInput
          style={{
            fontFamily: "outfit-bold",
            fontSize: 16,
          }}
          placeholder="Search...                                                                              "
        />
      </View>

      {/* Category */}
      <Category
        explore={true}
        onCategorySelect={(category) => GetBusinessByCategory(category)}
      />

      {/* Business List */}
      <ExploreBusinessList businessList={businesslist} />
    </View>
  );
}
