import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const demoObj: any = {
    fileName: "",
    initStatus: {
        location: true,
        divNum: true,
    },
    divNumX: 10,
    divNumY: 10,
    region: {
        latitude: 38.165510778804716, 
        longitude: 0.05000013082483434,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05 * (width / height),
    },
    imgData: {
        xy01:{PosX: 0, PosY: 1, layer: 2, imgName: 'Asset0_1',},    // Dummy. This is example object data.
    },
}

export default demoObj;