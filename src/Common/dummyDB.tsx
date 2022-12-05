type saveDataType = {
    fileName: string,
    key: string,
    initStatus: {
        location: boolean,
        divNum: boolean,
    },
    divNumX: number,
    divNumY: number,
    region: {
        latitude: number,
        longitude: number,
        latitudeDelta: number,
        longitudeDelta: number,
    },
    imgData: {
        [key: string]: {
            PosX: number,
            PosY: number,
            layer: number,
            sizeRatio: number,
            imgName: String
        }
    }
};

export const dummyDB: saveDataType = {
    fileName: "",
    key: '202212031909-01',
    initStatus: {
        location: true,
        divNum: true,
    },
    divNumX: 10,
    divNumY: 10,
    region: {
        latitude: 38.165510778804716,
        //latitude: 37.8025259,
        longitude: 137.6747134141624,
        //longitude: -122.4351431,
        latitudeDelta: 0.5,
        longitudeDelta: 10,
    },
    imgData: {
        xy01: { PosX: 0, PosY: 1, layer: 2, sizeRatio: 2, imgName: 'Asset0_1', },
    },
}