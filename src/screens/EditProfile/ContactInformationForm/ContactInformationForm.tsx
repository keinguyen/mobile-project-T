import React from 'react';
import { Box, TextField, Text, Button, Divider } from '@src/components';
import { Profile } from '@src/data';

type ContactInformationFormProps = {
  profile: Profile;
};

export const ContactInformationForm: React.FC<ContactInformationFormProps> = ({
  profile,
}) => {
  return (
    <Box backgroundColor="card" padding="m">
      <TextField
        inputProps={{
          defaultValue: profile.name,
          textContentType: 'name',
        }}
      />
      <Divider backgroundColor="card" marginVertical="s" />
      <TextField
        inputProps={{
          defaultValue: profile.phone,
          textContentType: 'telephoneNumber',
        }}
      />
      <Divider backgroundColor="card" marginVertical="s" />
      <TextField
        inputProps={{
          defaultValue: profile.email,
          textContentType: 'emailAddress',
        }}
      />
      <Text variant="secondary" marginTop="xs" marginBottom="m">
        Thông tin liên lạc và lịch sử giao dịch sẽ được gửi đến địa chỉ email
        này.
      </Text>
      <Button label="Lưu" isFullWidth />
    </Box>
  );
};
