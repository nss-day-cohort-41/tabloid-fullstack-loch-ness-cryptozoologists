using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Tabloid.Models;
using Tabloid.Repositories;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Tabloid.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _categoryRepository;
        public CategoryController(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        // GET: api/<CategoryController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_categoryRepository.GetAllCategories());
        }

        [HttpPost]
        public IActionResult Post(Category category)
        {
            var currentUserProfile = GetCurrentUserProfile();
            if (currentUserProfile.UserType.Name != "admin")
            {
                return Unauthorized();
            }
            category.UserProfileId = currentUserProfile.Id;
            _categoryRepository.Add(category);
            return CreatedAtAction(nameof(Get), new { id = category.Id }, category);
        }
    }
}
