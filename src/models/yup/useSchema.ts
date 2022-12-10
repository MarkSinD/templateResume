import {useTranslation} from "react-i18next";
import * as yup from "yup";

export const useSchema = () => {
  const {t} = useTranslation(['validation'])
  const required = t("required")
  const number = t("number")

  return yup.object({
    id: yup.number().typeError(number).required(required),
    userId: yup.number().typeError(number).required(required),
    title: yup.string().required(required),
    body: yup.string().required(required),
  });
}