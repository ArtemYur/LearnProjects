using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ReactScratch.Entities;

namespace ReactScratch.Services
{
    public class GeoObjectRepository : IGeoObjectRepository
    {
        private static List<GeoObject> _repositoy = new List<GeoObject>
        {
            new GeoObject() { GeoObjectId = 1, Name = "World" },
            new GeoObject() { GeoObjectId = 2, Name = "Europe", ParentId = 1 },
            new GeoObject() { GeoObjectId = 3, Name = "North America", ParentId = 1 },
            new GeoObject() { GeoObjectId = 4, Name = "France", ParentId = 2 },
            new GeoObject() { GeoObjectId = 5, Name = "Germany", ParentId = 2 },
            new GeoObject() { GeoObjectId = 6, Name = "Paris", ParentId = 4 },
            new GeoObject() { GeoObjectId = 7, Name = "Berlin", ParentId = 5 },
            new GeoObject() { GeoObjectId = 8, Name = "United States", ParentId = 3 },
            new GeoObject() { GeoObjectId = 9, Name = "Canada", ParentId = 3 },
            new GeoObject() { GeoObjectId = 10, Name = "New York", ParentId = 8 },
            new GeoObject() { GeoObjectId = 11, Name = "Washington", ParentId = 8 },
            new GeoObject() { GeoObjectId = 12, Name = "New York City", ParentId = 10 },
            new GeoObject() { GeoObjectId = 13, Name = "Redmond", ParentId = 11 }
        };

        public Task<IQueryable<GeoObject>> Get()
        {
            return Task.Run(() => { return _repositoy.AsQueryable(); });      
        }
    }
}
