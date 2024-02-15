import { ERequestAPI, requestAPI } from "@src/apis/requestAPI";
import {
  Box,
  Button,
  LottieView,
  Text,
  TextField,
  View,
} from "@src/components";
import Icon from "@src/components/Icon";
import { ChatStreamProvider, TicketStackParamList } from "@src/features/chat";
import streamChatServices from "@src/features/chat/services/stream-chat.services";
import { FileService } from "@src/features/chat/services/upload-file.services";
import { Ticket, TicketStatus } from "@src/features/chat/type";
import { ScreenProps } from "@src/navigation/types";
import { actions } from "@src/store/redux";
import React, { useEffect, useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TouchableOpacity } from "react-native";
import { Alert, FlatList, Image, Keyboard, ScrollView } from "react-native";
import { Asset } from "react-native-image-picker";
import { useDispatch } from "react-redux";
import FileViewer from "react-native-file-viewer";
import uuid from "react-native-uuid";

interface FormValues {
  title: string;
  descriptions: string;
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
  const [attachmentFiles, setAttachmentFiles] = useState<
    Array<Asset> | undefined
  >(undefined);
  const {
    control,
    formState: { isValid },
    getValues,
  } = useForm<FormValues>({
    defaultValues: {
      title: "Honda SH150i",
      descriptions: "Like new",
      patientInfo: {
        fisrtName: "Nguyen",
        lastName: "Van B",
        phoneNumber: "0355732994",
      },
      // title: undefined,
      // descriptions: undefined,
      // patientInfo: {
      //   fisrtName: undefined,
      //   lastName: undefined,
      //   phoneNumber: undefined,
      // },
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

      const { title, patientInfo, descriptions } = values;
      const channelId = uuid.v4() as string;
      const id = await streamChatServices.createChannel(title, channelId);
      if (id && channelId === id) {
        const data: Ticket = {
          id: "",
          title,
          channelId,
          patientInfo,
          desc: descriptions,
          createBy: "Stack 1",
          status: TicketStatus.WAITING,
        };
        const response = await requestAPI<Ticket>({
          subject: ERequestAPI.CREATE_TICKET,
          body: data,
        });

        const ticketId = response?.ticketId;
        if (ticketId && attachmentFiles?.length) {
          formData.current?.append("ticketId", ticketId);
          attachmentFiles.forEach((e) => {
            formData.current?.append("file", e as unknown as Blob);
          });
          await requestAPI<FormData>({
            subject: ERequestAPI.UPLOAD_ATTACHMENT_FILE,
            body: formData.current,
            isUploadFile: true,
          });
        }
        dispatch(actions.ticket.upsertTicket(data));
        navigation.goBack();
      }
    } catch (error) {
      console.log("Erorr: ", error);
      Alert.alert("Lỗi", "Tạo yêu cầu bị lỗi");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ChatStreamProvider>
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
          <UploadAttachmentFiles
            attachmentFiles={attachmentFiles || []}
            setAttachmentFiles={setAttachmentFiles}
          />
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

      {isLoading && (
        <LottieView
          source={require("@src/assets/animations/loading.json")}
          autoPlay
          backgroundColor={"white"}
        />
      )}
    </ChatStreamProvider>
  );
};

const UploadAttachmentFiles = (params: {
  attachmentFiles: Asset[];
  setAttachmentFiles: (value: Asset[]) => void;
}) => {
  const { attachmentFiles, setAttachmentFiles } = params;

  const onRemove = (fileId: string) => {
    const result = attachmentFiles.filter((e) => e.id !== fileId);
    setAttachmentFiles([...result]);
  };

  const onPreView = (fileId: string) => {
    const result = attachmentFiles.find((e) => e.id === fileId);
    if (!result?.uri) return;
    FileViewer.open(result?.uri, {
      showOpenWithDialog: true,
    });
  };

  return (
    <View flex={1}>
      <View flex={1} flexDirection="row">
        <FlatList<Asset>
          data={attachmentFiles || []}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => `${item?.id}-${index}`}
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          renderItem={({ item, index }) => (
            <View
              p={8}
              key={index}
              flexDirection="row"
              border={1}
              align="center"
              borderRadius="small"
            >
              <View flex={1}>
                <TouchableOpacity onPress={() => item.id && onPreView(item.id)}>
                  <Image
                    source={{ uri: item.uri }}
                    height={40}
                    width={40}
                    style={{ borderRadius: 16 }}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => item.id && onRemove(item.id)}>
                <View align="center" flexDirection="row">
                  <Text>Xóa ảnh</Text>
                  <View w={8} />
                  <Icon name="Trash2" color="grey300" />
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      {(attachmentFiles || []).length !== 5 && (
        <View align="center">
          <Button
            variant="transparent"
            onPress={async () => {
              const res = await FileService.launchImageLibrary({
                options: {
                  mediaType: "photo",
                  selectionLimit: attachmentFiles?.length
                    ? 5 - attachmentFiles.length
                    : 5,
                },
              });
              res?.length &&
                setAttachmentFiles((attachmentFiles || []).concat(...res));
            }}
            padding={"s"}
          >
            <View flexDirection="row" align="center">
              <Text
                textAlign="center"
                variant={"secondary"}
                color={"grey500"}
                fontSize={12}
              >
                Tải hình sản phẩm
              </Text>
              <View mr={12} />
              <Icon name="Upload" color="grey300" />
            </View>
          </Button>
        </View>
      )}
    </View>
  );
};
