import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: imageWidth,
        height: imageWidth
    },
    text: {
        color: '$white',
        fontWeight: '700',
        fontSize: 28,
        letterSpacing: -0.5,
        marginTop: 10
    }
});
