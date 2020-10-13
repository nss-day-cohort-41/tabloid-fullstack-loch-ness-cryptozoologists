using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
   public interface ICategoryRepository
    {
        List<Category> GetAllCategories();
        Category GetCategoryById(int id);
        void AddCategory(Category category);
        void Update(Category category);
        void DeleteCategory(int categoryId);

    }
}
