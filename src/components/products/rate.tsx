import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Star1 } from 'iconsax-react-native'
import { Colors } from '../../theme/colors'

const Rate: React.FC = ({ rating }) => {

    const fullStar = Math.floor(rating.rate)
    const halfStar = rating.rate % 1 >= 0.5
    const emptyStar = 5 - fullStar - (halfStar ? 1 : 0)

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.rate}>{rating.rate}</Text>
                {
                    Array(fullStar)
                        .fill(null)
                        .map((item, index) => (
                            <Star1 key={index} size="20" color={Colors.PRIMARY} variant="Bold" />
                        ))
                }
                {
                    halfStar && <Star1 size="20" color={Colors.PRIMARY} variant="Bulk" />
                }
            </View>

            <View style={{ justifyContent: 'center' }}>
                <Text style={styles.rate}>|{rating.count} Değerlendirme</Text>
            </View>

        </View>
    )
}

export default Rate

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    rate: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})