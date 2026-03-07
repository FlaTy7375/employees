import { LoginOutlined, LogoutOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons"
import { Layout, Space, Typography } from "antd"
import { CustomButton } from "../custom-button"
import { Link, useNavigate } from "react-router-dom"
import { Paths } from "../../paths"
import { StyledHeader } from "./style"
import { useSelector } from "react-redux"
import { selectUser, logout } from "../../features/auth/authSlice"
import { useDispatch } from "react-redux"


export const Header = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate(Paths.login);
  };

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
            <div style={{ display: 'flex', gap: '8px' }}>
                {user ? (
                  <>
                    <Typography.Text style={{ lineHeight: '32px', height: '32px', display: 'flex' }}>{user.name}</Typography.Text>
                    <CustomButton icon={<LogoutOutlined />} onClick={handleLogout}>
                      Выйти
                    </CustomButton>
                  </>
                ) : (
                  <>
                    <Link to={ Paths.register }><CustomButton icon={<UserOutlined />}>Зарегистрироваться</CustomButton></Link>
                    <Link to={ Paths.login }><CustomButton icon={<LoginOutlined />}>Войти</CustomButton></Link>
                  </>
                )}
            </div>
        </Layout.Header>
    </StyledHeader>
  )
}
