import { selectOrigin } from '@/redux/slices/navSlice';
import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';

const MapViewComponent = () => {

    const origin = useSelector(selectOrigin)

    return (
        <MapView
            style={{
                flex: 1
            }}
            mapType='mutedStandard'
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.long,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >
            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    title='Origin'
                    description={origin.description}
                    identifier='origin'
                />
            )}
        </MapView>
    )
}

export default MapViewComponent

const styles = StyleSheet.create({})