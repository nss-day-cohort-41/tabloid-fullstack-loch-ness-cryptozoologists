using Microsoft.Extensions.Configuration;
using Tabloid.Models;
using System.Linq;
using System.Threading.Tasks;
using Tabloid.Utils;
using System.Collections.Generic;

namespace Tabloid.Repositories
{
    //unsure about this. Try here first if does not work. 
    public class CommentRepository : BaseRepository, ICommentRepository
    {
        public CommentRepository(IConfiguration configuration) : base(configuration) { }

        public List<Comment> GetAllCommentsByPostId(int postId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                      SELECT Id, 
                        PostId, UserProfileId, 
                        Subject, Content, CreateDateTime
                        FROM Comment 
                        WHERE PostId = @id
                        ORDER BY CreateDateTime DESC
                       ";
                    cmd.Parameters.AddWithValue("@id", postId);
                    var reader = cmd.ExecuteReader();
                    List<Comment> comments = new List<Comment>();

                    while (reader.Read())
                    {
                        Comment comment = new Comment
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            PostId = reader.GetInt32(reader.GetOrdinal("PostId")),
                            UserProfileId = reader.GetInt32(reader.GetOrdinal("UserProfileId")),
                            Subject = reader.GetString(reader.GetOrdinal("Subject")),
                            Content = reader.GetString(reader.GetOrdinal("Content")),
                            CreateDateTime = reader.GetDateTime(reader.GetOrdinal("CreateDateTime")),                 
                         
                        };

                        comments.Add(comment);

                    }

                    reader.Close();

                    return (comments);
                }
            }
        }

    }
}
