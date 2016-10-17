using Newtonsoft.Json;
using ReactScratch.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace ReactScratch.Models
{
    class SearchResult
    {
        public int id { get; set; }
        
        public string name { get; set; }
        
        public string description { get; set; }
        
        public SearchResult parentGeoObejct { get; set; }
        
        public IList<SearchResult> childGeoObjects { get; set; }  
    }
}
