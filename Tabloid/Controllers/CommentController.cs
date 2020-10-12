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
    
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepository;
        public CommentController(ICommentRepository commentRepository)
        {
            _commentRepository = commentRepository;
        }

        // GET: api/<CategoryController>
        [HttpGet("{postId}")]
        public IActionResult GetAllCommentsByPostId(int postId)
        {
            var comment = _commentRepository.GetAllCommentsByPostId(postId);
            if (comment == null)
            {
                return NotFound();
            }
            return Ok(comment);
        }


    }
}
