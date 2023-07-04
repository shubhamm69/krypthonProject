import { View, Text, Image, } from 'react-native'
import React from 'react'


export default function card() {
    return (

        <View class="bg-red-900 ">
            <Image className="object-scale-down p-2" source={require('../assets/Human.png')} />
        </View>

    )
}
