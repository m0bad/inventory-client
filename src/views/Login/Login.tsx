import { Col, Layout, Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LoginPayload } from '../../types/user';
import { loginUser } from '../../store/users/authSlice';
import { AuthForm } from '../../components/auth';

const { Content } = Layout;

export function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  // @ts-ignore
  const error = useSelector(state => state.auth.error);

  const onLogin = async (payload: LoginPayload) => {
    const result = await dispatch(loginUser(payload));
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
            <AuthForm type="login" onSubmit={onLogin} error={error} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
