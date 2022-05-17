import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import COLORS from "../../consts/colors";
import Icon from "@expo/vector-icons/MaterialIcons";
import { TextInput } from "react-native-gesture-handler";
import plants from "../../consts/plants";

const width = Dimensions.get("window").width / 2 - 30;

const HomeScreen = () => {
  const categories = ["POPULAR", "ORGANIC", "INDOORS", "SYNTHETIC"];
  const [categoryIndex, setCategoryIndex] = useState(0);

  const CategotyList = () => {
    return (
      <View style={style.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setCategoryIndex(index)}
            activeOpacity={0.8}
          >
            <Text
              style={[
                style.categoryText,
                categoryIndex === index && style.categorySelected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({ plant }) => {
    return (
      <View style={style.card}>
        <View
          style={{
            alignItems: "flex-end",
          }}
        >
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: plant.like
                ? "rgba(245, 42, 42, 0.2)"
                : "rgba(0, 0, 0, 0.2)",
            }}
          >
            <Icon
              name="favorite"
              size={18}
              color={plant.like ? COLORS.red : COLORS.dark}
            />
          </View>
        </View>
        <View style={{ height: 100, alignItems: "center" }}>
          <Image
            source={plant.img}
            style={{ flex: 1, resizeMode: "contain" }}
          />
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 10 }}>
          {plant.name}
        </Text>
        <View
          style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}
        >
          <Text style={{fontSize: 19, fontWeight: 'bold'}}>{plant.price}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
      }}
    >
      <View style={style.header}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Welcome to</Text>
          <Text
            style={{ fontSize: 38, fontWeight: "bold", color: COLORS.green }}
          >
            Plant Shop
          </Text>
        </View>
        <Icon name="shopping-cart" size={30} style={{ marginTop: 10 }} />
      </View>
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
        }}
      >
        <View style={style.searchContainer}>
          <Icon
            name="search"
            size={25}
            style={{ marginLeft: 20, marginRight: 10 }}
          />
          <TextInput placeholder="Search" style={style.input} />
        </View>
        <View style={style.sortBtn}>
          <Icon name="sort" size={30} color={COLORS.white} />
        </View>
      </View>
      <CategotyList />
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 10, paddingBottom: 50 }}
        numColumns={2}
        data={plants}
        renderItem={({ item }) => <Card plant={item} />}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 18,
    fontWeight: "normal",
    color: COLORS.dark,
    flex: 1,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    backgroundColor: COLORS.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  categoryContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  categoryText: {
    fontSize: 16,
    color: "grey",
    fontWeight: "bold",
  },
  categorySelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.green,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
});

export default HomeScreen;
