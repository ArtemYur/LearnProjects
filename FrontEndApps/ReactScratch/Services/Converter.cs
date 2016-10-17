using ReactScratch.Entities;
using ReactScratch.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactScratch.Services
{
    static class Converter
    {
        public static SearchResult Convert(this GeoObject record)
        {
            return new SearchResult
            {
                id = record.GeoObjectId,
                name = record.Name,
                description = record.Description
            };
        } 
    }
}
