using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        UserProfile GetByFirebaseUserId(string firebaseUserId);
        List<UserProfile> ListAllUserProfiles();
        List<UserProfile> GetAllUsers();
        UserProfile GetById(int id);
    }
}