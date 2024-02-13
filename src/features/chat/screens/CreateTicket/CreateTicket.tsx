import { requestAPI } from "@src/apis/requestAPI";
import { Button, TextField, View } from "@src/components";
import { TicketStackParamList } from "@src/features/chat";
import streamChatServices from "@src/features/chat/services/stream-chat.services";
import { FileService } from "@src/features/chat/services/upload-file.services";
import { Ticket, TicketStatus } from "@src/features/chat/type";
import { ScreenProps } from "@src/navigation/types";
import { actions } from "@src/store/redux";
import React, { useEffect, useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Image, Keyboard, ScrollView } from "react-native";
import { useDispatch } from "react-redux";

interface FormValues {
  title: string;
  descriptions: string;
  price: string;
  patientInfo: {
    fisrtName: string;
    lastName: string;
    phoneNumber: string;
  };
}

export const CreateTicket: React.FC<
  ScreenProps<TicketStackParamList, "CreateTicket">
> = ({ navigation }) => {
  const dispatch = useDispatch();
  const formData = useRef<FormData>();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormValues>({
    defaultValues: {
      // title: "Honda SH150i",
      // descriptions: "Like new",
      // patientInfo: {
      //   fisrtName: "Nguyen",
      //   lastName: "Van B",
      //   phoneNumber: "0355732994",
      // },
      // price: "50000000",
      title: undefined,
      descriptions: undefined,
      patientInfo: {
        fisrtName: undefined,
        lastName: undefined,
        phoneNumber: undefined,
      },
      price: undefined,
    },
  });

  useEffect(() => {
    formData.current = new FormData();
  }, []);

  const onSetupPassphrase: SubmitHandler<FormValues> = async (values) => {
    Keyboard.dismiss();

    try {
      if (!isValid) {
        return;
      }

      const { title, price, patientInfo, descriptions } = values;

      const channelId = (Math.random() + 1).toString(36).substring(7);
      const id = await streamChatServices.createChannel(title, channelId);
      if (id && channelId === id) {
        const data: Ticket = {
          title,
          channelId,
          patientInfo,
          desc: descriptions,
          createBy: "Stack 1",
          price: Number(price),
          status: TicketStatus.WAITING,
        };

        const ticketId = await requestAPI<Ticket>({
          subject: "tickets.api.createTicket",
          body: data,
        });

        if (ticketId) {
          formData.current?.append("ticketId", ticketId);

          await requestAPI<FormData>({
            subject: "tickets.api.google",
            body: formData.current,
            isUploadFile: true,
          });

          dispatch(actions.ticket.upsertTicket(data));
          navigation.goBack();
        }
      }
    } catch (error) {
      console.log("Erorr: ", error);
    }
  };

  return (
    <View flex={1} px={16} pt={16} pb={32}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View pb={16}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View>
                <TextField
                  inputProps={{
                    value: value,
                    onBlur: onBlur,
                    onChangeText: onChange,
                    placeholder: "Tiêu đề",
                    keyboardType: "default",
                    autoFocus: true,
                  }}
                />
              </View>
            )}
            name="title"
          />
        </View>
        <View pb={16}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View>
                <TextField
                  inputProps={{
                    value: value,
                    onBlur: onBlur,
                    onChangeText: onChange,
                    placeholder: "Chi tiết",
                    keyboardType: "default",
                  }}
                />
              </View>
            )}
            name="descriptions"
          />
        </View>
        <View flex={1} pb={16} flexDirection="row">
          <View flex={1}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <TextField
                    inputProps={{
                      value: value,
                      onBlur: onBlur,
                      onChangeText: onChange,
                      placeholder: "Fisrt name",
                      keyboardType: "default",
                    }}
                  />
                </View>
              )}
              name="patientInfo.fisrtName"
            />
          </View>
          <View w={16} />
          <View flex={1}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <TextField
                    inputProps={{
                      value: value,
                      onBlur: onBlur,
                      onChangeText: onChange,
                      placeholder: "Last name",
                      keyboardType: "default",
                    }}
                  />
                </View>
              )}
              name="patientInfo.lastName"
            />
          </View>
        </View>
        <View flex={1} pb={16}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View>
                <TextField
                  inputProps={{
                    value: value,
                    onBlur: onBlur,
                    onChangeText: onChange,
                    placeholder: "Phone number",
                    keyboardType: "numeric",
                  }}
                />
              </View>
            )}
            name="patientInfo.phoneNumber"
          />
        </View>
        <View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField
                inputProps={{
                  value: value,
                  onBlur: onBlur,
                  onChangeText: onChange,
                  placeholder: "Price",
                  keyboardType: "numeric",
                }}
              />
            )}
            name="price"
          />
        </View>

        <Button
          label="Upload file"
          variant="success"
          marginTop="s"
          isFullWidth
          onPress={async () => {
            const res = await FileService.launchImageLibrary();
            res && formData.current?.append("file", res);
          }}
        />
      </ScrollView>
      <Button
        label="Create"
        variant="google"
        marginTop="s"
        isFullWidth
        onPress={handleSubmit(onSetupPassphrase)}
      />
    </View>
  );
};
