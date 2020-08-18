
import React, { useEffect, useState } from 'react';
import { Image, } from 'react-native';



import image000 from '../../assets/Cabelos/modelo-1.png/'
import image001 from '../../assets/Cabelos/modelo-1-azul.png/'
import image002 from '../../assets/Cabelos/modelo-2.png/'
import image003 from '../../assets/Cabelos/modelo-2-azul.png/'
import image004 from '../../assets/Cabelos/modelo-1-azul-mech.png/'
import image005 from '../../assets/Cabelos/modelo-2-mech-azul.png/'
import image006 from '../../assets/Cabelos/modelo-1-mech.png/'
import image007 from '../../assets/Cabelos/modelo-2-mech.png/'


import styles from './styles';

export default function SelectImage(props) {
    switch (props.case) {
        case 1:
            return (
                <Image
                    source={image000}
                    resizeMethod={'resize'}
                />
            );
        case 2:
            return (
                <Image
                    source={image001}
                    resizeMethod={'resize'}
                />
            );
        case 3:
            return (
                <Image
                    source={image002}
                    resizeMethod={'resize'}
                />
            );
        case 4:
            return (
                <Image
                    source={image003}
                    resizeMethod={'resize'}
                />
            );
        case 5:
            return (
                <Image
                    source={image004}
                    resizeMethod={'resize'}
                />
            );
        case 6:
            return (
                <Image
                    source={image005}
                    resizeMethod={'resize'}
                />
            );
        case 7:
            return (
                <Image
                    source={image006}
                    resizeMethod={'resize'}
                />
            );
        case 8:
            return (
                <Image
                    source={image007}
                    resizeMethod={'resize'}
                />
            );
    }

}