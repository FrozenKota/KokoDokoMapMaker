import React, {useState, useEffect} from 'react';
import { MobileAds, BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

//const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-2927514582864076~1158987390';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-2927514582864076/9662634694';

const MyAdmob = () => {
    const [ adMobIsInitialized, setAdmobIsInitialized] = useState(false);

    // Admob 初期設定
    useEffect(() => {
        MobileAds()
            .initialize()
            .then(adapterStatuses => {
                console.log("Admob Initialized");
                setAdmobIsInitialized(true);
            // Initialization complete!
        });
    }, [adMobIsInitialized]); // adMobIsInitializedに変更があった場合に、コールバック関数を実行する。
    
  return (
    <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  );
}

export default MyAdmob