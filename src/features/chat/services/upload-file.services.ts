import * as ImagePicker from "react-native-image-picker";
import {
  Asset,
  CameraOptions,
  ImageLibraryOptions,
} from "react-native-image-picker";
import uuid from "react-native-uuid";

interface SelectedAvatarForUpload {
  name: string;
  uri: string;
  type: string;
  size: number;
}

export interface ImageLibrary {
  selectedFile: SelectedAvatarForUpload;
  error: boolean;
  isCancle?: boolean;
}

const selectedFileDefault = {
  name: "",
  uri: "",
  type: "",
  size: 0,
};

const fileEmpty = {
  error: false,
  isCancle: false,
  selectedFile: selectedFileDefault,
};

function makeFileService() {
  return {
    async launchImageLibrary(params: {
      options?: ImageLibraryOptions;
    }): Promise<Array<ImagePicker.Asset> | undefined> {
      try {
        const options: ImageLibraryOptions = {
          ...{
            selectionLimit: 2,
            mediaType: "photo",
            quality: 1,
          },
          ...params?.options,
        };

        const response = await ImagePicker.launchImageLibrary(options);
        if (response.didCancel) return undefined;
        if (response.errorCode || !response.assets) return undefined;

        const { assets } = response;
        if (!assets.length) {
          return undefined;
        }

        return assets.map((originFile) => {
          const fileId = uuid.v4();
          const fileBlob = {
            id: fileId as string,
            uri: originFile.uri,
            name: originFile.fileName,
            type: "application/octet-stream",
          };

          if (!originFile.uri || !originFile.fileSize)
            throw new Error("UPLOAD_FILE_ERROR");

          return fileBlob;
        });
      } catch (error) {
        return undefined;
      }
    },
    async launchCamera(customOptions?: CameraOptions): Promise<ImageLibrary> {
      try {
        let options: CameraOptions = {
          includeBase64: false,
          mediaType: "photo",
          quality: 1,
        };
        const response = await ImagePicker.launchCamera(
          customOptions || options
        );

        if (response.didCancel) return { ...fileEmpty, isCancle: true };
        if (response.errorCode || !response.assets)
          return { ...fileEmpty, error: true };

        const { assets } = response;
        if (!assets || (assets && !assets.length))
          return { ...fileEmpty, error: true };

        const originFile: Asset = assets[0];

        if (!originFile.uri || !originFile.fileSize)
          throw new Error("UPLOAD_FILE_ERROR");

        return {
          error: false,
          selectedFile: {
            name: new Date().toString(),
            uri: decodeURI(originFile.uri),
            type: originFile.type ?? "",
            size: originFile.fileSize ?? 0,
          },
        };
      } catch (error) {
        return { ...fileEmpty, error: true };
      }
    },
  };
}

export const FileService = makeFileService();
