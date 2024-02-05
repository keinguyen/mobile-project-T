import { PortalProvider } from '@gorhom/portal';
import { AuthProvider } from '@src/auth';
import { CartProvider } from '@src/cart';
import AnimatedSplashScreen from '@src/components/AnimatedSplashScreen/AnimatedSplashScreen';
import { RootNavigation } from '@src/navigation';
import { reduxStore } from '@src/store';
import { AppThemeProvider } from '@src/theme/AppThemeProvider';
import React, { useCallback, useEffect, useState } from 'react';
import { LogBox, StyleSheet } from 'react-native';
import BootSplash from 'react-native-bootsplash';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);

  const initApp = useCallback(async () => {
    try {
      LogBox.ignoreAllLogs();
      reduxStore.createStore();
      await reduxStore.rehydrateStore();
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    BootSplash.hide({ fade: true });
    initApp();
  }, [initApp]);

  if (loading || !splashAnimationFinished || !reduxStore.persistor) {
    return (
      <AnimatedSplashScreen
        onAnimationFinish={(isCancelled) => {
          if (!isCancelled) {
            setSplashAnimationFinished(true);
          }
        }}
      />
    );
  }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 10 * 60 * 1000,
        retry: false,
      },
    },
  });

  return (
    <Provider store={reduxStore.instance}>
      <PersistGate loading={null} persistor={reduxStore.persistor}>
        <GestureHandlerRootView style={styles.container}>
          <PortalProvider>
            <SafeAreaProvider>
              <AppThemeProvider>
                <AuthProvider>
                  <CartProvider>
                    <QueryClientProvider client={queryClient}>
                      <RootNavigation />
                    </QueryClientProvider>
                  </CartProvider>
                </AuthProvider>
              </AppThemeProvider>
            </SafeAreaProvider>
          </PortalProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}
