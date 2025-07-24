import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { useRouter } from 'expo-router'

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "map"
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "eats"
    },
]

const NavOptions = () => {

    const router = useRouter()

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity
                    className='p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40'
                    onPress={() => router.push(`/${item.screen}`)}
                >
                    <View>
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: 'contain'
                            }}
                            source={{ uri: item.image }}
                        />
                        <Text className='mt-2 text-lg font-semibold'>{item.title}</Text>
                        <Icon
                            className='p-2 bg-black rounded-full w-12 mt-4'
                            name='arrowright'
                            color='white'
                            type='antdesign'
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions

const styles = StyleSheet.create({})