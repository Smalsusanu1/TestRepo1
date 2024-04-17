import React, { useState, useEffect } from 'react';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getRandomFontSize = () => {
  return `${Math.floor(Math.random() * 20) + 10}px`;
};

const RandomDesignPage = () => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    setStyle({
      color: getRandomColor(),
      fontSize: getRandomFontSize(),
    });
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={style}>Welcome to the Random Design Page!</h1>
      <p style={style}>
        Every time you load this page, you'll see different styles applied here.
      </p>
    </div>
  );
};

export default RandomDesignPage;
