import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import Header from "./components/Header";
import ApplicationViews from "./components/ApplicationViews";
import { PostProvider } from "./providers/PostProvider"
import { TagProvider } from "./providers/TagProvider"
import CategoryList from "./components/CategoryList";
import { CategoryProvider } from "./providers/CategoryProvider";
import { CommentProvider } from './providers/CommentProvider';

function App() {
  return (
    <Router>
      <UserProfileProvider>
        <CategoryProvider>
          <PostProvider>
            <CommentProvider>
              <TagProvider>
                <div className="container">
                  <Header />
                  <ApplicationViews />
                </div>
              </TagProvider>
            </CommentProvider>
          </PostProvider>
        </CategoryProvider>
      </UserProfileProvider>
    </Router >
  );
}

export default App;
