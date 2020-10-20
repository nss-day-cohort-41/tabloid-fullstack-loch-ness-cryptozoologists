using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tabloid.Models;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepository;
        private readonly IUserProfileRepository _userProfileRepository;

        public CommentController(ICommentRepository commentRepository, IUserProfileRepository userProfileRepository)
        {
            _commentRepository = commentRepository;
            _userProfileRepository = userProfileRepository;
        }


        [HttpGet("GetAllCommentsByPost/{id}")]
        public IActionResult GetAllCommentsByPost(int id)
        {
            return Ok(_commentRepository.GetAllCommentsByPostId(id));
        }
        [HttpPost]
        public IActionResult Post(Comment comment)
        {

            _commentRepository.AddComment(comment);
            return CreatedAtAction("Get", new { id = comment.Id }, comment);

        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _commentRepository.DeleteComment(id);
            return NoContent();
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {

            Comment comment = _commentRepository.GetCommentById(id);
            if (comment == null)
            {
                return NotFound();
            }
            return Ok(comment);

        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Comment comment)
        {
            if (id != comment.Id)
            {
                return BadRequest();
            }
            _commentRepository.UpdateComment(comment);
            return NoContent();
        }
    }
}
