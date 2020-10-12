using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Tabloid.Models;
using Tabloid.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Tabloid.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TagController : ControllerBase
    {
        private readonly ITagRepository _tagRepository;

        public TagController(ITagRepository tagRepository)
        {
            _tagRepository = tagRepository;
        }
        //getall tags
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_tagRepository.GetAllTags());
        }
        //add
        [HttpPost]
        public IActionResult AddTag(Tag tag)
        {
            _tagRepository.AddTag(tag);
            return CreatedAtAction("Get", new { id = tag.Id }, tag);
        }
        //update
        [HttpPut("{id}")]
        public IActionResult Put(int id, Tag tag)
        {
            if (id != tag.Id)
            {
                return BadRequest();
            }

            _tagRepository.Edit(tag);
            return NoContent();
        }
        //delete

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _tagRepository.Delete(id);
            return NoContent();
        }
        //by id
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var tag = _tagRepository.GetById(id);
            if (tag != null)
            {
                NotFound();
            }
            return Ok(tag);
        }

    }
}
