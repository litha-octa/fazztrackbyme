import {Button, Text} from '@chakra-ui/react'

function Btn({disabled, bg ,onClick, label: LabelNya, type, px, iconL, iconR, color, ...props}) {
    const labelIsString = typeof LabelNya === 'string'
    return (
        <Button
            {...props}
            disabled={disabled}
            type={type}
            colorScheme={bg}
            leftIcon={iconL}
            rightIcon={iconR}
            mt="2"
            size="sm"
            rounded="6px"
            border="none"
            outline="none"
            color={!color?"white":color}
            onClick={onClick}
            px={px}
        >
            {labelIsString ? (
                <Text fontSize="11px"  fontWeight="bold"
                        fontFamily='sans-serif'
                >
                    {LabelNya}
                </Text>
            ) : (
                LabelNya
            )}
        </Button>
    )
}

export default Btn
