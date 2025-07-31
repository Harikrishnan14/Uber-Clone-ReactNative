import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from 'expo-router'
import { Image } from 'react-native'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '@/redux/slices/navSlice'

const RideOptionsCard = () => {

    const navigation = useNavigation()
    const [selected, setSelected] = useState(null)
    const travelTimeInformation = useSelector(selectTravelTimeInformation)

    const SURGE_CHARGE_RATE = 1.5

    const data = [
        {
            id: "Uber-X-123",
            title: "Uber X",
            multiplier: 1,
            image: "https://links.papareact.com/3pn"
        },
        {
            id: "Uber-XL-456",
            title: "Uber XL",
            multiplier: 1.2,
            image: "https://links.papareact.com/35w8"
        },
        {
            id: "Uber-LUX-789",
            title: "Uber LUX",
            multiplier: 1.75,
            image: "https://links.papareact.com/7pf"
        },
    ]

    return (
        <View className='flex-grow bg-white'>
            <View>
                <TouchableOpacity
                    className='absolute top-3 left-5 z-50 p-3 rounded-full'
                    onPress={() => navigation.navigate("NavigateCard")}
                >
                    <Icon
                        name="chevron-left"
                        type='fontawsome'
                    />
                </TouchableOpacity>
                <Text className='text-center py-5 text-lg'>Select a Ride - {travelTimeInformation?.distance?.text}</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { id, title, multiplier, image } }) => (
                    <TouchableOpacity
                        className={`flex-row items-center justify-between px-10 ${id === selected?.id && 'bg-gray-200'}`}
                        onPress={() => setSelected(item)}
                    >
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: "contain"
                            }}
                            source={{ uri: image }}
                        />
                        <View className='-mr-6'>
                            <Text className='text-xl font-semibold'>{title}</Text>
                            <Text>{travelTimeInformation?.duration?.text} Travel Time</Text>
                        </View>
                        <Text className='text-xl'>£99
                            {new Intl.NumberFormat('en-gb', {
                                style: 'currency',
                                currency: 'GBP'
                            }).format((travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100)}
                        </Text>
                    </TouchableOpacity>
                )}
            />

            <View className='mt-auto border-t border-gray-200'>
                <TouchableOpacity
                    className={`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}
                    disabled={!selected}
                >
                    <Text className='text-center text-white text-xl'>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})