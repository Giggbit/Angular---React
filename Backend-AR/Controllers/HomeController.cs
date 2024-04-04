using Backend_AR.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Backend_AR.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        public HomeController(ILogger<HomeController> logger) {
            _logger = logger;
        }

        public IActionResult Index() {
            return View();
        }

        public IActionResult Privacy() {
            return View();
        }

        public JsonResult Auth([FromBody] AuthModel authModel) {
            _logger.Log(LogLevel.Information, $"{authModel.UserLogin} {authModel.UserPassword} {authModel.UserEmail} {authModel.UserGender}");
            return Json(authModel);
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error() {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
