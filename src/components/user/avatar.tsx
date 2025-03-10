import { StyleSheet, Text, View } from 'react-native';
import { getInitials } from '../../utils/functions';
import { AvatarProps } from '../../models/ui/avatarProps';

const Avatar: React.FC<AvatarProps> = ({ name, surname, image, size }) => {
    return (
        <View style={[styles.container, { width: size, height: size }]}>
            <Text style={{ fontSize: 30 }}>{getInitials(name, surname)}</Text>
        </View>
    );
};
export default Avatar;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
});