import {AsyncStorage} from "react-native";

const _storeData = async (key, val) => {
    try {
        await AsyncStorage.setItem(key, val);
    } catch (error) {
        // Error saving data
    }
};


const _retrieveData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            // We have data!!
            console.log(value);
        }
    } catch (error) {
        // Error retrieving data
    }
};


export { _storeData };
export { _retrieveData };