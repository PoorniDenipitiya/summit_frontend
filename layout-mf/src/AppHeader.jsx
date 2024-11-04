import React from "react";
//import ReactDOM from "react-dom";
import { Layout, Menu, Avatar, Button, Badge, Popover } from "antd";
import { UserOutlined, ShoppingCartOutlined, CloseOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./AppHeader.css";

const { Header } = Layout;

const AppHeader = ({ user, cart, onSignOut, removeFromCart }) => {
  //const cartCount = cart.length;

  /*const cartContent = (
    <div className="cart-preview">
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-item-image" />
          <div className="cart-item-details">
            <h4>{item.name}</h4>
            <p>Quantity: {item.quantity}</p>
            <p>Price: Rs. {(item.price * item.quantity).toFixed(2)}</p>
          </div>
          <Button 
            type="text" 
            danger 
            onClick={() => removeFromCart(item)}
            icon={<CloseOutlined />}
          />
        </div>
      ))}
      <div className="cart-total">
        <strong>Total: Rs. {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</strong>
      </div>
      <Button type="primary" block>
        <Link to="/cart">View Cart</Link>
      </Button>
    </div>
  );

  const userContent = (
    <div>
      <Button onClick={onSignOut} icon={<LogoutOutlined />}>
        Sign Out
      </Button>
    </div>
  );
*/
  return (
    <Header className="app-header">
      <div className="logo">Foodies</div>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        className="menu"
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/bakery">Bakery</Link>
        </Menu.Item>
        <Menu.Item key="3">Mock</Menu.Item>
        <Menu.Item key="4">Contact</Menu.Item>
      </Menu>
      <div className="header-icons" style={{ display: 'flex', alignItems: 'center' }}>
 {/* <Popover
    content={cartContent}
    title="Your Cart"
    trigger="hover"
    placement="bottomRight"
  >
    <Badge count={cartCount} showZero >
      <ShoppingCartOutlined style={{ fontSize: '24px', color: 'black' }} />
      {/*className="icon"
    </Badge>
  </Popover>
  {user ? (
    <Popover
      content={userContent}
      trigger="hover"
      placement="bottomRight"
    >
      <Avatar icon={<UserOutlined />} style={{ marginLeft: '16px' }}/>
    </Popover>
  ) : (
    <span>Please sign in</span>
  )}
    */}
</div>
    </Header>
  );
};

//ReactDOM.render(<AppHeader />, document.getElementById("appheader"));

export default AppHeader;
