import { Card, Form, Row, Space, Typography } from "antd"
import { Link } from "react-router-dom"
import { Layout } from "../../components/layout/index.tsx"
import { CustomInput } from "../../components/custom-input/index.tsx"
import { PasswordInput } from "../../components/password-input/index.tsx"
import { CustomButton } from "../../components/custom-button/index.tsx"
import { Paths } from "../../paths.ts"

export const Register = () => {
  return (
    <Layout>
        <Row align={"middle"} justify={"center"}>
            <Card title={"Создайте свой аккаунт!"} style={{width: "30rem"}}>
                <Form onFinish={() => null}>
                    <CustomInput type="text" name="name" placeholder="Имя"></CustomInput>
                    <CustomInput type="email" name="email" placeholder="Email"></CustomInput>
                    <PasswordInput name="password" placeholder="Пароль"></PasswordInput>
                    <PasswordInput name="confirm" placeholder="Повторите пароль"></PasswordInput>
                    <CustomButton type="primary" htmlType="submit">Зарегистрироваться</CustomButton>
                </Form>
                <Space dir="vertical" size="large">
                    <Typography.Text>Уже есть аккаунт? <Link to={ Paths.login }>Войти</Link></Typography.Text>
                </Space>
            </Card>
        </Row>
    </Layout>
  )
}
