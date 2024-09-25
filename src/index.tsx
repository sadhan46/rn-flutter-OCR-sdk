import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'rn-ocr1-sdk' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const RnOcr1SdkModule = isTurboModuleEnabled
  ? require('./NativeRnOcr1Sdk').default
  : NativeModules.RnOcr1Sdk;

const RnOcr1Sdk = RnOcr1SdkModule
  ? RnOcr1SdkModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return RnOcr1Sdk.multiply(a, b);
}
