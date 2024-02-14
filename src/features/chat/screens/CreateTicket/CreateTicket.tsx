import { requestAPI } from "@src/apis/requestAPI";
import {
  Box,
  Button,
  LottieView,
  Text,
  TextField,
  View,
} from "@src/components";
import AnimatedSplashScreen from "@src/components/AnimatedSplashScreen/AnimatedSplashScreen";
import Icon from "@src/components/Icon";
import { TicketStackParamList } from "@src/features/chat";
import streamChatServices from "@src/features/chat/services/stream-chat.services";
import { FileService } from "@src/features/chat/services/upload-file.services";
import { Ticket, TicketStatus } from "@src/features/chat/type";
import { ScreenProps } from "@src/navigation/types";
import { actions } from "@src/store/redux";
import AnimatedLottieView from "lottie-react-native";
import React, { useEffect, useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Alert, Image, Keyboard, ScrollView } from "react-native";
import { ZoomOut } from "react-native-reanimated";
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
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { isValid },
    getValues,
  } = useForm<FormValues>({
    defaultValues: {
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

  const onCreate: SubmitHandler<FormValues> = async (values) => {
    Keyboard.dismiss();
    setIsLoading(true);
    try {
      if (!isValid) {
        Alert.alert("Lỗi", "Vui lòng điền đầy đủ thông tin");
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
      Alert.alert("Lỗi", "Tạo yêu cầu bị lỗi");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <View flex={1} px={16} pt={16} pb={32}>
        <Text variant={"primary"} color={"grey500"} fontWeight={"500"}>
          {"Thông tin sản phẩm"}
        </Text>
        <View mb={12} />
        <Text variant={"secondary"} color={"grey400"} fontWeight={"400"}>
          Bạn cần điền đầy đủ những thông tin này để người kiểm định nắm được
          thông tin
        </Text>
        <View mb={12} />
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
                  <Box flexDirection={"row"} mb={"s"}>
                    <Text
                      variant={"secondary"}
                      fontWeight={"500"}
                      color={"grey500"}
                      fontSize={12}
                    >
                      {"Tên sản phẩm"}
                    </Text>
                    <Text variant={"secondary"} color={"red500"}>
                      *
                    </Text>
                  </Box>
                  <TextField
                    inputProps={{
                      value: value,
                      onBlur: onBlur,
                      onChangeText: onChange,
                      placeholder: "Tên sản phẩm",
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
                required: false,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <Box flexDirection={"row"} mb={"s"}>
                    <Text
                      variant={"secondary"}
                      fontWeight={"500"}
                      color={"grey500"}
                      fontSize={12}
                    >
                      {"Chi tiết sản phẩm"}
                    </Text>
                  </Box>
                  <TextField
                    inputProps={{
                      value: value,
                      onBlur: onBlur,
                      onChangeText: onChange,
                      placeholder: "Chi tiết sản phẩm",
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
                  required: false,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View>
                    <Box flexDirection={"row"} mb={"s"}>
                      <Text
                        variant={"secondary"}
                        fontWeight={"500"}
                        color={"grey500"}
                        fontSize={12}
                      >
                        {"Họ"}
                      </Text>
                    </Box>
                    <TextField
                      inputProps={{
                        value: value,
                        onBlur: onBlur,
                        onChangeText: onChange,
                        placeholder: "Họ",
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
                  required: false,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View>
                    <Box flexDirection={"row"} mb={"s"}>
                      <Text
                        variant={"secondary"}
                        fontWeight={"500"}
                        color={"grey500"}
                        fontSize={12}
                      >
                        {"Tên"}
                      </Text>
                    </Box>
                    <TextField
                      inputProps={{
                        value: value,
                        onBlur: onBlur,
                        onChangeText: onChange,
                        placeholder: "Tên",
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
                required: false,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <Box flexDirection={"row"} mb={"s"}>
                    <Text
                      variant={"secondary"}
                      fontWeight={"500"}
                      color={"grey500"}
                      fontSize={12}
                    >
                      {"Số điện thoại"}
                    </Text>
                  </Box>
                  <TextField
                    inputProps={{
                      value: value,
                      onBlur: onBlur,
                      onChangeText: onChange,
                      placeholder: "Số điện thoại",
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
                required: false,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <Box flexDirection={"row"} mb={"s"}>
                    <Text
                      variant={"secondary"}
                      fontWeight={"500"}
                      color={"grey500"}
                      fontSize={12}
                    >
                      {"Giá mong muốn"}
                    </Text>
                  </Box>
                  <TextField
                    inputProps={{
                      value: value,
                      onBlur: onBlur,
                      onChangeText: onChange,
                      placeholder: "Giá mong muốn",
                      keyboardType: "numeric",
                    }}
                  />
                </>
              )}
              name="price"
            />
          </View>

          <Box alignItems={"center"}>
            <Button
              variant="transparent"
              onPress={async () => {
                const res = await FileService.launchImageLibrary();
                res && formData.current?.append("file", res);
              }}
              padding={"s"}
            >
              <Box
                flexDirection={"row"}
                justifyContent={"center"}
                alignContent={"center"}
                alignItems={"center"}
              >
                <Text variant={"secondary"} color={"grey500"} fontSize={12}>
                  Tải hình sản phẩm
                </Text>
                <View mr={12} />
                <Icon name="Upload" color="grey300" />
              </Box>
            </Button>
          </Box>
        </ScrollView>
        <Button
          label="Tạo"
          variant="primary"
          marginTop="s"
          loading={isLoading}
          isFullWidth
          onPress={() => {
            if (!isValid) {
              Alert.alert("Lỗi", "Vui lòng điền đầy đủ thông tin");
              return;
            }

            const values = getValues();
            onCreate(values);
          }}
        />
      </View>

      {isLoading ? (
        <LottieView
          source={require("@src/assets/animations/loading.json")}
          autoPlay
          backgroundColor={"white"}
        />
      ) : (
        <></>
      )}
    </>
  );
};
