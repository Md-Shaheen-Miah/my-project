import React from 'react';

// Inline CSS styles
const styles = {
    
  container: {
    
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
    boxSizing: 'border-box',
  },
  header: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '20px',
    flex: '1 1 calc(33.333% - 20px)',
    boxSizing: 'border-box',
  },
  cardHeader: {
    fontSize: '18px',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  cardContent: {
    fontSize: '14px',
  },
};

const Dashboard = () => {
  return (
    <div style={{marginTop:'50px'}}>
    <div style={styles.container}>
      <h1 style={styles.header}>Admin Dashboard</h1>
      <div style={styles.cardsContainer}>
        <div style={styles.card}>
          <div style={styles.cardHeader}>Card 1</div>
          <div style={styles.cardContent}>Content for card 1.</div>
        </div>
        <div style={styles.card}>
          <div style={styles.cardHeader}>Card 2</div>
          <div style={styles.cardContent}>Content for card 2.</div>
        </div>
        <div style={styles.card}>
          <div style={styles.cardHeader}>Card 3</div>
          <div style={styles.cardContent}>Content for card 3.</div>
        </div>
        <div style={styles.card}>
          <div style={styles.cardHeader}>Card 4</div>
          <div style={styles.cardContent}>Content for card 4.</div>
        </div>
        <div style={styles.card}>
          <div style={styles.cardHeader}>Card 5</div>
          <div style={styles.cardContent}>Content for card 5.</div>
        </div>
        <div style={styles.card}>
          <div style={styles.cardHeader}>Card 6</div>
          <div style={styles.cardContent}>Content for card 6.</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
