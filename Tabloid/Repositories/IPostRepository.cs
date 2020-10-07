using System.Collections.Generic;
using Tabloid.Models;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IPostRepository
    {
        void Add(Post post);
        List<Post> GetAllPublishedPosts();
        Post GetPublishedPostById(int id);
        Post GetUserPostById(int id, int userProfileId);
        List<Post> GetUserPostByIdList(int userId);
        List<Post> GetPostsByCategoryId(int categoryId);
        void UpdatePost(Post post);
        void DeletePost(int id);
        string ReadTime(string content);
    }
}