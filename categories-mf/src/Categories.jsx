import React from 'react';
import { Card, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import freshImage from '../../assets/fresh.jpeg';
import seafood from '../../assets/seafood.jpeg';
import poultry from '../../assets/poultry.jpeg';
import dairy from '../../assets/dairy.jpeg';
import bakery from '../../assets/bakery.png';
import beverages from '../../assets/beverages.jpeg';
import './Categories.css';

const { Meta } = Card;

const categories = [
  { id: 1, title: 'Fresh Produce', image: freshImage, description: 'Fruits, vegetables, and herbs.' },
  { id: 2, title: 'Meat & Poultry', image: poultry, description: 'Quality meats and poultry.' },
  { id: 3, title: 'Seafood', image: seafood, description: 'Fresh seafood and fish.' },
  { id: 4, title: 'Dairy & Eggs', image: dairy, description: 'Milk, cheese, and more.' },
  { id: 5, title: 'Bakery', image: bakery, description: 'Bread, pastries, and desserts.', path: '/bakery' },
  { id: 6, title: 'Beverages', image: beverages, description: 'Juices, soda, and more.' },
];

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (path) => {
    navigate(path);
  };

  return (
    <div className="categories-container">
      <Row gutter={[16, 16]}>
        {categories.map(category => (
          <Col key={category.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={<img alt={category.title} src={category.image} />}
              className="category-card"
              onClick={() => handleCategoryClick(category.path || '/')}
            >
              <Meta title={category.title} description={category.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Categories;
