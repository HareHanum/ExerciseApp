import * as React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';

export const navigationRef: React.RefObject<NavigationContainerRef> =
  React.createRef();
export const isReadyRef = React.createRef<boolean>();

export function navigate(name: string, params?: object) {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function setParams(params: object) {
  if (isReadyRef.current && navigationRef.current) {
    // Perform set params if the app has mounted
    navigationRef.current.setParams(params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function reset(state: any) {
  if (isReadyRef.current && navigationRef.current) {
    // Perform reset if the app has mounted
    navigationRef.current.reset(state);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function goBack() {
  if (isReadyRef.current && navigationRef.current) {
    // Perform go back if the app has mounted
    navigationRef.current.goBack();
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}
