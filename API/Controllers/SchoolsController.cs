using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace EduLink.API.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class SchoolsController : ControllerBase
    {
        private readonly DataContext _context;
        public SchoolsController(DataContext context)
        {
            _context = context;
        }

        // GET api/schools
        [HttpGet]
        public async Task<ActionResult<IEnumerable<School>>> Get()
        {
            var schools = await _context.Schools.ToListAsync();
            return Ok(schools);
        }

        // GET api/schools/5
        [HttpGet("{id}")]
        public async Task<ActionResult<School>> Get(int id)
        {
            var school = await _context.Schools.FindAsync(id);
            return Ok(school);
        }

        // POST api/schools
        [HttpPost]
        public void Post([FromBody] string schoolName)
        {
        }

        // PUT api/schools/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string schoolName)
        {
        }

        // DELETE api/schools/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
