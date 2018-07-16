using System.Collections.Generic;

namespace netcore_vue.Models
{
    public class Basket
    {
        public IEnumerable<Item> Items { get; set; }
        public decimal DeliveryFee { get; set; }

        public Basket()
        {
            Items = new List<Item>();
        }
    }
}
