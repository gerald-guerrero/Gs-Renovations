using Microsoft.AspNetCore.Mvc;

namespace Gs_Renovations.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SupportController : ControllerBase
    {
        
        [HttpGet]
        [Route ("request")]
        public string[] temp()
        {
            return new string[] { "Request Recieved" };
        }
       
    }
}