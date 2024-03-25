import React from "react";
import { View, ImageBackground, Dimensions } from "react-native";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

const ShowImages = ({ route }) => {
  const { url } = route.params;

  return (
    <View>
      <ImageBackground
        source={url}
        style={{ width: deviceWidth, height: deviceHeight }}
      />
    </View>
  );
};

export default ShowImages;
