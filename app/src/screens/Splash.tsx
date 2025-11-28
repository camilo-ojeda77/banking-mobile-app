import { useEffect } from 'react';
import {
    Image,
    StyleSheet,
    View
} from 'react-native';

const Splash = ({onFinish}:{onFinish:()=>void}) =>{
    useEffect(() =>{
        const timer = setTimeout(()=> {
            onFinish();
        },5000);
        return()=>clearTimeout(timer);
    },[onFinish]);

    return (
        <View style ={styles.container}>
            <Image
            source={require('../assets/images/cafe.png')}
            resizeMode='contain'
            />
        </View>
    );

};

const styles = StyleSheet.create({
    container:{
        flex: 1 ,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'rgba(253, 253, 253, 1)'
    },
    logo:{
        width:200,
        height: 200
    }
});

export default Splash // me permite usarlo en cualquier parte del codigo