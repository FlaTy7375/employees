import { Card, Form, Row, Space, Typography } from "antd"
import { Link } from "react-router-dom"
import { Layout } from "../../components/layout/index.tsx"
import { CustomInput } from "../../components/custom-input/index.tsx"
import { PasswordInput } from "../../components/password-input/index.tsx"
import { CustomButton } from "../../components/custom-button/index.tsx"
import { Paths } from "../../paths.ts"

export const Login = () => {
  return (
    <Layout>
        <Row align={"middle"} justify={"center"}>
            <Card title={"Войдите в свою учетную запись!"} style={{width: "30rem"}}>
                <Form onFinish={() => null}>
                    <CustomInput type="email" name="email" placeholder="Email"></CustomInput>
                    <PasswordInput name="password" placeholder="Пароль"></PasswordInput>
                    <CustomButton type="primary" htmlType="submit">Войти</CustomButton>
                </Form>
                <Space dir="vertical" size="large">
                    <Typography.Text>Нет аккаунта? <Link to={ Paths.register }>Зарегистрируйтесь</Link></Typography.Text>
                </Space>
            </Card>
        </Row>
    </Layout>
  )
}
