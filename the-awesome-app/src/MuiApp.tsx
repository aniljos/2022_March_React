import React, { Suspense, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {appRoutes, AppRoute} from './routes/routes';
import {BrowserRouter as Router, Routes, Route, useNavigate, Link} from 'react-router-dom';
import AppErrorBoundary from "./components/errorBoundary/AppErrorBoundary";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid } from "@mui/material";
import App from "./App";

interface MenuLisProps{
  onNavigate : () => void;
}

function MenuList(props: {onNavigate : () => void}) {

  const navigate = useNavigate();

  function navigateTo(route : AppRoute){
      navigate(route.path);
      props.onNavigate();
  }

  return (
    <List>
      {appRoutes.filter(item => item.menu).map((item, index) =>{ 
        
        const Icon = item.icon;
        return (
            <ListItem button key={item.id} onClick={() => navigateTo(item)}>
              <ListItemIcon>
                <Icon/>
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          )
      })}
    </List>
  );
}

function MuiApp() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isBootstrap, setBootstrapApp] = useState(false);

  function closeDrawer() {
    setOpenDrawer(false);
  }

  if(isBootstrap === true){
    return (
      <App onChangeMode={() => setBootstrapApp(false)}/>
    )
  }
  else{
    debugger;
        return (

          <Router basename="/">
            <div>
              <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                  <Toolbar>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                      onClick={() => setOpenDrawer(true)}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      React Training
                    </Typography>
                    <Button component={Link} to="/login" color="warning" variant="contained">Login</Button>
                    &nbsp;
                    <Button color="secondary" variant="contained" onClick={() => setBootstrapApp(true)}>Bootstrap</Button>
                  </Toolbar>
                </AppBar>
                <Drawer
                  sx={{
                    width: 240,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                      width: 240,
                      boxSizing: "border-box",
                    },
                  }}
                  variant="temporary"
                  anchor="left"
                  open={openDrawer}
                  onClose={closeDrawer}
                >
                  <Toolbar />
                  <Divider />
                      <MenuList onNavigate={closeDrawer}/>
                  <Divider />
                  <List>
                    {["All mail", "Trash", "Spam"].map((text, index) => (
                      <ListItem button key={text}>
                        <ListItemIcon>
                          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </Drawer>
              </Box>

              <Grid container spacing={3}>
                      <Grid item xs={12}>
                          <AppErrorBoundary>
                            <Suspense fallback="Loading">
                              <Routes>
                                  {appRoutes.map((item , index) => {

                                      const Component = item.component;
                                      if(item.secure){
                                        return <Route key={item.id} path={item.path}  
                                            element={<ProtectedRoute> <Component/></ProtectedRoute>} />
                                      }
                                      else{
                                        return <Route key={item.id} path={item.path}  
                                            element={<Component/>} />
                                      }

                                  })}

                              </Routes>
                            </Suspense>
                        </AppErrorBoundary>    
                      </Grid>
              </Grid>

              
            </div>
          </Router>
        
        );
  }
}

export default MuiApp;
