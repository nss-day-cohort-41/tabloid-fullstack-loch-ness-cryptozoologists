﻿using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAll();
        Post GetPublishedPostById(int id);

        void Add(Post post);
        void DeletePost(int id);

        //List<Post> GetAllApprovedPosts();
        //List<Post> GetUserPostById(int UPID);

        Post GetUserPostById(int id, int UserProfileId);
        void Update(Post post);
    }
}