import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function EditHistory() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-red-500">Edit History</Text>
            <StatusBar style="auto" />
        </View>
    );
};

