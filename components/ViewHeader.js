import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import { withNavigation } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

const ViewHeader = ({
    navigation,
    title,
    bookmark,
    bookmarked,
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    navigation.goBack()
                }}
                hitSlop={{ top: 32, bottom: 32, left: 32, right: 32 }}
            >
                <Ionicons name="ios-arrow-back" size={28} color="#da5746" />
            </TouchableOpacity>

            <Text style={styles.title}>
                {title}
            </Text>

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={bookmark}
                hitSlop={{ top: 32, bottom: 32, left: 32, right: 32 }}
            >
                <Ionicons name={bookmarked ? "md-heart" : "md-heart-outline"}
                    size={24} color="#da5746" 
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 48,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#212121',
    }
})

export default withNavigation(ViewHeader)