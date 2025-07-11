using System;

namespace Digitalnamapa.Models
{
    public class PointOfInterest
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string FullDescription { get; set; } = string.Empty;
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public PointType Type { get; set; }
        public string? Icon { get; set; }
        public bool IsActive { get; set; }
        public TimeSpan? OpenTime { get; set; }
        public TimeSpan? CloseTime { get; set; }
        public List<Event> Events { get; set; } = new List<Event>();
    }

    public class Event
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public DateTime Date { get; set; }
        public string Time { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
    }

    public enum PointType
    {
        Stage,
        Food,
        WC,
        Kids,
        Other,
        Dešavanja,
        Servisi
    }
} 