import { TextInput } from 'react-native-paper'
import React from 'react'
import { InputFieldProps } from '../types/InputFieldProps'


const InputField : React.FC = ( props : InputFieldProps) => {
  return (
    <TextInput 
      testID={props.testID}
      placeholder={props.placeholder} style={props.inputFieldStyle} 
      label={props.label} textColor={props.textColor}
      autoCapitalize="none" secureTextEntry={props.secureTextEntry} 
      onChangeText={props.onChangeText} activeOutlineColor='purple' value={props.value}
      left={<TextInput.Icon icon={props.leftIcon} color={props.leftIconColor} size={props.leftSize}  style={props.leftIconStyle} />}
      right={<TextInput.Icon icon={props.rightIcon} color={props.rightIconColor} size={props.rightSize}  style={props.rightIconStyle} onPress={props.eyePressHandler}/>}

    />
  )
}

export default InputField