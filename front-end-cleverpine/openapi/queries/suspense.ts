// generated with @7nohe/openapi-react-query-codegen@1.2.0 

import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { SystemService, UsersService } from "../requests/services.gen";
import * as Common from "./common";
/**
* This is a healtheck method
* This method returns a 200 respponse for healthceck purposes
* @returns string OK
* @throws ApiError
*/
export const useSystemServiceGetApiSystemHealthSuspense = <TData = Common.SystemServiceGetApiSystemHealthDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: [Common.useSystemServiceGetApiSystemHealthKey, ...(queryKey ?? [])], queryFn: () => SystemService.getApiSystemHealth() as TData, ...options });
/**
* This is a version method
* This method returns the current application version
* @returns unknown System Version Response
* @throws ApiError
*/
export const useSystemServiceGetApiSystemInfoSuspense = <TData = Common.SystemServiceGetApiSystemInfoDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: [Common.useSystemServiceGetApiSystemInfoKey, ...(queryKey ?? [])], queryFn: () => SystemService.getApiSystemInfo() as TData, ...options });
/**
* Get user profile information
* Retrieves the profile information of a user by their unique ID
* @param data The data for the request.
* @param data.userId Unique identifier of the user
* @returns UserProfileResponse OK - Successfully retrieved user profile
* @throws ApiError
*/
export const useUsersServiceGetUserProfileSuspense = <TData = Common.UsersServiceGetUserProfileDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ userId }: {
  userId: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: [Common.useUsersServiceGetUserProfileKey, ...(queryKey ?? [{ userId }])], queryFn: () => UsersService.getUserProfile({ userId }) as TData, ...options });
