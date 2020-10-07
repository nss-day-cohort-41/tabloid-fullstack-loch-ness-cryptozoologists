namespace TabloidMVC.Repositories
{
    public interface ICommentRepository
    {
        void AddComment(Comment comment);
        void DeleteComment(int id);
        Comment GetCommentById(int id);
        System.Collections.Generic.List<Comment> GetCommentByUserProfileId(int userProfileId);
        System.Collections.Generic.List<Comment> GetCommentsByPostId(int id);
        void UpdateComment(Comment comment);
    }
}