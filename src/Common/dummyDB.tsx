type saveDataType = {
    key: string,
    fileName: string,
    initStatus: {
        isInitializedLocation: boolean,
        isInitializedUnit: boolean,
    },
    unitLatitude: number,
    unitLongitude: number,
    region: {
        latitude: number,
        longitude: number,
        latitudeDelta: number,
        longitudeDelta: number,
    },
    mapData: {
        [key: string]: {
            imgType: string,
            imgName: string,
            posX: number,
            posY: number,
            layer: number,
            imgRatio: number,
            imgRotate: number,
        },
    },
}

export const dummyDB: saveDataType = {
    fileName: "",
    key: '20221203190900', // YYYYMMDDhhmmss
    initStatus: {
        isInitializedLocation: true,
        isInitializedUnit: true,
    },
    unitLatitude: 10,
    unitLongitude: 10,
    region: {
        latitude: 38.165510778804716,
        //latitude: 37.8025259,
        longitude: 137.6747134141624,
        //longitude: -122.4351431,
        latitudeDelta: 0.5,
        longitudeDelta: 10,
    },
    mapData: {
        xy01: {
            imgType: "img",
            imgName: 'Asset0_1',
            posX: 0,
            posY: 1,
            layer: 2,
            imgRatio: 2,
            imgRotate: 0,
        },
    },
}