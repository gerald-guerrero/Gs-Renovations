using Microsoft.AspNetCore.Mvc;

namespace Gs_Renovations.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SupportController : ControllerBase
    {
        
        [HttpPost]
        public async Task<IActionResult> SendMessage([FromBody] Dictionary<string, string> data)
        {
            string name = data["name"];
            string phone = data["phone"];
            string email = data["email"];
            string details = data["details"];
            
            Console.WriteLine(name);
            Console.WriteLine(email);
            Console.WriteLine(phone);
            Console.WriteLine(details);
            

            return Ok();
        }
       
    }
}