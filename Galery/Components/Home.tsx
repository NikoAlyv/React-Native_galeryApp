import React from "react";
import { View, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView } from "react-native";
import Images from "../Images";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

interface HomeProps {
  navigation: any; 
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {Images.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate("ShowImages", { url: image.url })
            }
          >
            <Image source={image.url} style={styles.image} />
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
  image: {
    height: deviceHeight / 3,
    width: deviceWidth / 3 - 6,
    borderRadius: 10,
    margin: 2,
  },
});

export default Home;
