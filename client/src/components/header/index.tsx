import { LoginOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons"
import { Layout, Space, Typography } from "antd"
import { CustomButton } from "../custom-button"
import { Link } from "react-router-dom"
import { Paths } from "../../paths"
import { StyledHeader } from "./style"


export const Header = () => {
  return (
    <StyledHeader>
        <Layout.Header className="header">
            <Space>
                <TeamOutlined className="icon"/>
                <Link to={ Paths.home }>
                    <CustomButton type="text">
                        <Typography.Title className="title" level={1}>Сотрудники</Typography.Title>
                    </CustomButton>
                </Link>
            </Space>
            <Space>
                <Link to={ Paths.register }><CustomButton icon={<UserOutlined></UserOutlined>}>Зарегистрироваться</CustomButton></Link>
                <Link to={ Paths.login }><CustomButton icon={<LoginOutlined></LoginOutlined>}>Войти</CustomButton></Link>
            </Space>
        </Layout.Header>
    </StyledHeader>
  )
}
