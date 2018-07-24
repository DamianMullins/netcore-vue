using System.Collections.Generic;

namespace netcore_vue.Models
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
