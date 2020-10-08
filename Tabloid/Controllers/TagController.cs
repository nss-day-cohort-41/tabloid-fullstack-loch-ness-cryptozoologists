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
        private readonly IUserProfileRepository _userProfileRepository;

        public TagController(ITagRepository tagRepository, IUserProfileRepository userProfileRepository)
        {
            _tagRepository = tagRepository;
            _userProfileRepository = userProfileRepository;
        }
        /* SET UP ABOVE */


        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_tagRepository.GetAll());
        }

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

        // POST api/<TagController>
        /*[HttpPost]
        public void Post([FromBody] string value)
        {
        }*/

        // PUT api/<TagController>/5
        /*[HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }*/

        // DELETE api/<TagController>/5
        /*[HttpDelete("{id}")]
        public void Delete(int id)
        {
        }*/
    }
}
