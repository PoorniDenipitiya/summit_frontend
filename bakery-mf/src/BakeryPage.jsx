import React, { useState } from 'react';
import { Card, Button, Modal, InputNumber, Pagination } from 'antd';
import { ShoppingCartOutlined, EyeOutlined } from '@ant-design/icons';
import chickenpie from '../../assets/chcicken&muchroompie.jpg';
import chickenroll from '../../assets/chicken roll.jpg';
import chickenpastry from '../../assets/coriander&fishpastry.jpg';
import chickenquiche from '../../assets/crispychickenquiche.jpg';
import fishpatty from '../../assets/fishpatty.jpg';
import vegetablesamosa from '../../assets/vegetablesamosa.jpg';
import './BakeryPage.css';
//import CartNotification from '../../cart-mf/src/CartNotification';
import { CartNotification } from '@ecommerce/cart';

const { Meta } = Card;

const bakeryItems = [
  { id: 1, name: 'Chicken & Mushroom Pie', image: chickenpie, price: 210.00 },
  { id: 2, name: 'Chicken Roll', image: chickenroll, price: 190.00 },
  { id: 3, name: 'Coriander & Fish Pastry', image: chickenpastry, price: 180.00 },
  { id: 4, name: 'Crispy Chicken Quiche', image: chickenquiche, price: 190.00 },
  { id: 5, name: 'Fish Patty', image: fishpatty, price: 170.00 },
  { id: 6, name: 'Vegetable Samosa', image: vegetablesamosa, price: 190.00 },
  { id: 7, name: 'Chicken & Mushroom Pie', image: chickenpie, price: 210.00 },
  { id: 8, name: 'Chicken Roll', image: chickenroll, price: 190.00 },
  { id: 9, name: 'Coriander & Fish Pastry', image: chickenpastry, price: 180.00 },
  { id: 10, name: 'Crispy Chicken Quiche', image: chickenquiche, price: 190.00 },
  { id: 11, name: 'Fish Patty', image: fishpatty, price: 170.00 },
  { id: 12, name: 'Vegetable Samosa', image: vegetablesamosa, price: 190.00 }
];

const BakeryPage = ({ addToCart }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationItem, setNotificationItem] = useState(null);
  const pageSize = 8;

  const showModal = (item) => {
    setSelectedItem(item);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setQuantity(1);
  };

  const handleAddToCart = (item, qty = 1) => {
    const newItem = { ...item, quantity: qty };
    addToCart(newItem);
    setNotificationItem(newItem);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000); // Hide after 3 seconds
    handleCancel();
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedItems = bakeryItems.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="bakery-page">
      <h2>Bakery Items</h2>
      <div className="bakery-items">
        {paginatedItems.map(item => (
          <Card
            key={item.id}
            hoverable
            className="bakery-card"
            cover={<img alt={item.name} src={item.image} />}
            actions={[
              <Button icon={<ShoppingCartOutlined />} onClick={() => handleAddToCart(item)}>Add to Cart</Button>,
              <Button icon={<EyeOutlined />} onClick={() => showModal(item)}>Quick View</Button>
            ]}
          >
            <Meta 
              title={item.name} 
              description={<div className="price">Rs. {item.price.toFixed(2)}</div>} 
            />
          </Card>
        ))}
      </div>
      <div className="pagination-container">
        <Pagination
          current={currentPage}
          total={bakeryItems.length}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={700}
      >
        {selectedItem && (
          <div className="quick-view-content">
            <div className="quick-view-image">
              <img src={selectedItem.image} alt={selectedItem.name} />
            </div>
            <div className="quick-view-details">
              <h2>{selectedItem.name}</h2>
              <h3>Rs. {selectedItem.price.toFixed(2)}</h3>
              <p>{selectedItem.name}</p>
              <div className="quantity-selector">
                <span>{selectedItem.name.toUpperCase()} quantity</span>
                <InputNumber min={1} value={quantity} onChange={setQuantity} />
              </div>
              <Button type="primary" size="large" onClick={() => handleAddToCart(selectedItem, quantity)}>
                Add to cart
              </Button>
              <p className="availability">
                Product can be ordered on the following weekdays: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
              </p>
              <p className="availability">
                Product available on: 8:00am - 2:00pm, 2:00pm - 8:00pm
              </p>
            </div>
          </div>
        )}
      </Modal>
     {showNotification && notificationItem && (
        <CartNotification item={notificationItem} />
      )} 
    </div>
  );
};

export default BakeryPage;