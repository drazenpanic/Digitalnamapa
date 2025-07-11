using Microsoft.AspNetCore.Mvc.RazorPages;
using Digitalnamapa.Models;

namespace Digitalnamapa.Pages
{
    public class IndexModel : PageModel
    {
        public List<PointOfInterest> Points { get; set; } = new();

        public void OnGet()
        {
            Points = new List<PointOfInterest>
            {
                new PointOfInterest
                {
                    Id = 1,
                    Name = "Carska Palata",
                    Description = "Istorijska lokacija u Sremskoj Mitrovici",
                    Latitude = 44.96662,
                    Longitude = 19.61008,
                    Type = PointType.Other,
                    IsActive = true
                },
                new PointOfInterest
                {
                    Id = 2,
                    Name = "Muzej Srema",
                    Description = "Regionalni muzej",
                    Latitude = 44.9674,
                    Longitude = 19.6090,
                    Type = PointType.Other,
                    IsActive = true
                },
                new PointOfInterest
                {
                    Id = 3,
                    Name = "Gradski park",
                    Description = "Centralni gradski park",
                    Latitude = 44.97639,
                    Longitude = 19.61222,
                    Type = PointType.Other,
                    IsActive = true
                },
                new PointOfInterest
                {
                    Id = 4,
                    Name = "Saborna crkva Svetog Dimitrija",
                    Description = "Srpska pravoslavna crkva",
                    Latitude = 44.96750,
                    Longitude = 19.60611,
                    Type = PointType.Other,
                    IsActive = true
                },
                new PointOfInterest
                {
                    Id = 5,
                    Name = "Spomen groblje",
                    Description = "Memorijalni kompleks",
                    Latitude = 44.97667,
                    Longitude = 19.60631,
                    Type = PointType.Other,
                    IsActive = true
                }
            };
        }
    }
} 