using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using netcore_vue.Models;

namespace netcore_vue.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            var viewModel = GetMenuViewModel();
            return View(viewModel);
        }

        [Route("api/menuItems")]
        public JsonResult MenuItems()
        {
            var viewModel = GetMenuViewModel();
            return Json(viewModel);
        }

        private static MenuViewModel GetMenuViewModel() {
            return new MenuViewModel
            {
                Menu = new Menu {
                    Items = new List<Item> {
                        new Item {
                            Id = 1,
                            Name = "Traditional Lemonade &amp; Mint",
                            Price = 2.51m
                        },
                        new Item {
                            Id = 2,
                            Name = "Mojo Juice, Apple",
                            Price = 2.51m
                        },
                        new Item {
                            Id = 3,
                            Name = "Mojo Juice, Mango",
                            Price = 2.51m
                        },
                        new Item {
                            Id = 4,
                            Name = "Mojo Juice, Orange",
                            Price = 2.51m
                        },
                        new Item {
                            Id = 5,
                            Name = "Tropical Lightning, Apple",
                            Price = 2.51m
                        }
                    }
                },
                Basket = new Basket {
                    DeliveryFee = 0.5m,
                    Items = new List<Item> {
                        new Item {
                            Id = 2,
                            Quantity = 2
                        }
                    }
                }
            };
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
