
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNRnOcr1SdkSpec.h"

@interface RnOcr1Sdk : NSObject <NativeRnOcr1SdkSpec>
#else
#import <React/RCTBridgeModule.h>

@interface RnOcr1Sdk : NSObject <RCTBridgeModule>
#endif

@end
