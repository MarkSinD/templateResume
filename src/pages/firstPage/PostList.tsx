import * as React from 'react';
import {useCallback} from 'react';
import List from '@mui/material/List';
import {useGetPostsQuery} from "../../redux/api/posts/jsonPlaceholderApi";
import {FormProvider, SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import {Post} from "../../models/firstPage/FirstPage";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {defaultValues} from "../../models/yup/defaultValues";
import {useTranslation} from "react-i18next";
import {PostItem} from "./PostItem";
import {AddForm} from "./AddForm";
import {useSnackbar} from "../harness/snackbar";
import {useSchema} from "../../models/yup/useSchema";

export const PostList = () => {
  const {data: components = []} = useGetPostsQuery(null)
  const {t} = useTranslation(['snackbar'])
  const schema = useSchema()
  const {showSuccess, showError} = useSnackbar()
  const methods = useForm<Post>({
    resolver: yupResolver(schema),
    defaultValues: defaultValues
  })

  const onSubmitSuccessful: SubmitHandler<Post> = useCallback(() => {
    showSuccess(t('success'))
  }, []);

  const onSubmitError: SubmitErrorHandler<Post> = useCallback(() => {
    showError(t('requiredFieldsFilled'))
  }, []);

  return (
    <FormProvider {...methods} >
      <form onSubmit={methods.handleSubmit(onSubmitSuccessful, onSubmitError)}>
        <AddForm/>
        <List sx={{display: "flex", flexDirection: "column", alignItems: "center", width: '100%'}}>
          {
            components.map(({id, body, title}) =>
              (<PostItem key={id} id={id} body={body} title={title}/>))
          }
        </List>
      </form>
    </FormProvider>
  )
}