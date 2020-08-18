import React, { useMemo } from 'react';
import { Form, Input, InputNumber, SubmitButton } from 'formik-antd';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { IProductPayload } from '../../../types/product';

export const NewProductForm = ({ onSubmit }: any) => {
  const initialValues: IProductPayload = useMemo(() => {
    return {
      name: '',
      price: 0,
      image: '',
    };
  }, []);

  const schema = useMemo(
    () =>
      Yup.object({
        name: Yup.string().required('product name is required.'),
        image: Yup.string().required('image url is required.'),
        price: Yup.number().required('product price is required.'),
      }),
    [],
  );
  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
      {() => (
        <Form>
          <Form.Item name="name">
            <Input name="name" type="text" placeholder="Name" />
          </Form.Item>
          <Form.Item name="image">
            <Input name="image" type="text" placeholder="Image" />
          </Form.Item>
          <Form.Item name="price">
            <InputNumber name="price" placeholder="Price" />
          </Form.Item>
          <SubmitButton htmlType="submit" block>
            Submit
          </SubmitButton>
        </Form>
      )}
    </Formik>
  );
};
