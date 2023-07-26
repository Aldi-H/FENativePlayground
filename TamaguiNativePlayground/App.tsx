/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Suspense } from 'react';
import {
  TamaguiProvider,
  Paragraph,
  SizableText,
  XStack,
  YStack,
  Button,
  Card,
  H2,
  Image,
  H1,
} from 'tamagui';
import appConfig from './tamagui.config';

function App(): JSX.Element {
  return (
    <TamaguiProvider config={appConfig}>
      <Suspense>
        <YStack space="$2" alignItems="center">
          <SizableText size="$3">SizableText</SizableText>
          <XStack space>
            <H1 size="$8" theme="alt1_Progress">
              This is Heading
            </H1>
            <SizableText theme="alt2" size="$3">
              alt2
            </SizableText>
          </XStack>
          <Paragraph size="$2" fontWeight="800">
            Paragraph
          </Paragraph>
        </YStack>

        <Card elevate size="$2" w="$20" borderRadius="$5">
          <Card.Header padded>
            <H2>Sony A7IV</H2>
            <Paragraph theme="alt2">Now available</Paragraph>
          </Card.Header>
          <Card.Footer padded>
            <XStack flex={1} />
            <Button borderRadius="$10">Purchase</Button>
          </Card.Footer>
          <Card.Background>
            <Image
              borderRadius="$5"
              resizeMode="contain"
              alignSelf="center"
              source={{
                width: 284,
                height: 157,
                uri: 'https://webstatic.hoyoverse.com/upload/op-public/2023/07/19/acd151952f1145fdef15104f25b5f598_7525793049312632056.png',
              }}
            />
          </Card.Background>
        </Card>
      </Suspense>
    </TamaguiProvider>
  );
}

export default App;
