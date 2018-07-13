using System.Collections.Generic;
using Newtonsoft.Json;

namespace netcore_vue.Models
{
    public class MenuViewModel
    {
        [JsonProperty(PropertyName = "items")]
        public IEnumerable<Item> Items { get; set; }
    }
}
