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
            var initialMessages = FakeMessageStore.FakeMessages
                .OrderByDescending(m => m.Date)
                .Take(2);

            var initialValues = new ClientState()
            {
                Messages = initialMessages,
                LastFetchedMessageDate = initialMessages.Last().Date
            };

            return View(initialValues);
        }

        [Route("initialMessages")]
        public JsonResult InitialMessages()
        {
            var initialMessages = FakeMessageStore.FakeMessages
                .OrderByDescending(m => m.Date)
                .Take(2);

            var initialValues = new ClientState()
            {
                Messages = initialMessages,
                LastFetchedMessageDate = initialMessages.Last().Date
            };

            return Json(initialValues);
        }

        [Route("fetchMessages")]
        public JsonResult FetchMessages(DateTime lastFetchedMessageDate)
        {
            return Json(FakeMessageStore.FakeMessages
                .OrderByDescending(m => m.Date)
                .SkipWhile(m => m.Date >= lastFetchedMessageDate).Take(1));
        }

        [Route("api/menuItems")]
        public JsonResult MenuItems()
        {
            var viewModel = new MenuViewModel
            {
                Items = new List<Item> {
                    new Item {
                        Name = "Traditional Lemonade &amp; Mint",
                        Price = 2.39m
                    },
                    new Item {
                        Name = "Mojo Juice, Apple",
                        Price = 2.39m
                    },
                    new Item {
                        Name = "Mojo Juice, Mango",
                        Price = 2.39m
                    },
                    new Item {
                        Name = "Mojo Juice, Orange",
                        Price = 2.39m
                    },
                    new Item {
                        Name = "Tropical Lightning, Apple",
                        Price = 2.39m
                    }
                }
            };

            return Json(viewModel);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
