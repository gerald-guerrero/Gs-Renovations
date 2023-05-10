using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Gs_Renovations.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SupportController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public SupportController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost("submission")]
        public async Task<IActionResult> SendMessage([FromBody] Dictionary<string, string> data)
        {
            try
            {
                string name = data["name"];
                string phone = data["phone"];
                string email = data["email"];
                string details = data["details"];

                // Get SMTP configuration from Azure configuration
                string smtpHost = _configuration["Smtp:Host"];
                int smtpPort = int.Parse(_configuration["Smtp:Port"]);
                string smtpUsername = _configuration["Smtp:Username"];
                string smtpPassword = _configuration["Smtp:Password"];
                string smtpFromEmail = _configuration["Smtp:FromEmail"];
                string smtpToEmail = _configuration["Smtp:ToEmail"];

                // Create and configure SMTP client
                using (var smtpClient = new SmtpClient(smtpHost, smtpPort))
                {
                    smtpClient.Credentials = new NetworkCredential(smtpUsername, smtpPassword);
                    smtpClient.EnableSsl = true;

                    // Create message
                    var message = new MailMessage();
                    message.From = new MailAddress(smtpFromEmail);
                    message.To.Add(smtpToEmail);
                    message.Subject = $"Support request from {name}";
                    message.Body = $"name: {name}\nphone: {phone}\nemail: {email}\ndetails: {details}";

                    // Send message
                    await smtpClient.SendMailAsync(message);
                }

                return Ok();
            }
            catch (Exception ex)
            {
                // Log the exception and return an error response
                Console.Error.WriteLine(ex.ToString());
                return StatusCode(500);
            }
        }

        [HttpGet("phoneNumber")]
        public IActionResult GetPhoneNumber()
        {
            var phoneNumber = _configuration["PhoneNumber"];
            return Ok(phoneNumber);
        }
    }
}
