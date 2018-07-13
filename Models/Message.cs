using System;

namespace netcore_vue.Models
{
    public class Message
    {
        public DateTime Date { get; set; }

        public string Title { get; set; }

        public string Text { get; set; }

        private Message() { }

        public static Message CreateMessage(string title, string text, DateTime date)
        {
            return new Message()
            {
                Title = title,
                Text = text,
                Date = date
            };
        }
    }
}
