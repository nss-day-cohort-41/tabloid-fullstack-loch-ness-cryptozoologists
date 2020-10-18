﻿using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ICommentRepository
    {
        List<Comment> GetAllCommentsByPostId(int id);
        void AddComment(Comment comment);

    }
}