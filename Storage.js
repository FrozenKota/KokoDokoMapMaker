import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
const storage = new Storage({
  storageBackend: AsyncStorage,

  defaultExpires: null,   // 2022/09/05
});
 
export { storage };