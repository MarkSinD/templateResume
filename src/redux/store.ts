import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {rtkQueryHandler} from "./rtkQueryHandler";
import {jsonPlaceholderApi} from "./api/posts/jsonPlaceholderApi";
import {themeSlice} from "./store/theme/themeSlice";

const apis = [
  jsonPlaceholderApi,
]

const reducers = {
  [themeSlice.name]: themeSlice.reducer
};

const createRootReducer = () =>
  combineReducers(
    apis.reduce(
      (storeReducers, api) => ({
        ...storeReducers,
        [api.reducerPath]: api.reducer,
      }),
      {
        ...reducers,
      }
    )
  );

export const store = configureStore({
  reducer: createRootReducer(),
  middleware: (getDefaultMiddleware) =>
    apis.reduce(
      (middlewares, api) => {
        return middlewares?.concat(api.middleware)
      },
      getDefaultMiddleware().concat(rtkQueryHandler)
    ),
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
