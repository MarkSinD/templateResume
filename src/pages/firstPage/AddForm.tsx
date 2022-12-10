import {FormTextField} from "../../components/atoms";
import {Box as MuiBox, Button} from "@mui/material";
import * as React from "react";
import {memo} from "react";
import {useTranslation} from "react-i18next";
import {styled} from "@mui/material/styles";

const Box = styled(MuiBox)(({theme}) => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  padding: theme.spacing(4),
  alignItems: "center"
}))

export const AddForm = memo(() => {
  const {t} = useTranslation(["mainPage"])

  return (
    <Box>
      <FormTextField
        htmlType={"text"}
        name={"id"}
        label={"id"}
        placeholder={"id"}
      />
      <FormTextField
        htmlType={"text"}
        name={"userId"}
        label={"userId"}
        placeholder={"userId"}
      />
      <FormTextField
        htmlType={"text"}
        name={"title"}
        label={"title"}
        placeholder={"title"}
      />
      <FormTextField
        htmlType={"text"}
        name={"body"}
        label={"body"}
        placeholder={"body"}
      />
      <Button type={"submit"}>{t('add')}</Button>
    </Box>
  )
})

AddForm.displayName = "AddForm"