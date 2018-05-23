import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
    $largeImageSize: imageWidth,
    $smallImageSize: imageWidth / 2,
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '$largeImageSize',
        height: '$largeImageSize',
        marginBottom: 40
    },
    text: {
        color: '$white',
        fontWeight: '700',
        fontSize: 28,
        letterSpacing: -0.5,
        marginTop: 10
    }
});
