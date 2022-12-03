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

const dummyDB: saveDataType = {
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
        longitude: 0.05000013082483434,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    },
    imgData: {
        xy01: { PosX: 0, PosY: 1, layer: 2, sizeRatio: 2, imgName: 'Asset0_1', },
    },
}