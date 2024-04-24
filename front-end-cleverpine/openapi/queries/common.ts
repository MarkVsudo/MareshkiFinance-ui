// generated with @7nohe/openapi-react-query-codegen@1.2.0 

import { UseQueryResult } from "@tanstack/react-query";
import { SystemService, UsersService } from "../requests/services.gen";
export type SystemServiceGetApiSystemHealthDefaultResponse = Awaited<ReturnType<typeof SystemService.getApiSystemHealth>>;
export type SystemServiceGetApiSystemHealthQueryResult<TData = SystemServiceGetApiSystemHealthDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSystemServiceGetApiSystemHealthKey = "SystemServiceGetApiSystemHealth";
export type SystemServiceGetApiSystemInfoDefaultResponse = Awaited<ReturnType<typeof SystemService.getApiSystemInfo>>;
export type SystemServiceGetApiSystemInfoQueryResult<TData = SystemServiceGetApiSystemInfoDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSystemServiceGetApiSystemInfoKey = "SystemServiceGetApiSystemInfo";
export type UsersServiceGetUserProfileDefaultResponse = Awaited<ReturnType<typeof UsersService.getUserProfile>>;
export type UsersServiceGetUserProfileQueryResult<TData = UsersServiceGetUserProfileDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUsersServiceGetUserProfileKey = "UsersServiceGetUserProfile";
export type UsersServiceLoginMutationResult = Awaited<ReturnType<typeof UsersService.login>>;
export type UsersServiceRegisterMutationResult = Awaited<ReturnType<typeof UsersService.register>>;
export type UsersServiceUploadUserAvatarMutationResult = Awaited<ReturnType<typeof UsersService.uploadUserAvatar>>;
export type UsersServiceUpdateUserProfileMutationResult = Awaited<ReturnType<typeof UsersService.updateUserProfile>>;
