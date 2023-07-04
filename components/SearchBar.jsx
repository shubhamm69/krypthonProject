import React from 'react'
import { View, TextInput } from 'react-native';
import { MagnifyingGlassIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline'

export default function card() {
    return (

        <View className="flex-row items-center space-x-2 mx-4">
            <View className="flex-row space-x-2 bg-white p-3 flex-1 items-center rounded-[15px]">
                <View className="flex-row space-x-2 bg-white flex-1 items-center">
                    <MagnifyingGlassIcon color="black" size={24} style={{ opacity: 0.4 }} />
                    <TextInput placeholder='Search  ' keyboardType='default' className="text-[14px]" style={{ opacity: 0.4, fontFamily: 'Poppins-Medium' }} />
                </View>
                <AdjustmentsVerticalIcon color="black" size={24} style={{ opacity: 0.4 }} />
            </View>
        </View>

    )
}
