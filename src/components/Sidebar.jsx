// Sidebar.js
import React from 'react';
import { Box, Drawer, List, ListItem, ListItemText, ListItemIcon, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore, Home,Store, ShoppingCart, Settings } from '@mui/icons-material';
import { useState } from 'react';

const Sidebar = () => {
  const [open, setOpen] = useState({
    Sales: false,
    Products: false,
    Customers: false,
    Supplier: false,
    Purchases: false,
    Staff: false,
    Billing: false,
    Reports: false,
  });

  const handleClick = (menu) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [menu]: !prevOpen[menu],
    }));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ overflow: 'auto' }}>
        <List style={{color:'red', backgroundColor:'black'}}>
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          
          <ListItem button onClick={() => handleClick('Sales')}>
            <ListItemIcon>
              <Store />
            </ListItemIcon>
            <ListItemText primary="Sales" />
            {open.Sales ? <ExpandLess  /> : <ExpandMore style={{color:'red'}} />}
          </ListItem>
          <Collapse in={open.Sales} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="New Sale" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Sales Report" />
              </ListItem>
            </List>
          </Collapse>
          
          <ListItem button onClick={() => handleClick('Products')}>
            <ListItemIcon>
              <ShoppingCart />
            </ListItemIcon>
            <ListItemText primary="Products" />
            {open.Products? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open.Products} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Product List" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Add New Product" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Inventory" />
              </ListItem>
            </List>
          </Collapse>
          
          <ListItem button onClick={() => handleClick('Customers')}>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Customers" />
            {open.Customers? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open.Customers} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Customer List" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Add New Customer" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={() => handleClick('Supplier')}>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Supplier" />
            {open.Supplier? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open.Supplier} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Supplier List" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Add New Supplier" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={() => handleClick('Purchases')}>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Purchases" />
            {open.Purchases? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open.Purchases} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="New Purchase" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Purchase Report" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={() => handleClick('Staff')}>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Staff" />
            {open.Staff? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open.Staff} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Staff List" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Add New Staff" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={() => handleClick('Billing')}>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Billing" />
            {open.Billing? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open.Billing} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Creat Invoice" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Billing Report" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={() => handleClick('Reports')}>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Reports" />
            {open.Reports? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open.Reports} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Sales Report" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Purchases Report" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Invoice Report" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Financial Report" />
              </ListItem>
            </List>
          </Collapse>
          <button style={{marginLeft:'70px',borderRadius:'10px'}}>Logout</button>
          
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
