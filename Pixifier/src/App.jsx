import React, { useEffect, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const CreatePost = React.lazy(() => import('./pages/CreatePost'));
const toast = React.lazy(() => import('react-hot-toast'));
const IndiPost = React.lazy(() => import('./pages/IndiPost'));
const LikedPosts = React.lazy(() => import('./pages/LikedPosts'));
const MyPosts = React.lazy(() => import('./pages/MyPosts'));
const Account = React.lazy(() => import('./pages/Account'));
const ProtectedRoute = React.lazy(() => import('./pages/ProtectedRoute'));

const App = () => {
  const { isLoggedIn, isError, message } = useSelector((store) => store.pixify);

  useEffect(() => {
    if (isError) {
      toast.error(message, {
        duration: 2000,
      });
    } else if (message) {
      toast.success(message, {
        duration: 2000,
      });
    }
  }, [isError, message]);

  return (
    <div className='bg-gradient-to-br min-h-screen from-blue-900 via-sky-900 to-blue-900 bg-no-repeat'>
      {isLoggedIn && <Header />}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path='/createpost'
            element={
              <ProtectedRoute>
                <CreatePost />
              </ProtectedRoute>
            }
          />
          <Route
            path='/post/:id'
            element={
              <ProtectedRoute>
                <IndiPost />
              </ProtectedRoute>
            }
          />
          <Route
            path='/likedposts'
            element={
              <ProtectedRoute>
                <LikedPosts />
              </ProtectedRoute>
            }
          />
          <Route
            path='/myposts'
            element={
              <ProtectedRoute>
                <MyPosts />
              </ProtectedRoute>
            }
          />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
