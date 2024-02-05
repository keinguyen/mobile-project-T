import { Box, Button, TextField } from '@src/components';
import { TicketStackParamList } from '@src/features/chat';
import streamChatServices from '@src/features/chat/services/stream-chat.services';
import { ScreenProps } from '@src/navigation/types';
import { actions } from '@src/store/redux';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Keyboard, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';

interface FormValues {
  title: string;
  descriptions: string;
}

export const CreateTicket: React.FC<
  ScreenProps<TicketStackParamList, 'CreateTicket'>
> = ({ navigation }) => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormValues>({
    defaultValues: {
      title: undefined,
      descriptions: undefined,
    },
  });

  const onSetupPassphrase: SubmitHandler<FormValues> = async ({
    descriptions,
    title,
  }) => {
    if (!isValid) {
      return;
    }

    Keyboard.dismiss();
    console.log(descriptions, title);
    const channelId = (Math.random() + 1).toString(36).substring(7);
    const id = await streamChatServices.createChannel(title, channelId);
    if (id) {
      dispatch(actions.ticket.upsertTicket({ id, desc: descriptions, title }));
      navigation.goBack();
    }
  };

  return (
    <Box flex={1} p="m" pb="l">
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Box>
              <TextField
                inputProps={{
                  value: value,
                  onBlur: onBlur,
                  onChangeText: onChange,
                  placeholder: 'Tiêu đề',
                  keyboardType: 'default',
                  autoFocus: true,
                }}
              />
            </Box>
          )}
          name="title"
        />
        <Box py="m">
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Box>
                <TextField
                  inputProps={{
                    value: value,
                    onBlur: onBlur,
                    onChangeText: onChange,
                    placeholder: 'Chi tiết',
                    keyboardType: 'default',
                  }}
                />
              </Box>
            )}
            name="descriptions"
          />
        </Box>
      </ScrollView>
      <Button
        label="Create"
        variant="google"
        marginTop="s"
        isFullWidth
        onPress={handleSubmit(onSetupPassphrase)}
      />
    </Box>
  );
};
