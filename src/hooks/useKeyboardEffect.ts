import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import {
  Keyboard,
  KeyboardEvent,
  KeyboardEventName,
  Platform,
} from 'react-native';
const kbShowEvent: KeyboardEventName =
  Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
const kbHideEvent: KeyboardEventName =
  Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';
/**
 *  Hook to listen to keyboard show/hide event.
 *  Special implement to only work on active screen
 *
 * @param callback
 */
export function useKeyboardEffect(
  onKeyboardEventChange: (isShow: boolean, e: KeyboardEvent) => void,
): void {
  const registerKbEvents = useCallback(() => {
    const showListener = Keyboard.addListener(kbShowEvent, (e) =>
      onKeyboardEventChange(true, e),
    );
    const hideListener = Keyboard.addListener(kbHideEvent, (e) =>
      onKeyboardEventChange(false, e),
    );
    return () => {
      showListener?.remove();
      hideListener?.remove();
    };
  }, [onKeyboardEventChange]);
  useFocusEffect(registerKbEvents);
}
