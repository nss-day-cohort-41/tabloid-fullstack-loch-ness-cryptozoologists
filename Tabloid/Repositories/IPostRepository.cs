using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAll();
        Post GetPublishedPostById(int id);

        void Add(Post post);

        //void UpdatePost(Post post);
        void UpdatePost(Post post);
    }
}