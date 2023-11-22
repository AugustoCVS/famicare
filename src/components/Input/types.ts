export type InputProps = {
    placeholder: string, 
    value?: string, 
    onChangeText?: (text: string) => void,
    secureTextEntry?: boolean,
    isInvalid?: boolean
    errorMessage?: string
}