import { ButtonHTMLAttributes } from 'react'

import '../styles/button.scss';
import React from "react"
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
};

export function Button({isOutlined = false, ...props}: ButtonProps) {
  return (
    <button className={`button ${isOutlined ? 'outlined' : ""}`} {...props} />
  )
}