import {TextField} from '@mui/material'
import React, {memo} from 'react'
import {Controller, useFormContext} from "react-hook-form";

interface Props {
  name: string,
  label: string,
  placeholder?: string,
  htmlType: string,
}

export const FormTextField = memo(({
  name,
  label,
  placeholder,
  htmlType,
}: Props) => {
  const {control} = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: field,
        fieldState: {error, invalid},
      }) => {
        return (
          <TextField
            {...field}
            label={label}
            placeholder={placeholder}
            InputProps={{type: htmlType}}
            error={invalid}
            helperText={error?.message}
            sx={{maxWidth: "360px"}}
          />
        )
      }}
    />
  )
})

FormTextField.displayName = 'FormTextField'
