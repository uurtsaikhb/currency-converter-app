import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';
import Options from './screens/Options';
import Themes from './screens/Themes';

import Navigator from './config/routes';

EStyleSheet.build({
    $primaryColor: '#03A9F4',
    $primaryOrange: '#FF9800',
    $primaryGreen: '#009688',
    $primaryPurple: '#673AB7',

    $white: '#fff',
    $inputText: '$primaryColor',
    $lightGray: '#F0F0F0',
    $border: '#e2e2e2',
    $darkText: '#343434'
    // $outline: 1
});

export default Navigator;
