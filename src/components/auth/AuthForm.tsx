import { Alert, Card, Select } from 'antd';
import { Formik } from 'formik';
import { Form, Input, SubmitButton } from 'formik-antd';
import React, { useMemo, useCallback } from 'react';
import * as Yup from 'yup';
import { LoginPayload, RegisterPayload, UserTypeEnum } from '../../types/user';

const { Option } = Select;

type Props = {
  onSubmit: (payload: any) => Promise<void>;
  error: string;
  type: string;
};

type InitialValues = LoginPayload | RegisterPayload;

export function AuthForm({ onSubmit, error, type }: Props) {
  const AuthSchema = useMemo(
    () =>
      Yup.object({
        email: Yup.string().required('Email is required.').email('Field must be a valid email.'),
        password: Yup.string().required('Password is required.').min(6, 'Enter At Least 6 chars'),
        user_type: type === 'register' ? Yup.string().required('User type is required.') : Yup.string(),
        name: type === 'register' ? Yup.string().required('User name is required.') : Yup.string(),
      }),
    [type],
  );

  const initialValues: InitialValues = useMemo(
    () =>
      type === 'register'
        ? { email: '', password: '', name: '', user_type: UserTypeEnum.CUSTOMER }
        : { email: '', password: '' },
    [type],
  );

  const userTypeOptions = useMemo(() => {
    return Object.values(UserTypeEnum).map(value => ({
      text: value,
      value,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (payload: LoginPayload & RegisterPayload) => {
      if (onSubmit) {
        await onSubmit(payload);
      }
      return true;
    },
    [onSubmit],
  );

  return (
    <Card title="Welcome! Join Us NOW" bordered={false}>
      {error && (
        <>
          <Alert message={error || 'Please provide a valid data'} type="error" />
          <br />
        </>
      )}
      <Formik
        initialValues={initialValues as LoginPayload & RegisterPayload}
        validationSchema={AuthSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Form.Item name="email">
              <Input name="email" type="email" placeholder="Email" />
            </Form.Item>
            {type === 'register' && (
              <>
                <Form.Item name="name">
                  <Input name="name" type="text" placeholder="Name" />
                </Form.Item>
                <Form.Item name="user_type">
                  <Select placeholder="Select a Type" defaultValue={UserTypeEnum.CUSTOMER}>
                    {userTypeOptions.map(({ text, value }) => (
                      <Option key={value} value={value}>
                        {text}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </>
            )}
            <Form.Item name="password">
              <Input name="password" type="password" placeholder="Password" />
            </Form.Item>
            <SubmitButton htmlType="submit" block>
              {type.toUpperCase()}
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </Card>
  );
}
