import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import Images from "../Images";
let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

const Home = (params) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {Images.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              params.navigation.navigate("ShowImages", { url: image.url })
            }
          >
            <Image source={image.url} style={styles.Image} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  Image: {
    height: deviceHeight / 3,
    width: deviceWidth / 3 - 6,
    borderRadius: 10,
    margin: 2,
  },
});
export default Home;
