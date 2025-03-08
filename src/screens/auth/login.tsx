import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defaultScreenStyle } from '../../styles/defaultScreenStyle'
import Input from '../../components/ui/input'
import Button from '../../components/ui/button'
import { height } from '../../utils/constants'
import { Colors } from '../../theme/colors'

const Login: React.FC = () => {
    return (
        <SafeAreaView style={defaultScreenStyle.safeAreaContainer}>
            <ScrollView>
                <View style={defaultScreenStyle.container}>
                    <Input title='E-posta' />
                    <Input title='Şifre' />
                    <Text style={styles.forgotPassword}>Şifremi Unuttum</Text>
                    <View style={{ marginTop: height * 0.08 }}>
                        <Button title='Giriş Yap' />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    forgotPassword: {
        textAlign: 'right',
        marginTop: 5,
        color: Colors.PRIMARY
    }
})