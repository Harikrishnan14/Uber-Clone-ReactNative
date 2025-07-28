import { setDestination } from '@/redux/slices/navSlice'
import { useNavigation } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NavFavourites from './NavFavourites'

const NavigateCard = () => {

    const GOOGLE_MAPS_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY

    const navigation = useNavigation()

    return (
        <View className='flex-1 bg-white'>
            <Text className='text-center py-5 text-xl'>Good Morning, Hari</Text>
            <View className='border-t border-gray-200 flex-shrink'>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder="Where To?"
                        styles={toInputBoxStyles}
                        fetchDetails={true}
                        returnKeyType={"search"}
                        minLength={2}
                        onPress={(data, details = null) => {
                            dispatch(
                                setDestination({
                                    location: details.geometry.location,
                                    description: data.description
                                })
                            )
                            navigation.navigate("RideOptionsCard")
                        }}
                        enablePoweredByContainer={false}
                        query={{
                            key: GOOGLE_MAPS_API_KEY,
                            language: "en",
                        }}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                    />
                </View>

                <NavFavourites />

            </View>
        </View>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})