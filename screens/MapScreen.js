import MapViewComponent from '@/components/MapViewComponent'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MapScreen = () => {
    return (
        <View>
            <View className='h-1/2'>
                <MapViewComponent />
            </View>
            <View className='h-1/2'>
            </View>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})