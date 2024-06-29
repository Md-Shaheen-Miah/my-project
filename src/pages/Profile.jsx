import React from 'react';

const Profile = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f2f5',
    },
    profileCard: {
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      width: '100%',
      maxWidth: '1000px',
    },
    profileImage: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '1rem',
    },
    profileName: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    },
    profileEmail: {
      fontSize: '16px',
      color: '#777',
      marginBottom: '1rem',
    },
    profileBio: {
      fontSize: '16px',
      color: '#555',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.profileCard}>
        <img
          src="src/components/images/shaheen.jpg"
          alt=""
          style={styles.profileImage}
        />
        <h2 style={styles.profileName}>Md. Shaheen Miah</h2>
        <p style={styles.profileEmail}>E-mail:mdshaheen60101@gmail.com</p>
        <p style={styles.profileEmail}>Phone:+8801641160101</p>
        <p style={styles.profileEmail}>Address:Tongi,Gazipur,Dhaka</p>
        <p style={styles.profileBio}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </p>
      </div>
    </div>
  );
};

export default Profile;
