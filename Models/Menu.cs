using System.Collections.Generic;

namespace Vue.Models
{
    public class Menu
    {
        public string RestaurantName { get; set; }
        public IEnumerable<Item> Items { get; set; }

        public Menu()
        {
            Items = new List<Item>();
        }
    }
}
