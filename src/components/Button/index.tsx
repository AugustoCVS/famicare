import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  children?: React.ReactNode;
  className?: string;
  onPress?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...rest
}) => (
  <TouchableOpacity {...rest} className={className}>
    {children}
  </TouchableOpacity>
);