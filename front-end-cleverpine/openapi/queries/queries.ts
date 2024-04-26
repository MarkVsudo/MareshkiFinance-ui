// generated with @7nohe/openapi-react-query-codegen@1.2.0 

import { UseMutationOptions, UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { SystemService, UsersService } from "../requests/services.gen";
import { UserLogin, UserProfileUpdate, UserRegistration } from "../requests/types.gen";
import * as Common from "./common";
/**
* This is a healtheck method
* This method returns a 200 respponse for healthceck purposes
* @returns string OK
* @throws ApiError
*/
export const useSystemServiceGetApiSystemHealth = <TData = Common.SystemServiceGetApiSystemHealthDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: [Common.useSystemServiceGetApiSystemHealthKey, ...(queryKey ?? [])], queryFn: () => SystemService.getApiSystemHealth() as TData, ...options });
/**
* This is a version method
* This method returns the current application version
* @returns unknown System Version Response
* @throws ApiError
*/
export const useSystemServiceGetApiSystemInfo = <TData = Common.SystemServiceGetApiSystemInfoDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: [Common.useSystemServiceGetApiSystemInfoKey, ...(queryKey ?? [])], queryFn: () => SystemService.getApiSystemInfo() as TData, ...options });
/**
* Get user profile information
* Retrieves the profile information of a user by their unique ID
* @param data The data for the request.
* @param data.userId Unique identifier of the user
* @returns UserProfileResponse OK - Successfully retrieved user profile
* @throws ApiError
*/
export const useUsersServiceGetUserProfile = <TData = Common.UsersServiceGetUserProfileDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ userId }: {
  userId: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: [Common.useUsersServiceGetUserProfileKey, ...(queryKey ?? [{ userId }])], queryFn: () => UsersService.getUserProfile({ userId }) as TData, ...options });
/**
* This is a user login method
* This is a method for user login
* @param data The data for the request.
* @param data.requestBody This is a user login request body
* @returns TokenResponse OK
* @throws ApiError
*/
export const useUsersServiceLogin = <TData = Common.UsersServiceLoginMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: UserLogin;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: UserLogin;
}, TContext>({ mutationFn: ({ requestBody }) => UsersService.login({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* This is a user registration method
* This is a method for user registration
* @param data The data for the request.
* @param data.requestBody This is a user registration request body
* @returns TokenResponse Created
* @throws ApiError
*/
export const useUsersServiceRegister = <TData = Common.UsersServiceRegisterMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: UserRegistration;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: UserRegistration;
}, TContext>({ mutationFn: ({ requestBody }) => UsersService.register({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* Upload user avatar
* Allows a user to upload an avatar image
* @param data The data for the request.
* @param data.userId Unique identifier of the user
* @param data.formData This is the request body for uploading an avatar
* @returns unknown OK - Successfully uploaded user avatar
* @throws ApiError
*/
export const useUsersServiceUploadUserAvatar = <TData = Common.UsersServiceUploadUserAvatarMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  formData: { avatar?: Blob | File; };
  userId: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  formData: { avatar?: Blob | File; };
  userId: number;
}, TContext>({ mutationFn: ({ formData, userId }) => UsersService.uploadUserAvatar({ formData, userId }) as unknown as Promise<TData>, ...options });
/**
* Update user profile
* Allows a user to update their profile information
* @param data The data for the request.
* @param data.userId Unique identifier of the user
* @param data.requestBody This is the request body to update user profile
* @returns UserProfileResponse OK - Successfully updated user profile
* @throws ApiError
*/
export const useUsersServiceUpdateUserProfile = <TData = Common.UsersServiceUpdateUserProfileMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: UserProfileUpdate;
  userId: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: UserProfileUpdate;
  userId: number;
}, TContext>({ mutationFn: ({ requestBody, userId }) => UsersService.updateUserProfile({ requestBody, userId }) as unknown as Promise<TData>, ...options });
