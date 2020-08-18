import { Col, Layout, Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RegisterPayload } from '../../types/user';
import { registerUser } from '../../store/users/authSlice';
import { AuthForm } from '../../components/auth';

const { Content } = Layout;

export function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  // @ts-ignore
  const error = useSelector(state => state.auth.error);

  const onRegister = async (payload: RegisterPayload) => {
    const result = await dispatch(registerUser(payload));
    // @ts-ignore
    if (!result.error) {
      history.push('/dashboard');
    }
  };

  return (
    <Layout className="height-100">
      <Content>
        <Row justify="center" align="middle" className="height-100">
          <Col span={8}>
            <AuthForm type="register" onSubmit={onRegister} error={error} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
