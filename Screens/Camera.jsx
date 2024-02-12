import React, { useEffect, useRef, useState } from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';
import { Icon } from 'react-native-paper';






export default function App() {



    const cameraRef = useRef();
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(null);
    const [photo, setPhoto] = useState(null);




    useEffect(() => {
        const getPermissions = async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
            setHasCameraPermission(cameraPermission.status === 'granted');
            setHasMediaLibraryPermission(mediaLibraryPermission.status === 'granted');
        };

        getPermissions();
    }, []);



    const takePic = async () => {
        if (cameraRef.current) {


            let options = {
                quality: 1,
                base64: true,
                exif: false,
            };

            let newPhoto = await cameraRef.current.takePictureAsync(options);
            setPhoto(newPhoto);
        }
    };

    const sharePic = () => {
        if (photo) {
            shareAsync(photo.uri).then(() => {
                setPhoto(null);
            });
        }
    };

    const savePhoto = () => {
        if (photo) {
            MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
                setPhoto(null);
            }).catch((error) => {
                console.error("Error saving photo to media library:", error);
            });
        }
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true,
        });

        if (!result.cancelled) {
            setPhoto(result);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {hasCameraPermission === null ? (
                <Text>Requesting permissions...</Text>
            ) : !hasCameraPermission ? (
                <Text>Permission for camera not granted.</Text>
            ) : photo ? (
                <>
                    <Image style={styles.preview} source={{ uri: photo.uri }} />

                    <View style={styles.buttonView}>
                        <TouchableOpacity style={styles.takePictureButton}>
                            <FontAwesome name="share" size={24} color="black" onPress={sharePic} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.takePictureButton}>
                            {hasMediaLibraryPermission ? <FontAwesome name="save" size={24} color="black" onPress={savePhoto} /> : null}
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.takePictureButton}>
                            <FontAwesome name="home" size={24} color="black" onPress={() => setPhoto(null)} />

                        </TouchableOpacity>


                    </View>

                </>
            ) : (
                <View>
                    <Camera style={styles.cameraView} ref={cameraRef}>
                    </Camera>

                    <View style={styles.buttonView}>
                        <TouchableOpacity style={styles.takePictureButton} onPress={takePic}>
                            <FontAwesome name="camera" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.takePictureButton} onPress={pickImage}>
                            <FontAwesome name="folder" size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                </View>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center',
        width: '100%',
        height: '98%',
    },
    cameraView: {
        backgroundColor: '#fff',
        alignSelf: 'center',
        width: '100%',
        height: '80%',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    takePictureButton: {
        height: 50,
        width: 50,
        backgroundColor: '#C7CDCD',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10
    },
    preview: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: '80%',
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 'auto'
    }
});
