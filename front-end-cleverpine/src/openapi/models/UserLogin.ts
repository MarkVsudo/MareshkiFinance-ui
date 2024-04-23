/* tslint:disable */
/* eslint-disable */
/**
 * MareshkiFinance Service - User model
 * This is a Template YAML For mareshkifinance
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * This is a UserLogin object
 * @export
 * @interface UserLogin
 */
export interface UserLogin {
    /**
     * 
     * @type {string}
     * @memberof UserLogin
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof UserLogin
     */
    password?: string;
}

/**
 * Check if a given object implements the UserLogin interface.
 */
export function instanceOfUserLogin(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserLoginFromJSON(json: any): UserLogin {
    return UserLoginFromJSONTyped(json, false);
}

export function UserLoginFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserLogin {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
        'password': !exists(json, 'password') ? undefined : json['password'],
    };
}

export function UserLoginToJSON(value?: UserLogin | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'password': value.password,
    };
}

