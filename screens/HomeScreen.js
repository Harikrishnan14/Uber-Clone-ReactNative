import NavFavourites from '@/components/NavFavourites';
import NavOptions from '@/components/NavOptions';
import { setDestination, setOrigin } from '@/redux/slices/navSlice';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';

const HomeScreen = () => {
    const dispatch = useDispatch()

    const GOOGLE_MAPS_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY

    return (
        <SafeAreaView className='bg-white h-full'>
            <View className='p-5'>
                <Image
                    source={{
                        uri: "https://links.papareact.com/gzs"
                    }}
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain'
                    }}
                />

                <GooglePlacesAutocomplete
                    placeholder="Where From?"
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    onPress={(data, details = null) => {
                        dispatch(
                            setOrigin({
                                location: details.geometry.location,
                                description: data.description
                            })
                        )

                        dispatch(setDestination(null))
                    }}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    enablePoweredByContainer={false}
                    minLength={2}
                    query={{
                        key: GOOGLE_MAPS_API_KEY,
                        language: "en",
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />

                <NavOptions />
                <NavFavourites />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})