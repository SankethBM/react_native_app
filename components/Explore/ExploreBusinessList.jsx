import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import BusinessListCard from "./BusinessListCard";

export default function ExploreBusinessList({ businessList }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <FlatList
        scrollEnabled
        data={businessList}
        renderItem={({ item, index }) => (
          <BusinessListCard key={index} business={item} />
        )}
      />
      <View style={{ height: 250 }}></View>
    </ScrollView>
  );
}
