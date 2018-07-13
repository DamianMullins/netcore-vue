using System;
using System.Collections.Generic;

namespace netcore_vue.Models
{
    public class ClientState
    {
        public IEnumerable<Message> Messages { get; set; }

        public DateTime LastFetchedMessageDate { get; set; }
    }
}
