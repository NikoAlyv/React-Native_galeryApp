import React from "react";
import { View, ImageBackground, Dimensions } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

interface ShowImagesProps {
  route: {
    params: {
      url: any;
      };
  };
}

const ShowImages: React.FC<ShowImagesProps> = ({ route }) => {
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
