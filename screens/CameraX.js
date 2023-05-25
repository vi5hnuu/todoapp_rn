import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'

const CameraX = ({ route, navigation }) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState(null)

  if (!permission) {
    return <View />;
  }


  //TODO: show list of ratios to be select by user
  // if (Camera) {
  //   (async () => {
  //     console.log(await camera.getSupportedRatiosAsync());
  //   })()
  // }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  async function clickPicture() {
    const data = await camera.takePictureAsync({ quality: 0.5 })
    route.params.onBack(data.uri)
    navigation.goBack()
  }

  async function openImagePicker() {
    let data = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!data.canceled) {
      route.params.onBack(data.assets[0].uri)
      navigation.goBack()
    }
  }

  return <View style={styles.container}>
    {permission.granted ?
      <Camera
        ratio='16:9'
        style={styles.camera}
        type={type}
        ref={(cam) => setCamera(cam)}
      /> :
      <View style={styles.reqPermContainer}>
        <TouchableOpacity
          onPress={requestPermission}>
          <Text style={{
            backgroundColor: '#343a40',
            paddingHorizontal: 18,
            paddingVertical: 12,
            borderRadius: 100,
            color: '#fff'
          }}>Grant permission</Text>
        </TouchableOpacity>
      </View>}
    <View style={styles.actions}>
      <TouchableOpacity
        onPress={clickPicture}>
        <AntDesign
          name="camera"
          size={36}
          color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={openImagePicker}>
        <Ionicons
          name="ios-image"
          size={36}
          color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={toggleCameraType}>
        <MaterialIcons
          name="flip-camera-ios"
          size={36}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  </View>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  actions: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    gap: 30,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 100,
    backgroundColor: '#212529',
    alignSelf: 'center'
  },
  camera: {
    flex: 1,
  },
  reqPermContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default CameraX