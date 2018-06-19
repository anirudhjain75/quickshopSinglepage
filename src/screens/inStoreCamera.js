import React from 'react';
import {View, Text} from 'react-native';
import {CameraKitCameraScreen} from 'react-native-camera-kit';

class inStoreCamera extends React.Component {
    render() {
        return (
            <View>
                <CameraKitCameraScreen
                    scanBarcode={true}
                    laserColor={"blue"}
                    frameColor={"yellow"}
                    style={{height: 500, borderWidth: 2}}

                    onReadCode={((event) => {
                        console.log(event);
                        console.log("Qr code found")
                    })} //optional
                    hideControls={true}           //(default false) optional, hide buttons and additional controls on top and bottom of screen
                    showFrame={false}   //(default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
                    offsetForScannerFrame = {10}   //(default 30) optional, offset from left and right side of the screen
                    heightForScannerFrame = {300}  //(default 200) optional, change height of the scanner frame
                    colorForScannerFrame = {'red'} //(default white) optional, change colot of the scanner frame
                />
                <Text style={{alignSelf: 'center', marginTop: 20, fontSize: 20}}>Items on your basket</Text>
            </View>
        )
    }
}

export default inStoreCamera;