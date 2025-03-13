import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet, Dimensions, Alert } from "react-native";
import Logo from "../../assets/LogoLogin/Logo.png";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from 'expo-blur';
import { CustomInput } from '../../components/input/index'; // Importe o componente CustomInput
import { useNavigation, NavigationProp, NavigationContainerProps } from "@react-navigation/native";
import BottomRoutes from "../../routes/bottom.routes";

export default function Login() {

    const navigation = useNavigation<NavigationProp<any>>();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    async function GetLogin() {
        try {
            console.log("Email:", email, "Password:", password); // Depuração
            if (!email || !password) {
                
                console.log("Campos vazios!"); // Substitui o Alert.alert
                return;
            }
            navigation.navigate("BottomRoutes");
            console.log("Logado com sucesso!"); // Substitui o Alert.alert
        } catch (error) {
            
            console.log("Rapaz, deu algo errado no login aí:", error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.Boxtop}>
                <Image source={Logo} style={styles.logo} />
                <Text style={styles.BrandName}> BookHouse </Text>
                <Text style={styles.title}> Bem-Vindo de volta! </Text>
            </View>

            <View style={styles.Boxmid}>
                <CustomInput
                    label="E-mail"
                    iconName="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChangeText={setEmail}
                />

                <CustomInput
                    label="Senha"
                    iconName="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChangeText={setPassword}
                />

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.buttonbox} onPress={GetLogin}>
                        <Text style={styles.button}> Entrar  </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.criarconta}>
                    <Text >Não tem uma conta?</Text>
                    <Text style={{ color: "blue", fontSize: 12, marginLeft: 3, }}>Crie uma agora!</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Boxtop: {
        width: '100%',
        height: Dimensions.get('window').height / 2,
        position: 'absolute',
        top: 0,
        backgroundColor: '#77BCA4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Boxmid: {
        width: 300,
        height: Dimensions.get('window').height / 2.5,
        backgroundColor: '#F4F8FF',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 250,
        borderRadius: 10,
        paddingVertical: 20,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 13,
        },
        shadowOpacity: 0.24,
        shadowRadius: 14.86,
        elevation: 18
    },
    logo: {
        width: 200,
        height: 150,
    },
    BrandName: {
        fontSize: 30,
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 100,
        color: 'white',
        fontFamily: 'Roboto',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 30,
        color: 'white',
        fontFamily: 'Sans-serif',
    },
    buttonArea: {
        width: '90%',
        alignItems: 'center',
    },
    buttonbox: {
        width: '80%',
        height: 40,
        backgroundColor: '#77BCA4',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
    button: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    criarconta: {
        position: 'absolute',
        bottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
});