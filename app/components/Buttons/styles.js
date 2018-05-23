import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        alignItems: 'center'
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 18,
        marginRight: 11
    },
    text: {
        color: '$white',
        fontSize: 14,
        fontWeight: '500'
    }
});
