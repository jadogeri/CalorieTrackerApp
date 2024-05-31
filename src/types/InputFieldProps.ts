import { GestureResponderEvent } from 'react-native';

export type InputFieldProps = {

    testID? : string,
    placeholder? : string,
    inputFieldStyle? : {},
    label? : string,
    textColor? : string,
    onChangeText? : ()=> string,
    secureTextEntry? : boolean,
    LeftIcon? : string,
    rightIcon? : string,
    leftIconColor? : string,
    leftIcon? : string,
    value? : string,
    leftIconStyle? : {},
    leftSize? : number,
    rightIconColor? : string,
    rightSize? : number,
    eyePressHandler? : ()=> GestureResponderEvent,
    rightIconStyle? : {}
}
